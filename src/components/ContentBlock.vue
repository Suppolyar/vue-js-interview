<template>
  <v-container>
    <UsersFilter />

    <div v-if="loading">Loading...</div>

    <div v-else-if="isError">
      Something went wrong :(
      <br>
      <span class="red--text">{{ errorMessage }}</span>
    </div>

    <div v-else-if="allUsersFiltered.length === 0">Nothing not found</div>

    <UsersList
      v-else
      :list="allUsersFiltered"
    />
  </v-container>
</template>

<script>
  import UsersList from "@/components/Users/UsersList";
  import UsersFilter from "@/components/Users/UsersFilter";
  import { mapGetters } from "vuex";

  export default {
    name: 'ContentBlock',

    components: { UsersFilter, UsersList },

    data() {
      return {
        loading: false,

        isError: false,
        errorMessage: ''
      }
    },

    computed: {
      ...mapGetters(['allUsers', 'allFilterParams']),
      allUsersFiltered() {
        if (this.allFilterParams.length !== 0) {
          return this.doFilter()
        } else {
          return this.allUsers
        }
      }
    },

    mounted() {
      this.getUsers();
    },

    methods: {
      async getUsers() {
        this.loading = true;
        try {
          await this.$store.dispatch('fetchUsers')
        } catch (e) {
          this.isError = true
          this.errorMessage = e
        } finally {
          this.loading = false
        }
      },

      doFilter() {
        let filteredElements = this.allUsers;

        this.allFilterParams.forEach(item => {
          switch (item.field) {
            case 'country':
              filteredElements = filteredElements.filter((user) => user.country === item.value)
              break
            case 'score':
              filteredElements = filteredElements.filter((user) => user.score <= item.value.max && user.score >= item.value.min)
          }
        });
        return filteredElements;
      },
    },
  }
</script>
