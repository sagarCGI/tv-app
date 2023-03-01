<template>
  <div class="container">
        <h1 class="message">{{ errorMessage }}</h1>
        <button @click="goToHome" v-if="this.$route.name != 'DashboardPage'" class="btn btn-secondary btn-sm"
          >Return To Home Page</button
        >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:'PageNotFound',
    data(){
        return{
            errorMessage: 'Something went wrong!'
        }
    },
    methods:{
        ...mapMutations(["SET_ERROR_TO_FALSE"]),
        goToHome() {
            this.SET_ERROR_TO_FALSE();
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

.container {
    margin-top: 10rem;
    text-align: center;
}
</style>