import { getLCP, getFID, getCLS, getTTFB } from 'web-vitals'
import { sendToAnalytics } from './scripts/send-to-analytics'

export function initSubCollection() {
  getCLS(sendToAnalytics)
  getLCP(sendToAnalytics)
  getFID(sendToAnalytics)
  getTTFB(sendToAnalytics)
}
