import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './pages/stock/summary/summary.component';
import { TrackComponent } from './pages/stock/track/track.component';

const routes: Routes = [
  {path:'', component: TrackComponent},
  {path:'sentiment/:symbol', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
