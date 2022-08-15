import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [

    { path: '', component: WelcomePageComponent },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'catalogue', component: CataloguePageComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
