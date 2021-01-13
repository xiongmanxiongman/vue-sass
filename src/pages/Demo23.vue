<template>
  <div class="my">
    <PageHeader content="一组变量中取值"/>
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
  name: 'Demo23',
}
</script>

<style scoped lang="scss">
@use "sass:map";

$theme-colors: (
    "success": #28a745,
    "info": #17a2b8,
    "warning": #FF6633,
);

.box {
  background-color: map.get($theme-colors, "warning");
}
</style>
