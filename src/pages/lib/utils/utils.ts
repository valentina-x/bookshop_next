export function getAuthors(authors: [] | string ): [] | string {
	if (typeof authors !== 'undefined' && Array.isArray(authors)) {
		if (authors.length > 0) {
			return authors.slice().join(', ');
		} else {
			return authors;
		}
	}
	return '';
}

export function renderStars(rating: number): string {
	const filledStar = '★';
	const emptyStar = '☆';
	const fullStars = filledStar.repeat(Math.floor(rating));
	const halfStar = (rating % 1) >= 0.5 ? filledStar : '';
	const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
	return `${fullStars}${halfStar}${emptyStars}`;
}

export function formatReviews(views: number) {
	if (views >= 1000000) {
		return (views / 1000000).toFixed(1) + 'M';
	} else if (views >= 1000) {
		return (views / 1000).toFixed() + 'K';
	} else {
		return views?.toString();
	}
}