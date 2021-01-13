<template>
  <div class="my">
    <PageHeader content="*乘法/除法"/>
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
  name: 'Demo43',
}
</script>

<style scoped lang="scss">
.box {
  width: 300*2px;
  height: (300px/3);
}
</style>
