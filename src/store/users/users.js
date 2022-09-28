export default {
    state: {
        users: [],
        filterParams: []
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        allFilterParams(state) {
            return state.filterParams
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        updateFilterParams(state, filterParams) {
            state.filterParams = filterParams
        }
    },
    actions: {
        async fetchUsers(ctx) {
            const result = await fetch("http://localhost:8080/users.json")
            const users = await result.json()
            ctx.commit('updateUsers', users.users)
        },

        putFilterParams(ctx, params) {
            ctx.commit('updateFilterParams', params)
        }
    },
}
