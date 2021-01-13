<template>
  <div class="my">
    <PageHeader content="变量在calc()里的写法,盒子居中"/>
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
  name: 'Demo4',
}
</script>

<style scoped lang="scss">
.box {
  $width: 200px;
  $height: 200px;
  width: $width;
  width: $height;
  position: absolute;
  left: calc(50% - #{$width / 2});
  top: calc(50% - #{$height / 2});
}
</style>
