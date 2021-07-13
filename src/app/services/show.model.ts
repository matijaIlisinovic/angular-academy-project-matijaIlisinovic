import { IShowData } from '../interfaces/showData.interface';

export class Show {
	public constructor(data: IShowData) {
		this.title = data.title;
		this.description = data.description;
		this.averageRating = data.average_rating;
		this.imgUrl = data.imgUrl;
		this.id = data.id;
	}

	public title: string;
	public description: string;
	public averageRating: number;
	public imgUrl: string;
	public id: string;

	public getPercentage(): string {
		let number = Math.trunc((this.averageRating / 5) * 100);
		return number + '%';
	}
}
