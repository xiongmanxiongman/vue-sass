<template>
  <div class="my">
    <PageHeader content="&符号在if语句里"/>
    <div class="box on">
      <p class="txt">这是一个方块</p>
    </div>
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
  name: 'Demo14',
}
</script>

<style scoped lang="scss">
@mixin box-background($color) {
  #{if(&, '&.box', '.box')} {
    background: $color;
    color: rgba(#fff, 0.75);
  }
}

@include box-background(yellowgreen);

.on {
  @include box-background(red);
}
/*.box{
  background: yellowgreen;
  color: rgba(#fff, 0.75);
}
.box.on{
  background: red;
  color: rgba(#fff, 0.75);
}*/
</style>
