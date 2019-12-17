window._gaq = window._gaq || []
/**
 * https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
 * @param {number} speed
 * @param {string} url
 */
export function trackSpeed(speed /* , url */) {
  window._gaq.push(['_trackEvent', 'speed', '' + speed])
}
