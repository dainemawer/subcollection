/**
 * Get Largest Layout Shift Entry
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */

export function getLargestLayoutShiftEntry(entries) {
  return entries.reduce((a, b) => (a && a.value > b.value ? a : b))
}
