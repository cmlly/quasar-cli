<template>
  <q-page class="flex flex-center">
    <q-page padding>
      <p v-for="(item,n) in newsList" :key="n" @click="goDetail(item.id)">
        <q-card class="my-card">
          <q-img :src="item.headpic" basic style="height: 200px">
            <div class="absolute-bottom text-h6">{{item.source}}</div>
          </q-img>
          <q-card-section>{{ item.title }}</q-card-section>
        </q-card>
      </p>
    </q-page>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const res = await this.$http.post("/selfnews/newslist");
      this.newsList = res.data;
    },
    goDetail(id) {
      this.$router.push({ path: "/newsDetail", query: { id: id } });
    }
  }
};
</script>
