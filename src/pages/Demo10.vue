<template>
  <div class="my">
    <PageHeader content="样式分段写法"/>
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
  name: 'Demo10',
}
</script>

<style scoped lang="scss">
.box{
  margin: auto {
    bottom: 20px;
    top: 50px;
  }
}
/*margin: auto;
margin-bottom: 10px;
margin-top: 2px;*/
</style>
