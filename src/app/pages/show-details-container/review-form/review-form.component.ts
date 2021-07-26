import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ReviewFormData {
	comment: string;
	rating: number;
}

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent {
	constructor(private fb: FormBuilder) {}
	@Output() submitReview: EventEmitter<ReviewFormData> = new EventEmitter();

	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', []],
		rating: ['', [Validators.required, Validators.max(5), Validators.min(1)]],
	});
	public onSubmitReview(): void {
		this.submitReview.emit(this.reviewFormGroup.value);
		this.reviewFormGroup.reset();
	}
}
