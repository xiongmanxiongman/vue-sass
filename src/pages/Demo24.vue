<template>
  <div class="my">
    <PageHeader content="变量在函数中使用1"/>
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
  name: 'Demo24',
}
</script>

<style scoped lang="scss">
@mixin setStyle1($name, $top-or-bottom, $left-or-right) {
  .#{$name} {
    background: red;
    position: absolute;
    #{$top-or-bottom}: 50%;
    #{$left-or-right}: 50%;
    transform: translate(-50%, -50%);
  }
}

@include setStyle1("box", top, left);
</style>
