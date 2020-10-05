import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  {path: 'about', component: AboutPageComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  {path: 'pdf', component: PdfComponent },
  {path: 'page', component: PageNotFoundComponent },
  {path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
