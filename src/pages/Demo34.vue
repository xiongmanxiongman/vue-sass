<template>
  <div class="my">
    <PageHeader content="@forward的使用"/>
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
  name: 'Demo34',
}
</script>

<style scoped lang="scss">
@use "aForward";
.box{
  @include aForward.radius;
  @include aForward.bgRed;
}
</style>
