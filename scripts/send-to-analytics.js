/* global window */
import { getRating } from './get-rating'
import { getDebugInfo } from './get-debug-info'

/**
 * sendToAnalytics
 * Callback function which sends data to GA4 via GTM
 *
 * @param {Object} param
 * @param {string} param.name name of the metric
 * @param {number} param.delta different between the current and previous value
 * @param {number} param.value value of the metric
 * @param {number} param.id unique
 * @param {Array} param.entries performance entries for the metric
 *
 * @returns void
 */
export function sendToAnalytics({ name, delta, value, id, entries }) {

  if (typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', name, {
    value: delta,
    metric_id: id,
    metric_value: value,
    metric_delta: delta,
    metric_rating: getRating(name, value),
    debug_info: getDebugInfo(name, entries)
  })
}

