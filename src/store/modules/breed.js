import Vue from 'vue'

const actions = {
    breedsIndexRequest: ({ commit }) => {
        let url = process.env.VUE_APP_API_URL+'/breeds';
        return new Promise((resolve, reject) => {
            Vue.axios.get(url)
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch(err => {
                    if (err.response.status == 403)
                        commit('setSnack', { 'type': 'red', 'msg': 'unauthorized' })
                    reject(err)
                })
        })
    },

    breedsimageRequest: ({ commit }, queries) => {
        let url = process.env.VUE_APP_API_URL+'/images/'+ queries.id;
        return new Promise((resolve, reject) => {
            Vue.axios.get(url)
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch(err => {
                    if (err.response.status == 403)
                        commit('setSnack', { 'type': 'red', 'msg': 'unauthorized' })
                    reject(err)
                })
        })
    },
}

export default {
    actions,
}