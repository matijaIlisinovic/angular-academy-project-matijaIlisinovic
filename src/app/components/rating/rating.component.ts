import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getMatIconNoHttpProviderError } from '@angular/material/icon';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
	@Input() averageRating: number;

	starFunction() {
		let starString = '';
		for (let i = 0; i < this.averageRating - 0.5; i++) {
			starString = starString.concat(' star');
		}
		return starString;
	}
}
