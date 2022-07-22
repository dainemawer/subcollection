/**
 * Get Largest Layout Shift Entry
 *
 * @since 1.0.0
 * @param {object} object The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */

export function getLargestLayoutShiftEntry(entries) {
	return entries.reduce((a, b) => (a && a.value > b.value ? a : b));
}
