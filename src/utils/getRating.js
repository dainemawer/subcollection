import { getFCPRating } from '../helpers/getFCPRating';
import { getCLSRating } from '../helpers/getCLSRating';
import { getLCPRating } from '../helpers/getLCPRating';
import { getTTFBRating } from '../helpers/getTTFBRating';
import { getFIDRating } from '../helpers/getFIDRating';

/**
 * getRating
 * Determines whether a FID score is good, average, or poor.
 *
 * @param {number} name name of the metric
 * @param {number} value recorded value of the metric
 * @returns {string} the accurate rating for each CWV metric
 */

export function getRating(name, value) {
	switch (name) {
		case 'FCP':
			return getFCPRating(value);
		case 'CLS':
			return getCLSRating(value);
		case 'LCP':
			return getLCPRating(value);
		case 'TTFB':
			return getTTFBRating(value);
		case 'FID':
			return getFIDRating(value);
		default:
			return `${name} is not a valid rating`;
	}
}
