import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ServicesGuard } from './services.guard';

const routes: Routes = [
  {path: 'hierarchies-details', loadChildren: () => import( './pages/hierarchies-details/hierarchies-details.module' ).then( m => m.HierarchiesDetailsModule ), canActivate: [ServicesGuard] },
  {path:'signin',component:LoginComponent},
  {path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
