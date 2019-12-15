import {
  GET_VIDEOS_PLAYBACK_RATE,
  getVideosPlaybackRate,
  SET_VIDEO_PLAYBACK_RATE,
  setVideoPlaybackRate
} from './actions/videosPlaybackRate'

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case GET_VIDEOS_PLAYBACK_RATE:
      sendResponse(getVideosPlaybackRate())
      return
    case SET_VIDEO_PLAYBACK_RATE:
      const { idx, value } = request
      setVideoPlaybackRate(idx, value)
      return
  }
  throw new Error('Unhandled request: ' + JSON.stringify(request))
})
