import { NO_RATING, GOOD_SCORE, AVERAGE_SCORE, POOR_SCORE } from './getConstants';
/**
 * getFCPRating
 * Determines whether a FCP score is good, average, or poor.
 *
 * @param {number} value value of the FCP metric
 * @returns {string} the string value rating
 */
export function getFCPRating(value) {
	if (value < 0 || typeof value !== 'number') {
		return NO_RATING;
	}

	if (value <= 1800) {
		return GOOD_SCORE;
	}

	if (value > 1800 && value < 3000) {
		return AVERAGE_SCORE;
	}

	return POOR_SCORE;
}
