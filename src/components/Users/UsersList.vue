<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list three-line>
        <template v-for="(item, index) in allUsers">
          <v-subheader
              v-if="item.header"
              :key="index"
              v-text="item.header"
          ></v-subheader>

          <div
              v-else
              :key="index"
          >
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.avatar" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{item.title}} {{item.score}}</v-list-item-title>
                <v-list-item-subtitle><span class="text--primary">{{item.subtitle}}</span></v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
            <v-divider inset></v-divider>
          </div>
        </template>
      </v-list>
    </v-card>

  </v-col>
</template>

<script>
import {mapGetters} from 'vuex'
// import { users } from "@/mocks/users";
export default {
  name: "UsersList",
  // data: () => ({
  //   users: users
  // })
  computed: mapGetters(['allUsers']),
  mounted() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style scoped>

</style>
