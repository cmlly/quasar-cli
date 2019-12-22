<template>
  <q-page padding>
    <q-card class="my-card text-center">
      <q-btn color="primary" label="返回新闻列表" @click="$router.go(-1)" class="q-my-md"/>
      <q-img :src="article.headpic" basic style="height: 200px">
        <div class="absolute-bottom text-h6">{{article.title}}</div>
      </q-img>
      <q-card-section v-html="article.content"></q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    async getNewsDetail() {
      const res = await this.$http.post("/selfnews/newsd", {
        id: this.$route.query.id
      });
      this.article = res.data;
    }
  }
};
</script>
<style lang="sass">
  img
    max-width: 100%
  h1
    font-size: 2rem
    line-height: 2rem
</style>