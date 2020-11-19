// Appellée par action et modificat° de state / Store

export default {
  setDestination(state, payload) {
    console.log(payload)
    state.destinations = payload
  },
}
