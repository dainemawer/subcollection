import { getLargestLayoutShiftEntry } from './getLargestLayoutShiftEntry';
import { getLargestLayoutShiftSource } from './getLargestLayoutShiftSource';
import { getSelector } from './getSelector';

/**
 * Get CLS data for the debug snippet
 *
 * @param entries CLS entries
 */

export function getCLSDebugData(entries) {
	const largestEntry = getLargestLayoutShiftEntry(entries);
	if (largestEntry && largestEntry.sources && largestEntry.sources.length) {
		const largestSource = getLargestLayoutShiftSource(largestEntry.sources);
		if (largestSource) {
			return {
				debug_target: getSelector(largestSource.node),
				event_time: largestEntry.startTime,
			};
		}
	}

	return {
		debug_target: '(not set)',
	};
}
