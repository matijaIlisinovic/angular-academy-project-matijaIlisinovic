import { IReview } from '../interfaces/review.interface';

export class Review {
	public constructor(data: IReview) {
		this.showId = data.showId;
		this.text = data.text;
		this.rating = data.rating;
	}

	public showId: string;
	public text: string;
	public rating: number;
}
