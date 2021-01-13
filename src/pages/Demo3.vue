<template>
  <div class="my">
    <PageHeader content="变量在url()里的写法"/>
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
  name: 'Demo3',
}
</script>

<style scoped lang="scss">
$path1: "../assets";
$path2: "../assets";
$path3: "../assets";
/*
.box {
  background: url("#{$path1}/logo.png") no-repeat center;
}
*/

/*.box {
  background: url($path2 + "/logo.png") no-repeat center;
}*/

.box {
  background: url(#{$path3}/logo.png) no-repeat center;
}
</style>
