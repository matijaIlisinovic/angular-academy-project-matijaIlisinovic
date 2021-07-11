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
			title: 'review',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
		{
			title: 'review',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
		{
			title: 'review',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
	];
	shows: Array<Show> = [
		{
			title: 'review',
			description: 'description',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
		{
			title: 'review',
			description: 'description',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
		{
			title: 'review',
			description: 'description',
			averageRating: 4,
			imgUrl: 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
		},
	];
}
