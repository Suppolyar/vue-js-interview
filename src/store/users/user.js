export default {
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async fetchUsers(ctx) {
            const result = await fetch("http://localhost:8080/example.json")
            const users = await result.json()
            ctx.commit('updateUsers', users.users)
        }
    },
}
