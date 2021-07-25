import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IShowData } from '../interfaces/showData.interface';
import { Show } from './show.model';
import { delay, map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShowData> }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				console.log(response);
				return response.shows.map((data: IShowData) => new Show(data));
			})
		);
		/*
		return of(this.shows).pipe(
			map((a) => {
				if (Math.random() < 0.1) {
					throw 'Unable to load shows';
				}
				return a;
			}),
			delay(Math.random() * 1000 + 1000)
		);*/
	}
	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show: Show) => show.averageRating >= 4)));
	}
	public getShow(id: string): Observable<Show | null> {
		return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
	}
}
