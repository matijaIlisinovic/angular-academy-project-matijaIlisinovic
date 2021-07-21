import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AllShowsContainerComponent,
			},
			{
				path: 'top-rated',
				component: TopRatedShowsContainerComponent,
			},
			{
				path: 'show/:id',
				component: ShowDetailsContainerComponent,
			},
		],
	},
	{
		path: '',
		component: FormLayoutComponent,
		children: [
			{ path: 'login', component: LoginContainerComponent },
			{ path: 'registration', component: RegistrationContainerComponent },
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
