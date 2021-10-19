const state = () => ({
    snack: ''
})

const getters = {
    getSnack: state => () => state.snack
}

const mutations = {
    setSnack(state, snack) {
        state.snack = snack
    }
}

export default {
    state,
    getters,
    mutations,
}