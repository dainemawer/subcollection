/**
 * Was FID before DCL
 *
 * Determines if First Input Delay fired before DOM Content Loaded.
 *
 * @since 1.0.0
 * @param {object} fidEntry The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */
export function wasFIDBeforeDCL(fidEntry) {
	const navEntry = performance.getEntriesByType('navigation')[0];
	return navEntry && fidEntry.startTime < navEntry.domContentLoadedEventStart;
}
