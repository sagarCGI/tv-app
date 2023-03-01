<template>
    <div class="category" v-for="(showCategeory, i) in showsCategorized" :key="i">
        <h4 class="headingTitle">{{ showCategeory.genreName }}</h4>
        <router-link class="text-style" :to="{ name: 'ViewCategory', params: { genreName: showCategeory.genreName } }">
           <span class="seeMore">See More</span>
        </router-link>
        <PanelComponent :showsList="limitNoOfShows(showCategeory.showsList)" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PanelComponent from '../components/PanelComponent.vue';
export default {
    name: 'DashboardPage',
    components: {
        PanelComponent,
    },
    methods: {
        limitNoOfShows(showList) {
            return [...showList].splice(0, 6);
        },
    },
    computed: {
        ...mapState(["showsCategorized"])
    }

}
</script>

<style scoped>
.category {
    margin: 15px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 1px 3px 10px #274a68 !important;
    padding: 15px;
    background-color: #274a68;
}
.headingTitle {
    text-decoration:none;
    display: inline-block;
}
.seeMore {
    float: right;
    text-decoration: underline;
}
.text-style{
    text-decoration: none;
    color: white
}
.text-style:hover {
    color:#0d6efd;
}
</style>