<template>
    <div v-if="isLoading" class="text-center">
            <div class="spinner-border m-5" role="status">
                <span class="visually-hidden spinner">Loading...</span>
            </div>
    </div>
    <div v-else>

    <div class="container" v-if="!error && show">
        <div>
            <img :src="displayImage(show)" alt="image" align="left" />
        </div>
        <div class="margin show-info">
            <h2>{{ show.name }}</h2>
            <h4>
                <span v-if="show.language">Language: {{ show.language }}</span> 
                <span v-if="show.rating && show.rating.average"> | Rating <i class="fa fa-star scolor"></i>
                    {{ show.rating.average }}/10 
                </span>
            </h4>
            <h4><b>Status:</b>{{ show.status }}</h4>
            <h4 v-if="show.officialSite">
                Official website:
                <a :href="show.officialSite">{{ show.officialSite }}</a>
            </h4>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                @click="getCastById(id)">
                View Cast Info
            </button>
            <ModalComponent />
            <p v-html="show.summary" class="text-justify"></p>
        </div>
    </div>
</div>

</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalComponent from '@/components/ModalComponent.vue';
export default {
    name: 'ShowDetails',
    data() {
        return {
            isLoading: true
        }
    },
    computed: {
        ...mapState(["show", "error"])
    },
    components: {
        ModalComponent
    },
    methods: {
        ...mapActions(["getShowById", "getCastById"]),
        displayImage(show) {
            return show?.image?.original || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU";
        }
    },
    async created() {
        this.id = this.$route.params.id;
        await this.getShowById(this.id);
        this.isLoading = false
    }
}
</script>

<style scoped>
img {
    height: 350;
    width: 20rem;
    margin: 10px;
    border-radius: 10px;
    margin-top: 0px;
}

.btn-primary{
    background-color: #9f2727;
    margin-bottom: 10px;
}
.spinner {
    height: 350;
    width: 20rem;
    margin: 10px;
    border-radius: 10px;
    margin-top: 0px;
}


.text-justify {
    text-align: justify;
}

.margin {
    margin: 10px;
}

.scolor {
    color: rgb(146, 146, 46);
}
</style>