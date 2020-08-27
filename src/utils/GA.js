// Refer to https://developer.chrome.com/extensions/tut_analytics
window._gaq = [
  ['_setAccount', process.env.VUE_APP_GOOGLE_ANALYTICS_ID],
  ['_trackPageview']
];

export function init() {
  const ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}
