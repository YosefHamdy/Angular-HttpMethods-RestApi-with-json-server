import { NgModule } from '@angular/core';
import { HomeComponent } from '../../../HttpServices/src/app/home/home.component';
import { UserDetailsComponent } from '../../../HttpServices/src/app/user-details/user-details.component';
import { UserComponent } from '../../../HttpServices/src/app/user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ``, component: HomeComponent },
  { path: `user/:id`, component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
