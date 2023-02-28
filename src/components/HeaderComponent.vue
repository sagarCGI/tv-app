<template>
  <nav class="navbar top-fixed">
  <div class="container-fluid">
    <div class="center">
      <a class="navbar-text text-deocation-none" href="/">TV<span class="maze">Maze</span></a>
    </div>
      <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchName" >
        <button class="btn search-btn" type="submit" @click="searchShow()">Search</button>
      </form>
    </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return{
        searchName:""
      }
    },
    methods: {
      searchShow() {
        this.$router.push({ path: `/search/${this.searchName}` });
      }
    }
}
</script>

<style>
.navbar {
  background-color: #274a68;
  border-bottom: 2px solid #fff;
  flex-wrap: nowrap;
  color: aliceblue !important; 
}
.search-btn {
  background-color: #9f2727;
  color: #fff;
}
.center {
  text-align: center;
}
.maze {
  color: #9f2727;
}
.text-deocation-none {
    text-decoration: none;
    font-size: larger;
}
.navbar-text {
  color: aliceblue;
}

.top-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}

.container-fluid {
  display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
}
</style>