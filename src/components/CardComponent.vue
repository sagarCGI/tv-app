<template>
    <router-link class="text-style" :to="{ name: 'ShowDetails', params: { id: showDetails.id } }">
        <div class="card mx-auto">
            <img :src="displayimage(showDetails)" class="card-img-top" alt="..." style="height:248px">
            <div class="card-body" style="text-decoration:none">
                <div v-if="showDetails.rating.average" class="ribbon">
                    <span style="font-size:12px">{{ showDetails.rating.average }}</span><i class="fa fa-star fa-xs"></i>
                </div>
                <div class="card-title">{{ showDetails.name }}</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        showDetails: { type: Object }
    },
    methods: {
        displayimage(showDetails) {
            return showDetails.image ? showDetails.image.original : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU"
        }

    }

}
</script>

<style scoped>
.ribbon {
    background-color: rgb(2 38 68);
    width: 40px;
    position: absolute;
    text-align: center;
    color: #f0f0f0;
    top: 0px;
    right: 0px;
    border-radius: 3px 10px 3px 3px;
}
.card {
    width: 11rem;
    margin: 8px
}
.card-body {
    text-align: center;
    background-color: #022644;
    color: white;
}
.card-title {
    margin-bottom: 0;
}
.text-style {
    text-decoration: none;
    color: black
}
.card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px #f0f0f0;
}
.card-title {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 140px;
    white-space: nowrap;
    text-decoration: none;
}
</style>