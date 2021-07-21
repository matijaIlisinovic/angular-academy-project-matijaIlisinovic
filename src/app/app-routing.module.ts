import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoginRegistrationContainerComponent } from './pages/login-registration-container/login-registration-container.component';
import { LoginFormComponent } from './pages/login-registration-container/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/login-registration-container/registration-form/registration-form.component';

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
			{
				path: '',
				component: LoginRegistrationContainerComponent,
				children: [
					{ path: 'login', component: LoginFormComponent },
					{ path: 'registration', component: RegistrationFormComponent },
				],
			},
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
