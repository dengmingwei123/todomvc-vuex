<template>
  <section class="todoapp">
    <!-- 头部 -->
    <Header></Header>
    <!-- 主体 -->
    <router-view></router-view>
    <!-- 页脚 -->
    <Footer></Footer>
  </section>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="">
</style>
