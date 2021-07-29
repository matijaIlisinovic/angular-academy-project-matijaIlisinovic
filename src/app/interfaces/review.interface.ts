import { IUserData } from './userData.interface';

export interface IReview {
	show_id: string;
	id: string;
	comment: string;
	rating: number;
	user: IUserData;
}
