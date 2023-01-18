import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchiesDetailsComponent } from './hierarchies-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HierarchiesDetailsComponent },
];

@NgModule({
  declarations: [HierarchiesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
  ]
})
export class HierarchiesDetailsModule { }
