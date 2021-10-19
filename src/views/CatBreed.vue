<template>
  <section class="grey lighten-4" height="100vh">
    <v-app-bar color="indigo" dark class="mb-8">
      <v-toolbar-title class="text-center">My Cat App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card class="mx-auto overflow-y-auto mb-8" max-width="85%" height="75vh">
      <v-container fluid>
        <v-row>
          <v-col :cols="10" class="mx-auto pb-0">
            <div class="search">
              <v-autocomplete
                :items="breeds"
                label="Search your cat breed"
                item-text="name"
                v-model="search"
                dense
                solo
                clearable
              >
              </v-autocomplete>
            </div>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col
            v-for="breed in searchFilter"
            :key="breed.id"
            :cols="12"
            sm="4"
            dense
            class="mb-4 d-flex justify-center"
          >
            <v-card max-width="50vh" class="flex d-flex flex-wrap">
              <v-img
                :src="breed.imageUrl"
                class="white--text align-end cardImg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200"
                aspect-ratio="1.7"
                :key="force"
              >
                <v-card-title v-text="breed.name"></v-card-title>
              </v-img>
              <v-card-text>
                {{ breed.description }}
              </v-card-text>
              <v-card-actions class="mx-auto">
                <v-btn
                  class="mb-2"
                  color="primary"
                  :key="breed.wikipedia_url"
                  :href="breed.wikipedia_url"
                  >View on Wikipedia</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-footer padless bottom absolute class="mt-8 py-0 px-0" height="10px">
      <v-card class="flex" flat tile height="10px">
        <v-card-text class="indigo white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      breeds: [],
      search: "",
      force: 0,
    };
  },
  computed: {
    searchFilter() {
      if (this.search) {
        return this.breeds.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.breeds;
      }
    },
  },
  mounted() {
    this.getBreeds();
  },
  methods: {
    getBreeds() {
      this.breeds = [];
      this.$store.dispatch("breedsIndexRequest").then((breeds) => {
        this.breeds = breeds;
        this.breeds.forEach((element) => {
          console.log(this.breeds);
          if (element.reference_image_id) {
            const queries = {
              id: element.reference_image_id,
            };
            this.$store
              .dispatch("breedsimageRequest", queries)
              .then((images) => {
                element.imageUrl = images.url;
                this.force += 1;
              });
          } else {
            element.imageUrl =
              "https://cdn.pixabay.com/photo/2021/01/05/22/01/paw-5892565_960_720.png";
            this.force += 1;
          }
        });
      });
    },
  },
};
</script>
<style>
.v-image__image {
  background-position-y: 25% !important;
}
</style>


