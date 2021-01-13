<template>
  <div class="my">
    <PageHeader content="变量在函数中使用2"/>
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
  name: 'Demo25',
}
</script>

<style scoped lang="scss">
@mixin inline-animation($duration) {
  $name: id-#{unique-id()};
  @keyframes #{$name} {
    @content;
  }
  animation-name: $name;
  animation-duration: $duration;
  animation-iteration-count: infinite;
}

.box {
  @include inline-animation(2s) {
    from { background-color: yellow }
    to { background-color: red }
  }
}
.link {
  @include inline-animation(1s) {
    from { background-color: white }
    to { background-color: red }
  }
  value:#{unique-id()};
}
</style>
