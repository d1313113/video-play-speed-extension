<template>
  <section class="section is-relative">
    <b-button
      type="is-white"
      style="position: absolute; top: 0; right: 0"
      @click="initPopup"
    >
      <img src="./assets/refresh.svg" />
    </b-button>
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
import { trackSpeed } from './utils/googleAnalytics'

export default {
  name: 'App',
  data: () => ({
    MIN: 0.25,
    MAX: 10,
    STEP: 0.25,

    playbackRates: [] /** number[] */
  }),
  mounted() {
    this.initPopup()
  },
  methods: {
    async initPopup() {
      const { id: tabId } = await getCurrentTab()
      const resp /** number[] */ = await browser.tabs.sendMessage(tabId, {
        action: GET_VIDEOS_PLAYBACK_RATE
      })
      this.playbackRates = resp
      this.setBadgeText(tabId, resp[0])
    },
    /**
     * @param {number} idx - index of document.querySelectorAll('video')
     * @param {number} value
     */
    async setVideoPlaybackRate(idx, value) {
      const { id: tabId, url } = await getCurrentTab()
      trackSpeed(value, url)

      browser.tabs.sendMessage(tabId, {
        action: SET_VIDEO_PLAYBACK_RATE,
        idx,
        value
      })
      this.setBadgeText(tabId, value)
    },
    setBadgeText(tabId, value) {
      browser.browserAction.setBadgeText({
        tabId,
        text: value ? value + 'x' : ''
      })
    }
  }
}
</script>
