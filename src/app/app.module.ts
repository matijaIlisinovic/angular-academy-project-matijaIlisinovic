import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/login-form/login-form.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { RatingComponent } from './components/rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationFormComponent } from './pages/registration-container/registration-form/registration-form.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopRatedShowsContainerComponent } from './pages/top-rated-shows-container/top-rated-shows-container.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { ReviewFormComponent } from './pages/show-details-container/review-form/review-form.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		FormLayoutComponent,
		LoadingSpinnerComponent,
		LoginContainerComponent,
		LoginFormComponent,
		MainLayoutComponent,
		RatingComponent,
		RegistrationContainerComponent,
		RegistrationFormComponent,
		ReviewCardComponent,
		ReviewListComponent,
		ShowCardComponent,
		ShowDetailsComponent,
		ShowDetailsContainerComponent,
		ShowListComponent,
		SidenavComponent,
		TopRatedShowsContainerComponent,
		ReviewFormComponent,
  StarRatingComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSidenavModule,
		MatSnackBarModule,
		ReactiveFormsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
