<template>
  <div class="my">
    <PageHeader content="变量!default"/>
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
  name: 'Demo22',
}
</script>

<style scoped lang="scss">
$dark-theme: true !default;
$primary-color: red !default;
$accent-color: blue !default;

@if $dark-theme {
  $primary-color: pink;
  $accent-color: yellowgreen;
}

.box {
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 3px;
}
</style>
