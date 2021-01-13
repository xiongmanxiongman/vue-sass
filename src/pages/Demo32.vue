<template>
  <div class="my">
    <PageHeader content="@use整个文件夹"/>
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
  name: 'Demo32',
}
</script>

<style scoped lang="scss">
@use 'css';
</style>
