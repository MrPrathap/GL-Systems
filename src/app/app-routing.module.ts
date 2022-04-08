import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Navbar Component routes//
import { HomeComponent } from './home/home.component';
import { UpgradableComponent } from './upgradable/upgradable.component';
import { GamingComponent } from './gaming/gaming.component';
import { EditingComponent } from './editing/editing.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { CustomComponent } from './custom/custom.component';
//Inner Navigator routes//
import { Arena1Component } from './arena1/arena1.component';
import { BookArena1Component } from './book-arena1/book-arena1.component';
import { Arena1500CheckoutComponent } from './arena1500-checkout/arena1500-checkout.component';
import { Arena11tbCheckoutComponent } from './arena11tb-checkout/arena11tb-checkout.component';
import { Rotari1PurchaseComponent } from './rotari1-purchase/rotari1-purchase.component';
import { MarkTwoComponent } from './mark-two/mark-two.component';
import { MarkThreeComponent } from './mark-three/mark-three.component';

const routes: Routes = [
//Navbar transition path's
  { path: '', component: HomeComponent, data: { title: 'GL Systems', depth: 1 } },
  { path: 'Upgradable', component: UpgradableComponent, data: { title: 'Upgradable - GL', depth: 2 } },
  { path: 'Gaming', component: GamingComponent, data: { title: 'Gaming - GL', depth: 3 } },
  { path: 'Editing', component: EditingComponent, data: { title: 'Editing - GL', depth: 4 } },
  { path: 'Productivity', component: ProductivityComponent, data: { title: 'Productivity - GL', depth: 5 } },
  { path: 'Custom', component: CustomComponent, data: { title: 'Custom - GL', depth: 6 } },
  //Inner links transition path's
  { path: 'Gaming/Arena-1', component: Arena1Component, data: { title: 'Arena 1', depth: 4 } },
  { path: 'Gaming/Book/Arena/Arena-1-series', component: BookArena1Component, data: { title: 'Book Arena 1 Series', depth: 5 } },
  { path: 'Gaming/Book/Arena/Arena-1-series/Arena-1-500GB-Model', component: Arena1500CheckoutComponent, data: { title: 'Arena 1(500GB)', depth: 6 } },
  { path: 'Gaming/Book/Arena/Arena-1-series/Arena-1-1TB-Model', component: Arena11tbCheckoutComponent, data: { title: 'Arena 1(1TB)', depth: 6 } },
  { path: 'Rotar-i1_Purchase', component: Rotari1PurchaseComponent, data: { title: 'Rotar-i1 Purchase - GL', depth: 5 } },
  { path: 'Mark-II', component: MarkTwoComponent, data: { title: 'Mark II', depth: 6 } },
  { path: 'Mark-III', component: MarkThreeComponent, data: { title: 'Mark III', depth: 7 } },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }