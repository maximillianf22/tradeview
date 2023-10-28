
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/maximiliamfernandez/Documents/Tradeview/tradeview/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "f5e37f24-463b-472c-853a-f668f4c566a7"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
