<template>
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list three-line>
        <v-subheader >
          Users
        </v-subheader>

        <template v-for="(item, index) in this.$props.list">
          <div :key="index">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.avatar" />
              </v-list-item-avatar>

              <v-list-item-content>

                <v-list-item-title>
                  <span class="text-h5 blue--text mr-4">{{ item.score }}</span>
                  <span>{{item.title}}</span>
                </v-list-item-title>

                <v-list-item-subtitle>
                  <span class="text--primary">{{ item.subtitle }}</span>
                </v-list-item-subtitle>

                <v-list-item-content>
                  <span class="blue--text">{{ item.country }}</span>
                </v-list-item-content>

              </v-list-item-content>

            </v-list-item>
            <v-divider inset />
          </div>
        </template>
      </v-list>
    </v-card>

</template>

<script>

export default {
  name: "UsersList",
  props: ['list']
}
</script>

<style scoped>

</style>
