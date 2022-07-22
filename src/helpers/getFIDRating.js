import { NO_RATING, GOOD_SCORE, AVERAGE_SCORE, POOR_SCORE } from './getConstants';

/**
 * getFIDRating
 * Determines whether a FID score is good, average, or poor.
 *
 * @param {number} value value of the FID metric
 * @returns {string} the string value rating
 */
export function getFIDRating(value) {
	if (value < 0 || typeof value !== 'number') {
		return NO_RATING;
	}

	if (value <= 100) {
		return GOOD_SCORE;
	}

	if (value > 100 && value < 300) {
		return AVERAGE_SCORE;
	}

	return POOR_SCORE;
}
