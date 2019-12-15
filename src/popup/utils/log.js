// Refer to https://stackoverflow.com/a/50131689/5172890
export default function log (...args) {
  console.log(...args)

  const bgWin = browser.extension.getBackgroundPage()
  bgWin.console.group('From popup')
  bgWin.console.log(...args)
  bgWin.console.groupEnd()
}
