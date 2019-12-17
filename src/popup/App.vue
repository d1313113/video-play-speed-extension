<template>
  <section class="section">
    <div v-if="playbackRates.length" class="container">
      <b-field
        v-for="(playbackRate, idx) in playbackRates"
        :key="idx"
        :label="`Video ${idx + 1} Speed: ${playbackRate}x`"
      >
        <b-slider
          v-model="playbackRates[idx]"
          size="is-large"
          :min="MIN"
          :max="MAX"
          :step="STEP"
          @change="
            value => {
              setVideoPlaybackRate(idx, value)
            }
          "
        >
        </b-slider>
      </b-field>
    </div>
    <p v-else class="has-text-centered is-italic">
      No videos found
    </p>
  </section>
</template>
<script>
import {
  GET_VIDEOS_PLAYBACK_RATE,
  SET_VIDEO_PLAYBACK_RATE
} from '@/content-scripts/actions/videosPlaybackRate'
import getCurrentTab from './utils/getCurrentTab'
import { init, trackSpeed } from './utils/googleAnalytics'

export default {
  name: 'App',
  data: () => ({
    MIN: 0.25,
    MAX: 10,
    STEP: 0.25,

    playbackRates: [] /** number[] */
  }),
  beforeCreate() {
    if (process.env.NODE_ENV === 'production') {
      init()
    }
  },
  async mounted() {
    const { id: tabId } = await getCurrentTab()
    const resp /** number[] */ = await browser.tabs.sendMessage(tabId, {
      action: GET_VIDEOS_PLAYBACK_RATE
    })
    this.playbackRates = resp
  },
  methods: {
    /**
     * @param {number} idx - index of document.querySelectorAll('video')
     * @param {number} value
     */
    async setVideoPlaybackRate(idx, value) {
      const { id: tabId, url } = await getCurrentTab()
      trackSpeed(value, url)

      browser.browserAction.setBadgeText({
        tabId,
        text: value + 'x'
      })
      browser.tabs.sendMessage(tabId, {
        action: SET_VIDEO_PLAYBACK_RATE,
        idx,
        value
      })
    }
  }
}
</script>
