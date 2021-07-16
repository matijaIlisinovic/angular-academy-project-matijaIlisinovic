import { IReview } from '../interfaces/review.interface';

export class Review {
	public constructor(data: IReview) {
		this.text = data.text;
		this.rating = data.rating;
	}

	public text: string;
	public rating: number;
}
