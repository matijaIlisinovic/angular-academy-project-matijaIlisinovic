import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	constructor() {}

	@Output() newRatingEvent = new EventEmitter<number>();

	public rating = 0;
	private starCount = 5;
	public ratingArray: boolean[] = Array(this.starCount).fill(false);

	public returnStar(i: number) {
		if (this.rating >= i + 1) {
			return 'star';
		} else {
			return 'star_border';
		}
	}
	public onClick(i: number) {
		this.rating = i + 1;
		this.newRatingEvent.emit(this.rating);
	}
	public resetStars() {
		this.rating = 0;
	}
}
