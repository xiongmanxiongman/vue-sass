<template>
  <div class="my">
    <PageHeader content="@for循环"/>
    <div class="box box-1">
      <p class="txt">这是一个方块</p>
    </div>
    <div class="box box-2">
      <p class="txt">这是一个方块</p>
    </div>
    <div class="box box-3">
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
  name: 'Demo42',
}
</script>

<style scoped lang="scss">
$base-color: red;

@for $i from 1 through 3 {
  .box-#{$i} {
    background-color: rgba($base-color, $i * 20%);
  }
}
</style>
