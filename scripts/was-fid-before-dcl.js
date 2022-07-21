/**
 * Was FID before DCL
 *
 * Determines if First Input Delay fired before DOM Content Loaded.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 *
 */
export function wasFIDBeforeDCL(fidEntry) {
  const navEntry = performance.getEntriesByType('navigation')[0]
  return navEntry && fidEntry.startTime < navEntry.domContentLoadedEventStart
}
