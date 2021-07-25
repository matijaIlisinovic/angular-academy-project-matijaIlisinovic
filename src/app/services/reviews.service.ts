import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { IReview } from '../interfaces/review.interface';
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
}
