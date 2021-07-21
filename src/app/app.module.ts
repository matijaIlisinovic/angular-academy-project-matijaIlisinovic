import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoginRegistrationContainerComponent } from './pages/login-registration-container/login-registration-container.component';
import { LoginFormComponent } from './pages/login-registration-container/login-form/login-form.component';
import { RegistrationFormComponent } from './pages/login-registration-container/registration-form/registration-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		SidenavComponent,
		AllShowsContainerComponent,
		ShowListComponent,
		ShowCardComponent,
		RatingComponent,
		TopRatedShowsContainerComponent,
		ShowDetailsContainerComponent,
		ShowDetailsComponent,
		ReviewListComponent,
		ReviewCardComponent,
		LoadingSpinnerComponent,
		FormLayoutComponent,
		LoginRegistrationContainerComponent,
		LoginFormComponent,
		RegistrationFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		AppRoutingModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
