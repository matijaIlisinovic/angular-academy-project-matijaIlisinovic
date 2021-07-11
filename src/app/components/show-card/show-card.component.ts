import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent {
	@Input() title: string;
	@Input() rating: number;
	@Input() imgUrl: string;
}
