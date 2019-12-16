export const loadContentScript = "loadContentScript";
window[loadContentScript] = () => {
  /** @return {Promise<any>} */
  return browser.tabs.executeScript({
    file: "js/content-script.js"
  });
};
