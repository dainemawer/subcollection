/**
 * Get LCP Debug Data
 *
 * @since 1.0.0
 * @param {object} object The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */

export function getLargestLayoutShiftSource(sources) {
	return sources.reduce((a, b) =>
		a.node &&
		a.previousRect.width * a.previousRect.height > b.previousRect.width * b.previousRect.height
			? a
			: b,
	);
}
