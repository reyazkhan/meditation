import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  // { path:'',component:ListingComponent},
  // { path:'tablet',component:ListingComponent},
  // { path:'capsule',component:ListingComponent},
  // { path:'syrup',component:ListingComponent},
  // { path:'add/:type',component:AddFormComponent},
  // { path:'**',redirectTo:'tablet'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
