import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
	{ path: '', component: MainLayoutComponent },
	{ path: 'sidenav', component: SidenavComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
