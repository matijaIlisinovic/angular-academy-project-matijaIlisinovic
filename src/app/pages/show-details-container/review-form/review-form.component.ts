import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IRawReview } from '../show-details-container.component';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent implements OnChanges {
	constructor(private fb: FormBuilder, private route: ActivatedRoute) {}
	@Output() submitReview: EventEmitter<IRawReview> = new EventEmitter();

	@Input() rating: number;

	public showId: string | null = this.route.snapshot.paramMap.get('id');

	ngOnChanges(): void {
		this.reviewFormGroup.get('rating')?.setValue(this.rating);
	}

	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required, Validators.max(5), Validators.min(1)]],
	});

	public onSubmitReview(): void {
		if (this.showId) {
			this.submitReview.emit({
				comment: this.reviewFormGroup.get('comment')?.value,
				rating: this.reviewFormGroup.get('rating')?.value,
				show_id: this.showId,
			});
			this.reviewFormGroup.reset();
		}
	}
}
