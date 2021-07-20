import { IReview } from '../interfaces/review.interface';

export class Review {
	public constructor(data: IReview) {
		this.showId = data.showId;
		this.comment = data.comment;
		this.rating = data.rating;
	}

	public showId: string;
	public comment: string;
	public rating: number;
}