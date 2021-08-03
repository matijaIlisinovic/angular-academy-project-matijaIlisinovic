import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IReview } from '../interfaces/review.interface';
import { IRawReview } from '../pages/show-details-container/show-details-container.component';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewsService {
	constructor(private http: HttpClient) {}

	public getReviews(id: string | null): Observable<Array<Review>> {
		return this.http.get<{ reviews: Array<IReview> }>('https://tv-shows.infinum.academy/shows/' + id + '/reviews').pipe(
			map((response) => {
				console.log(response);
				return response.reviews.map((data: IReview) => new Review(data));
			})
		);
	}
	public onReviewAdd(reviewData: IRawReview): Observable<IRawReview> {
		return this.http.post<IRawReview>('https://tv-shows.infinum.academy/reviews', reviewData);
	}
	public deleteReview(id: string): Observable<Review> {
		return this.http.delete<Review>('https://tv-shows.infinum.academy/reviews/' + id);
	}
}
