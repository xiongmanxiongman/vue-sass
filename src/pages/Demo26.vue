<template>
  <div class="my">
    <PageHeader content="用变量方式写字符串"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">这是一个a链接</a>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'Demo26',
}
</script>

<style scoped lang="scss">
.box {
  background: #{"red"};
}
</style>
