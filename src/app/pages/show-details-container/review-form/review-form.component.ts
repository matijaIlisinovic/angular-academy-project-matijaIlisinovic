import {
	Component,
	ChangeDetectionStrategy,
	EventEmitter,
	Output,
	Input,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRawReview } from '../show-details-container.component';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent implements OnChanges {
	constructor(private fb: FormBuilder) {}
	@Output() submitReview: EventEmitter<IRawReview> = new EventEmitter();
	@Input() showId: string;
	@Input() rating: number;

	ngOnChanges(): void {
		this.reviewFormGroup.get('rating')?.setValue(this.rating);
	}

	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required, Validators.max(5), Validators.min(1)]],
	});

	public onSubmitReview(): void {
		this.submitReview.emit({
			comment: this.reviewFormGroup.get('comment')?.value,
			rating: this.reviewFormGroup.get('rating')?.value,
			show_id: this.showId,
		});
		this.reviewFormGroup.reset();
	}
}