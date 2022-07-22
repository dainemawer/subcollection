import { NO_RATING, GOOD_SCORE, AVERAGE_SCORE, POOR_SCORE } from './getConstants';

/**
 * getCLSRating
 * Determines whether a CLS score is good, average, or poor.
 *
 * @param {number} value value of the CLS metric
 * @returns {string} the string value rating
 */

export function getCLSRating(value) {
	const accurate = value * 1000;
	if (accurate < 0 || typeof accurate !== 'number') {
		return NO_RATING;
	}

	if (accurate <= 100) {
		return GOOD_SCORE;
	}

	if (accurate > 100 && accurate < 250) {
		return AVERAGE_SCORE;
	}

	return POOR_SCORE;
}
