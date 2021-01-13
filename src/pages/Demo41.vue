<template>
  <div class="my">
    <PageHeader content="@each循环"/>
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
  name: 'Demo41',
}
</script>

<style scoped lang="scss">
$arr:
    1 red 12px,
    2 blue 16px,
    3 yellow 18px;

@each $name, $color, $size in $arr {
  .box-#{$name} {
    .txt{
      color: $color;
    }
    font-size: $size;
  }
}

</style>
