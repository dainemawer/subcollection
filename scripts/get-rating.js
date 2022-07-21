import { getFCPRating } from './get-fcp-rating'
import { getCLSRating } from './get-cls-rating'
import { getLCPRating } from './get-lcp-rating'
import { getTTFBRating } from './get-ttfb-rating'
import { getFIDRating } from './get-fid-rating'

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
      return getFCPRating(value)
    case 'CLS':
      return getCLSRating(value)
    case 'LCP':
      return getLCPRating(value)
    case 'TTFB':
      return getTTFBRating(value)
    case 'FID':
      return getFIDRating(value)
    default:
      return `${name} is not a valid rating`
  }
}
