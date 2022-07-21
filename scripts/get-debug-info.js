import { getLCPDebugData } from './get-lcp-debug-data'
import { getCLSDebugData } from './get-cls-debug-data'
import { getFIDDebugData } from './get-fid-debug-data'

/**
 * Get CLS data for the debug snippet
 *
 * @param name CLS entries
 * @param entries CLS entries
 */

export function getDebugInfo(name, entries = []) {
  if (entries.length) {
    switch (name) {
      case 'LCP':
        return getLCPDebugData(entries)
      case 'FID':
        return getFIDDebugData(entries)
      case 'CLS':
        return getCLSDebugData(entries)
      default:
        return {
          debug_target: '(not set)'
        }
    }
  }

  return {
    debug_target: '(not set)'
  }
}
