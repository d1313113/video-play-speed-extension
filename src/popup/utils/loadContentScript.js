import { loadContentScript } from "@/background";

/**
 * @return {Promise<any>}
 */
export default function() {
  const bgWin = browser.extension.getBackgroundPage();
  return bgWin[loadContentScript]();
}
