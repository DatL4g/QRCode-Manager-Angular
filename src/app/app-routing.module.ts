import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'main', redirectTo: '/', pathMatch: 'full' },
  { path: 'index', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ScanComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ScanComponent,
  CreateComponent
]
