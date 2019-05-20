<template>
  <div>
    <router-view></router-view>
    <headerPic></headerPic>
    <div class="contenMain">
      <div>
        <div class="contentLeft">
          <ul class="cont-ul">
            <moviesList></moviesList>
          </ul>
        </div>
      </div>

      <div>
        <div class="contentRight">
          <ul class="cont-ul">
            <newsList></newsList>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesList from "./MoviesList";
import NewsList from "./NewsList";
import HeaderPic from "./IndexHeaderPic";

export default {
  data() {
    return {};
  },
  components: {
    moviesList: MoviesList,
    newsList:NewsList,
    headerPic:HeaderPic
  }
};
</script>

<style scoped>
.contentMain{
    height: 50px;
}
.contentLeft{
    width: 50%;
    float: left;
    margin-top: 5px;
    border-top: 1px solid #000;
}
.contentRight{
    width: 50%;
    float: right;
    margin-top: 5px;
    border-top: 1px solid #000;
}
.cont-ul{
    padding-top: 0.5rem;
    background-color: #fff;
}
.cont-ul::after{
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
}
</style>


