<template>
  <div v-if="castDetails.length">
    <div v-for="cast, i in castDetails" :key="i">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src=cast.person.image.original class="img-fluid rounded-start" alt="Cast Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ cast.person.name }}</h5>
              <div class="card-text">
                <p>Birthday: {{ cast.person.birthday }}</p>
                <p>Gender: {{ cast.person.gender }}</p>
                <p>Character Name: {{ cast.character.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Information not available!
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CastCard',
  computed: {
    ...mapState(["castDetails"])
  }

}
</script>

<style>

</style>