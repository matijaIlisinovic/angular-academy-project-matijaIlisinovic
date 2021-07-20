import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsComponent {
	@Input() show: Show;
}
