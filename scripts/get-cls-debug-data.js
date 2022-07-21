import { getLargestLayoutShiftEntry } from './get-largest-layout-shift-entry'
import { getLargestLayoutShiftSource } from './get-largest-layout-shift-source'
import { getSelector } from './get-selector'


/**
 * Get CLS data for the debug snippet
 *
 * @param entries CLS entries
 */

export function getCLSDebugData(entries) {
  const largestEntry = getLargestLayoutShiftEntry(entries)
  if (largestEntry && largestEntry.sources && largestEntry.sources.length) {
    const largestSource = getLargestLayoutShiftSource(largestEntry.sources)
    if (largestSource) {
      return {
        debug_target: getSelector(largestSource.node),
        event_time: largestEntry.startTime
      }
    }
  }

  return {
    debug_target: '(not set)'
  }
}
