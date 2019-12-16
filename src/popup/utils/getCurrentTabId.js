/**
 * @return {Promise<number>}
 */
export default async function() {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true })
  if (!tabs.length) {
    throw new Error('No active tab available')
  }
  return tabs[0].id
}
