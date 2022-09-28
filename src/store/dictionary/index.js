export default {
    state: {
        countries: [],
        scores: []
    },
    getters: {
        allCountries(state) {
            return state.countries
        },
        allScores(state) {
            return state.scores
        }
    },
    mutations: {
        updateCountries(state, countries) {
            state.countries = countries
        },
        updateScores(state, scores) {
            state.scores = scores
        }
    },
    actions: {
        async fetchData(ctx) {
            const result = await fetch("http://localhost:8080/dictionary.json")
            const data = await result.json()
            ctx.commit('updateCountries', data.countries)
            ctx.commit('updateScores',  data.scores)
        },
    },
}
