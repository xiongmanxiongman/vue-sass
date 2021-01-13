<template>
  <div class="my">
    <PageHeader content="&-_-符号深入认识"/>
    <div class="box">
      <p class="my-_-txt">这是一个方块</p>
    </div>
    <a class="my_link" href="javascript:;">这是一个a链接</a>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'Demo13',
}
</script>

<style scoped lang="scss">
.my{
  &_link{
    color: red;
  }
  &-_-txt{
    color: red;
  }
}
</style>
