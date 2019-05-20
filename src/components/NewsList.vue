<template>
    <div class="goods-list">
        <div class="newsList">
            <router-link to="/" class="goods-list-link" tag="a">
                文章标题，时间等。。。。。。
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.newsList{
    padding: 5px;
    border-bottom: 1px dashed #ababab;
    list-style-type: none;
}

.goods-list-link{
    text-decoration:none
}
</style>


