import { getSelector } from './get-selector'

/**
 * Get LCP Debug Data
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */
export function getLCPDebugData(entries) {
  const lastEntry = entries[entries.length - 1]

  return {
    debug_target: getSelector(lastEntry.element),
    event_time: lastEntry.startTime
  }
}
