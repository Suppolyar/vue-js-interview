<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <UsersFilter />
      <UsersList />
    </v-row>
  </v-container>
</template>

<script>
  import UsersList from "@/components/Users/UsersList";
  import UsersFilter from "@/components/Users/UsersFilter";

  export default {
    name: 'ContentBlock',
    components: { UsersFilter, UsersList },
  }
</script>
