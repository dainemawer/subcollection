import { NO_RATING, GOOD_SCORE, AVERAGE_SCORE, POOR_SCORE } from './getConstants';

/**
 * getLCPRating
 * Determines whether a LCP score is good, average, or poor.
 *
 * @param {number} value value of the LCP metric
 * @returns {string} the string value rating
 */
export function getLCPRating(value) {
	if (value < 0 || typeof value !== 'number') {
		return NO_RATING;
	}

	if (value <= 2500) {
		return GOOD_SCORE;
	}

	if (value > 2500 && value < 4000) {
		return AVERAGE_SCORE;
	}

	return POOR_SCORE;
}
