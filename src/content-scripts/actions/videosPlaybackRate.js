function $$(selector) {
  return document.querySelectorAll(selector)
}

/**
 * @return {number[]}
 */
export function getVideosPlaybackRate() {
  const videos = $$('video')
  return videos.length ? Array.from(videos).map(el => el.playbackRate) : []
}
export const GET_VIDEOS_PLAYBACK_RATE = 'GET_VIDEOS_PLAYBACK_RATE'

/**
 * @param {number} idx
 * @param {number} value
 */
export function setVideoPlaybackRate(idx, value) {
  $$('video')[idx].playbackRate = value
}
export const SET_VIDEO_PLAYBACK_RATE = 'SET_VIDEO_PLAYBACK_RATE'
