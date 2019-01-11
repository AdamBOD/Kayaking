import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeaKayakingComponent } from './sea-kayaking/sea-kayaking.component';
import { RiverKayakingComponent } from './river-kayaking/river-kayaking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sea-kayaking', component: SeaKayakingComponent},
  {path: 'river-kayaking', component: RiverKayakingComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
