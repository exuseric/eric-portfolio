export const state = () => ({
  layout: '',
})

export const getters = {
  getterValue: (state) => {
    return state.layout
  },
}

export const mutations = {
  updateLayout: (state, payload) => {
    state.value = payload
  },
}

export const actions = {
  setGridTemplate({ commit }) {
    const deviceWidth = this.getDeviceWidth()
    const width = Math.round((deviceWidth / 2) * 0.15)
    const count = Math.round(deviceWidth / width) // Find the column count; Result in pixels

    const gridTemplate = `repeat(${count}, ${width / 16}rem)`
    commit('updateLayout', gridTemplate)
  },
}
