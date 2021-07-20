import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IShowData } from '../interfaces/showData.interface';
import { Show } from './show.model';
import { delay, map } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private data: Array<IShowData> = [
		{
			title: 'Doctor Who',
			id: '1',
			description: 'Time travelly humanity savey person travels around and does silly faces',
			average_rating: 4.2,
			imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Doctor_Who_-_Current_Titlecard.png',
		},
		{
			title: 'Black Mirror',
			id: '2',
			description: 'What horrors await us as we venture into a new age of technology',
			average_rating: 4.61,
			imgUrl: 'https://www.nme.com/wp-content/uploads/2018/12/bm-696x442.png',
		},
		{
			title: 'Sex Education',
			id: '3',
			description: 'A well written teen drama that deals with stereotypical subjects such as weirdness of puberty',
			average_rating: 4,
			imgUrl:
				'https://thefilmyseries.com/wp-content/uploads/2021/03/Sex-Education-Season-3-cast-what-to-expect-and-release-date.jpeg',
		},
		{
			title: 'The Big Bang Theory',
			id: '4',
			description:
				'Can a nerd win over a pretty girl? Find out as you watch weirdly conceptualised characters engage in conversation.',
			average_rating: 3.3,
			imgUrl: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-6482810627.jpg',
		},
		{
			title: 'School Days',
			id: '5',
			description: 'trash',
			average_rating: 1,
			imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91SewQYjB%2BL._SL1500_.jpg',
		},
	];

	private get shows(): Array<Show> {
		if (Math.random() < 0.9) {
			throw 'Unable to fetch shows';
		}
		return this.data.map((showData: IShowData) => {
			let a = new Show(showData);
			return a;
		});
	}

	public getShows(): Observable<Array<Show>> {
		return of(this.shows).pipe(delay(Math.random() * 1000 + 1000));
	}
	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show: Show) => show.averageRating > 4)));
	}
	public getShow(id: string): Observable<Show | null> {
		return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
	}
}
