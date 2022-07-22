import { getSelector } from './getSelector';
import { wasFIDBeforeDCL } from './wasFIDBeforeDCL';

export function getFIDDebugData(entries) {
	const firstEntry = entries[0];
	return {
		debug_target: getSelector(firstEntry.target),
		debug_event: firstEntry.name,
		debug_timing: wasFIDBeforeDCL(firstEntry) ? 'pre_dcl' : 'post_dcl',
		event_time: firstEntry.startTime,
	};
}
