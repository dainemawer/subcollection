import { getLCP, getFID, getCLS, getTTFB } from 'web-vitals'
import { sendToAnalytics } from './scripts/send-to-analytics'

export function initSubCollection(debug) {

  if (debug) {
    console.log('Debug mode enabled')
    getCLS(console.log)
    getLCP(console.log)
    getFID(console.log)
    getTTFB(console.log)
  } else {
    getCLS(sendToAnalytics)
    getLCP(sendToAnalytics)
    getFID(sendToAnalytics)
    getTTFB(sendToAnalytics)
  }
}
