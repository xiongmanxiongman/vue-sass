<template>
  <div class="my">
    <PageHeader content="变量的声明与使用"/>
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
  name: 'Demo1',
}
</script>

<style scoped lang="scss">
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.1);

.box {
  border: 1px solid $border-dark;

  .txt {
    color: $base-color;
  }
}
</style>
