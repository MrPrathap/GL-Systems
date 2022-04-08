import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';
import { filter, map } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { environment } from '../environments/environment';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition(
        '1 => 2, 1 => 3, 1 => 4, 1 => 5, 1 => 6, 1 => 7, 1 => 8, 1 => 9, 2 => 3, 2 => 4, 2 => 5, 2 => 6, 2 => 7, 2 => 8, 2 => 9, 3 => 4, 3 => 5, 3 => 6, 3 => 7, 3 => 8, 3 => 9, 4 => 5, 4 => 6, 4 => 7, 4 => 8, 4 => 9, 5 => 6, 5 => 7, 5 => 8, 5 => 9,  6 => 7, 6 => 8, 6 => 9, 7 => 8, 7 => 9, 8 => 9',
        [
          style({ height: '!' }),
          query(':enter', style({ transform: 'translateX(100%)' })),
          query(
            ':enter, :leave',
            style({ position: 'absolute', top: 0, left: 0, right: 0 })
          ),
          // animate the leave page away
          group([
            query(':leave', [
              animate(
                '400ms cubic-bezier(.35,0,.25,1)',
                style({ transform: 'translateX(-100%)' })
              ),
            ]),
            // and now reveal the enter
            query(
              ':enter',
              animate(
                '400ms cubic-bezier(.35,0,.25,1)',
                style({ transform: 'translateX(0)' })
              )
            ),
          ]),
        ]
      ),
      transition(
        '2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1, 3 => 2, 4 => 2, 5 => 2, 6 => 2, 7 => 2, 8 => 2, 9 => 2, 4 => 3, 5 => 3, 6 => 3, 7 => 3, 8 => 3, 9 => 3, 5 => 4, 6 => 4, 7 => 4, 8 => 4, 9 => 4, 6 => 5, 7 => 5, 8 => 5, 9 => 5, 7 => 6, 8 => 6, 9 => 6, 8 => 7, 9 => 7, 9 => 8',
        [
          style({ height: '!' }),
          query(':enter', style({ transform: 'translateX(-100%)' })),
          query(
            ':enter, :leave',
            style({ position: 'absolute', top: 0, left: 0, right: 0 })
          ),
          // animate the leave page away
          group([
            query(':leave', [
              animate(
                '400ms cubic-bezier(.35,0,.25,1)',
                style({ transform: 'translateX(100%)' })
              ),
            ]),
            // and now reveal the enter
            query(
              ':enter',
              animate(
                '400ms cubic-bezier(.35,0,.25,1)',
                style({ transform: 'translateX(0)' })
              )
            ),
          ]),
        ]
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'Geniland';
  isDisplay: boolean = true;
  message: any = null;

  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private update: SwUpdate,
    private appRef: ApplicationRef
  ) {
    //Update notification dyclaration:.....
    this.updateClient();
  }

  ngOnInit(): void {
    //ScrollTop when routing occurs:.....
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    //................................................................

    //Browser Tab Title changing:.....
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      )
      .subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
    //................................................................

    //Offline notification
    if (!window.navigator.onLine) {
      this.isDisplay = false;
      this.router.navigate(['/gl-offline']);
    }

    this.requestPermission();
    this.listen();
  }
  //................................................................

  //Routing animation's:.....
  getDepth(outlet: { activatedRouteData: { [x: string]: any } }) {
    return outlet.activatedRouteData['depth'];
  }
  //................................................................

  //Service worker:.....
  updateClient() {
    if (!this.update.isEnabled) {
      console.log('Not Enabled');
      return;
    }
    this.update.available.subscribe((event) => {
      console.log('current', event.current, 'available', event.available);
      if (confirm('New update for UI development, Please confirm to proceed')) {
        this.update.activateUpdate().then(() => location.reload());
      }
    });
    this.update.activated.subscribe((event) => {
      console.log('current', event.previous, 'available', event.current);
    });
  }
  //................................................................
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if (isStable) {
        const timeInterval = interval(1000);
        timeInterval.subscribe(() => {
          this.update.checkForUpdate().then(() => console.log('checked'));
          console.log('update checked');
        });
      }
    });
  }
  //..........................Notification center......................................
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: environment.firebase.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Welcome to GL Computer Reserve');
          console.log('Interating to GLCR server');
        } else {
          console.log('Interating to GLCR server');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
  //................................................................
}
