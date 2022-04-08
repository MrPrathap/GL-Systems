import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//Angular Material Components
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
//GlobalNavbar content components
import { HomeComponent } from './home/home.component';
import { UpgradableComponent } from './upgradable/upgradable.component';
import { GamingComponent } from './gaming/gaming.component';
import { EditingComponent } from './editing/editing.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { CustomComponent } from './custom/custom.component';
//Inner Navigators content components
import { ArenaComponent } from './arena/arena.component';
import { Arena1Component } from './arena1/arena1.component';
import { BookArena1Component } from './book-arena1/book-arena1.component';
import { Arena1500CheckoutComponent } from './arena1500-checkout/arena1500-checkout.component';
import { Arena11tbCheckoutComponent } from './arena11tb-checkout/arena11tb-checkout.component';
import { MarkTwoComponent } from './mark-two/mark-two.component';
import { MarkComponent } from './mark/mark.component';
import { MarkThreeComponent } from './mark-three/mark-three.component';
//Inner components
import { SliderComponent } from './slider/slider.component';
import { Rotari1PurchaseComponent } from './rotari1-purchase/rotari1-purchase.component';
import { AudioDialogComponent } from './audio-dialog/audio-dialog.component';
import { UsbDialogComponent } from './usb-dialog/usb-dialog.component';
import { BluetoothDialogComponent } from './bluetooth-dialog/bluetooth-dialog.component';
import { WifiDialogComponent } from './wifi-dialog/wifi-dialog.component';
import { LanDialogComponent } from './lan-dialog/lan-dialog.component';
import { RgbDialogComponent } from './rgb-dialog/rgb-dialog.component';
import { GlOfflineComponent } from './gl-offline/gl-offline.component';
import { RouterModule } from '@angular/router';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    HomeComponent,
    SidenavListComponent,
    SliderComponent,
    MarkTwoComponent,
    ArenaComponent,
    Arena1Component,
    MarkComponent,
    MarkThreeComponent,
    UpgradableComponent,
    GamingComponent,
    EditingComponent,
    ProductivityComponent,
    CustomComponent,
    Rotari1PurchaseComponent,
    AudioDialogComponent,
    UsbDialogComponent,
    BluetoothDialogComponent,
    WifiDialogComponent,
    LanDialogComponent,
    RgbDialogComponent,
    GlOfflineComponent,
    BookArena1Component,
    Arena1500CheckoutComponent,
    Arena11tbCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule,
    ScrollingModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: environment.production,
       registrationStrategy: 'registerWhenStable:500'
      }),
      RouterModule.forRoot([
        { path: 'gl-offline', component: GlOfflineComponent }
      ]),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAnalytics(() => getAnalytics()),
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
      provideFirestore(() => getFirestore()),
      provideFunctions(() => getFunctions()),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideRemoteConfig(() => getRemoteConfig()),
      provideStorage(() => getStorage())
  ],
  providers: [
    Title,
    { provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } },
    ScreenTrackingService,UserTrackingService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
