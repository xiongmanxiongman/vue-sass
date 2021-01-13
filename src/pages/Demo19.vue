<template>
  <div class="my">
    <PageHeader content="变量的生效范围"/>
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
  name: 'Demo19',
}
</script>

<style scoped lang="scss">
$global-variable: red;

.box {
  $local-variable: blue;
  background: $global-variable;
  color: $local-variable;
}

.link {
  color: $global-variable;
}
</style>
