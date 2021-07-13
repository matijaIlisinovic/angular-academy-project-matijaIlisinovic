export class Show {
	constructor(data: any) {
		this.title = data.title;
		this.description = data.description;
		this.averageRating = data.average_rating;
		this.imgUrl = data.imgUrl;
	}

	title: string;
	description: string;
	averageRating: number;
	imgUrl: string;

	getPercentage() {
		let number = Math.trunc((this.averageRating / 5) * 100);
		return number + '%';
	}
}
