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
            <v-list-item >

              <v-list-item-avatar
                  class="v-btn avatar-btn"
                  tabindex="1"
                  @keyup.enter="openExtraInfo(index)"
                  @click="openExtraInfo(index)"
              >
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

                <transition name="fade">
                  <v-list-item-content v-if="isOpenedIdx.indexOf(index) !== -1">
                    <div class="font-weight-bold">Address:</div>
                    <div>{{ item.address.city }}</div>
                    <div>{{ item.address.street }}</div>
                  </v-list-item-content>
                </transition>
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
  props: ['list'],

  data() {
    return {
      isOpen: false,
      isOpenedIdx: []
    }
  },

  methods: {
    openExtraInfo(idx) {
      let index = this.isOpenedIdx.indexOf(idx);
      if (index !== -1) {
        this.isOpenedIdx.splice(index, 1)
      } else {
        this.isOpenedIdx.push(idx)
      }
    }
  }
}
</script>

<style scoped>
.avatar-btn {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
