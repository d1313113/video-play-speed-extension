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
import getCurrentTabId from './utils/getCurrentTabId'

export default {
  name: 'App',
  data: () => ({
    MIN: 0.25,
    MAX: 5,
    STEP: 0.25,

    curTabId: null /** number */,
    playbackRates: [] /** number[] */
  }),
  async mounted() {
    this.curTabId = await getCurrentTabId()
    const resp /** number[] */ = await browser.tabs.sendMessage(this.curTabId, {
      action: GET_VIDEOS_PLAYBACK_RATE
    })
    this.playbackRates = resp
  },
  methods: {
    /**
     * @param {number} idx
     * @param {number} value
     */
    setVideoPlaybackRate(idx, value) {
      browser.browserAction.setBadgeText({
        tabId: this.curTabId,
        text: value + 'x'
      })
      browser.tabs.sendMessage(this.curTabId, {
        action: SET_VIDEO_PLAYBACK_RATE,
        idx,
        value
      })
    }
  }
}
</script>
