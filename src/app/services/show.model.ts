export class Show {
	constructor(data: any) {
		this.title = data.title;
		this.description = data.description;
		this.averageRating = data.averageRating;
		this.imgUrl = data.imgUrl;
	}

	title: string;
	description: string;
	averageRating: number;
	imgUrl: string;
}
