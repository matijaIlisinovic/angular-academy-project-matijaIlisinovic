import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	data = [
		{
			title: 'Doctor Who',
			description: 'Time travelly humanity savey person travels around and does silly faces',
			average_rating: 4.2,
			imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Doctor_Who_-_Current_Titlecard.png',
		},
		{
			title: 'Black Mirror',
			description: 'What horrors await us as we venture into a new age of technology',
			average_rating: 4.61,
			imgUrl: 'https://www.nme.com/wp-content/uploads/2018/12/bm-696x442.png',
		},
		{
			title: 'Sex Education',
			description: 'A well written teen drama that deals with stereotypical subjects such as weirdness of puberty',
			average_rating: 4,
			imgUrl:
				'https://thefilmyseries.com/wp-content/uploads/2021/03/Sex-Education-Season-3-cast-what-to-expect-and-release-date.jpeg',
		},
		{
			title: 'The Big Bang Theory',
			description:
				'Can a nerd win over a pretty girl? Find out as you watch weirdly conceptualised characters engage in conversation.',
			average_rating: 3.3,
			imgUrl: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-6482810627.jpg',
		},
		{
			title: 'School Days',
			description: 'trash',
			average_rating: 1,
			imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91SewQYjB%2BL._SL1500_.jpg',
		},
	];
	shows: Array<Show>;

	ngOnInit() {
		this.shows = this.data.map((showData) => {
			let a = new Show(showData);
			console.log(a.getPercentage());
			return a;
		});
	}
}
