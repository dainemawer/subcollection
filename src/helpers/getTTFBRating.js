import { NO_RATING, GOOD_SCORE, AVERAGE_SCORE, POOR_SCORE } from './getConstants';

/**
 * getTTFBRating
 * Determines whether a TTFB score is good, average, or poor.
 *
 * @param {number} value value of the TTFB metric
 * @returns {string} the string value rating
 */
export function getTTFBRating(value) {
	if (value < 0 || typeof value !== 'number') {
		return NO_RATING;
	}

	if (value <= 200) {
		return GOOD_SCORE;
	}

	if (value > 200 && value < 500) {
		return AVERAGE_SCORE;
	}

	return POOR_SCORE;
}
