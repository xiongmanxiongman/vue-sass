<template>
  <div class="my">
    <PageHeader content="定义并使用样式组"/>
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
  name: 'Demo16',
}
</script>

<style scoped lang="scss">
%style1 {
  background: red;
  &:hover { border: 2px rgba(#000, .5) solid; }
}

.txt {
  @extend %style1;
  color: #4285f4;
}

.link {
  @extend %style1;
  color: #cddc39;
}


</style>
