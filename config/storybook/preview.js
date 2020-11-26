import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'talkiebuddy',
    values: [
      {
        name: 'talkiebuddy',
        value: '#FFFCF2',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#1e2225'
      }
    ],
  },
}
