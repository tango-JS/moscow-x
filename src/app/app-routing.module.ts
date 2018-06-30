import { AuthorizedGuard } from './guards/authorized/authorized.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    // children: [
    //   { path: ':name', component: PortfolioDetailComponent }
    // ]
  },
  { path: 'portfolio/:name', component: PortfolioDetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthorizedGuard] },

  { path: 'portfolios', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
