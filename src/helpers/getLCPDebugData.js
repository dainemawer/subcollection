import { getSelector } from './getSelector';

/**
 * Get LCP Debug Data
 *
 * @since 1.0.0
 * @param {object} entries The object to iterate over.
 * @returns {Array} Returns the picked values.
 *
 */
export function getLCPDebugData(entries) {
	const lastEntry = entries[entries.length - 1];

	return {
		debug_target: getSelector(lastEntry.element),
		event_time: lastEntry.startTime,
	};
}
