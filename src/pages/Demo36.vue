<template>
  <div class="my">
    <PageHeader content="@mixin样式块@include导入"/>
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
  name: 'Demo36',
}
</script>

<style scoped lang="scss">
@mixin red {
  background: red;
}

@mixin box-style {
  @include red;
  color: white;
}
.box{
  @include box-style;
}
</style>
