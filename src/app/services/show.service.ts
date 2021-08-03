import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShowData } from '../interfaces/showData.interface';
import { Show } from './show.model';
import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShowData> }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.shows.map((data: IShowData) => new Show(data));
			})
		);
	}
	public getTopRated(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IShowData> }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.shows.map((data: IShowData) => new Show(data));
			})
		);
	}
	public getShow(id: string): Observable<Show | null> {
		return this.http.get<{ show: IShowData }>('https://tv-shows.infinum.academy/shows/' + id).pipe(
			map((response) => {
				return new Show(response.show);
			})
		);
	}
}
