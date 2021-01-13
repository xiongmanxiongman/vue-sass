<template>
  <div class="my">
    <PageHeader content="if else elseif"/>
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
  name: 'Demo40',
}
</script>

<style scoped lang="scss">
@mixin triangle($size, $color, $direction) {
  border-color: transparent;
  border-style: solid;
  border-width: $size / 2;
  @if $direction == top {
    border-top-color: $color;
  } @else if $direction == right {
    border-right-color: $color;
  } @else if $direction == bottom {
    border-bottom-color: $color;
  } @else {
    border-left-color: $color;
  }
}
.box{
  @include triangle(5px, yellow, right);
  /*@include triangle(5px, red, top);
  @include triangle(5px, blue, bottom);
  @include triangle(5px, green, left);*/
}
</style>
