<template>
  <div class="my">
    <PageHeader content="定义变量使用变量"/>
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
  name: 'Demo7',
}
</script>

<style scoped lang="scss">
.box {
  $size: 200px;
  width: $size;
  height: $size;
  border-radius: $size / 2;
}
</style>
