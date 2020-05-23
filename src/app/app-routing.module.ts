import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScanComponent} from './scan/scan.component';
import {CreateComponent} from './create/create.component';
import {TextContentComponent} from "./create/text-content/text-content.component";
import {NetworkContentComponent} from "./create/network-content/network-content.component";

const routes: Routes = [
  {path: 'main', redirectTo: '/', pathMatch: 'full'},
  {path: 'index', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: ScanComponent},
  {
    path: 'create', component: CreateComponent, children: [
      { path: 'text', redirectTo: '/create', pathMatch: 'full' },
      { path: '', component: TextContentComponent },
      { path: 'network', component: NetworkContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  ScanComponent,
  CreateComponent,
  TextContentComponent,
  NetworkContentComponent
]
