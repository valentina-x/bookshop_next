export interface AuthState {
	token: string | null; 
	isAuthenticated: boolean; 
}

export interface LoginPayload {
	token: string; 
}

export type AuthAction = {
	type: string;
	payload: LoginPayload;
};

export interface Book {
	id: number;
	title: string;
	author: string;
	volumeInfo: {
		imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
		},
		title: string;
		authors: [];
		averageRating: number;
		pageCount: number;
	},
	saleInfo: {
		listPrice: {
			currencyCode: string;
			amount: number;
		}
	}
}