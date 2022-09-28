<template>
  <v-row>
    <v-select
        v-model="filterParams.country"
        class="px-2"
        :items="allCountries"
        :error-messages="errorMessage"
        clearable
        label="Filter by country"
        :loading="loading"
    ></v-select>

    <v-select
        v-model="filterParams.score"
        class="px-2"
        :items="allScores"
        item-text="label"
        item-value="value"
        :error-messages="errorMessage"
        clearable
        label="Filter by score"
        :loading="loading"
    ></v-select>
  </v-row>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UsersFilter",

  data: () => ({
    filterParams: {
      country: null,
      score: null,
    },

    errorMessage: null,

    loading: false
  }),

  computed: {
    ...mapGetters(['allCountries', "allScores"]),
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      this.loading = true
      try {
        await this.$store.dispatch('fetchData')
      } catch (e) {
        this.errorMessage = e
      } finally {
        this.loading = false
      }
    },
  },

  watch: {
    filterParams: {
      deep: true,
      handler(newVal) {
        const filterData = []
        Object.keys(newVal).forEach(item => {
          if (newVal[item] !== null) {
            filterData.push({
              field: item,
              value: newVal[item]
            })
          }
        })
        this.$store.dispatch('putFilterParams', filterData)
      }
    },
  }
}
</script>

<style scoped>

</style>
