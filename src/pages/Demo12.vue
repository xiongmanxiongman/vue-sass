<template>
  <div data-index="1" class="my">
    <PageHeader content="&符号深入认识"/>
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
  name: 'Demo12',
}
</script>

<style scoped lang="scss">
.box {
  &:hover {
    font-weight: bold;
  }

  [data-index="1"] & {
    background: red;
  }

  :not(&) {
    opacity: 0.8;
  }
}


/*
.box:hover {
  font-weight: bold;
}
[data-index="1"] .box {
  background: red;
}
:not(.box) {
  opacity: 0.8;
}
*/

</style>
