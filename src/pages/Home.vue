<script>
import itemList from '../components/home/itemList.vue'
import Header from '../components/header.vue'
import search from '../components/home/search.vue'
export default {
    components: {
        itemList,
        Header,
        search
    },
    data() {
        return {
            searchName: ''
        }
    },
    methods: {
        inputSearch: function(inputString){
            this.searchName = inputString;
        }
    }

}

</script>

<template>
    <Header />

    <div class="container py-5 my-5">
        <search :searchName="searchName" @inputSearch="inputSearch"/>
        <h2 class="text-center">Destaque</h2>
        <itemList :searchName="searchName" />
        <div class="row">
            <div class="col-md-3">
                <div class="text-center">
                    <img src="" alt="">
                    <h5>Worldwide Shipping</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam aspernatur natus totam
                        soluta
                        eum, sapiente fugit?
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-center">
                    <img src="" alt="">
                    <h5>Worldwide Shipping</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam aspernatur natus totam
                        soluta
                        eum, sapiente fugit?
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-center">
                    <img src="" alt="">
                    <h5>Worldwide Shipping</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam aspernatur natus totam
                        soluta
                        eum, sapiente fugit?
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-center">
                    <img src="" alt="">
                    <h5>Worldwide Shipping</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam aspernatur natus totam
                        soluta
                        eum, sapiente fugit?
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>