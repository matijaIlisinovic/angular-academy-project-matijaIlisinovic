import { IReview } from '../interfaces/review.interface';

export class Review {
	public constructor(data: IReview) {
		this.showId = data.show_id;
		this.id = data.id;
		this.comment = data.comment;
		this.rating = data.rating;
	}

	public showId: string;
	public id: string;
	public comment: string;
	public rating: number;
}
