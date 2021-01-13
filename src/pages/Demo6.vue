<template>
  <div class="my">
    <PageHeader content="定义一组样式,并调用"/>
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
  name: 'Demo6',
}
</script>

<style scoped lang="scss">
%class1{
  color: red;
  border: 1px solid #ccc;
  &:hover{
    border: 1px solid green;
  }
}
.box{
  @extend %class1;
  color: pink;
}
.link{
  @extend %class1;
}
</style>
