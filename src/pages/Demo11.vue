<template>
  <div class="my">
    <PageHeader content="if判断语句"/>
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
  name: 'Demo11',
}
</script>

<style scoped lang="scss">
/*$flag: false;*/
$flag: true;
.box {
  border: 1px solid #ccc;
  border-radius: if($flag, 50%, null);
}
</style>
