<template>
  <div class="my">
    <PageHeader content="自带函数max(),min()"/>
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
  name: 'Demo38',
}
</script>

<style scoped lang="scss">
$widths: 500px, 300px, 100px;
.box {
  width: max($widths...);
  //width: min($widths...);
}

</style>
