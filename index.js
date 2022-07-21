import { getLCP, getFID, getCLS, getTTFB } from 'web-vitals'
import { sendToAnalytics } from './scripts/send-to-analytics'

const subcollection = subcollection || {};


(function(vitals) {

  vitals.sendMetrics = function() {
    getCLS(sendToAnalytics)
    getLCP(sendToAnalytics)
    getFID(sendToAnalytics)
    getTTFB(sendToAnalytics)
  }

})(subcollection)
