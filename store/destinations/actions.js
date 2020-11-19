// Appel depuis vue (distpatch) en général appel api
import myApi from '~/api/api'

export default {
  getDestination(state) {
    myApi
      .get('destinations')
      .then((response) => state.commit('setDestination', response))
  },
}
