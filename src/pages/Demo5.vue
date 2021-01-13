<template>
  <div class="my">
    <PageHeader content="变量在max()里面的写法"/>
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
  name: 'Demo5',
}
</script>

<style scoped lang="scss">
$minValue: 12px;
.box {
  .txt {
    font-size: max(#{$minValue}, 30px);
    /*font-size: max($minValue, 30px);*/
  }
}
</style>
