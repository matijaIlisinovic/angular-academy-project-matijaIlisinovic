import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
	@Input() averageRating: number;

	public starFunction(): string {
		let starString = '';
		let j = 5;
		for (let i = 0; i < this.averageRating - 0.5; i++) {
			starString = starString.concat(' star');
			j--;
		}
		while (j > 0) {
			starString = starString.concat(' star_outline');
			j--;
		}
		return starString;
	}
}
