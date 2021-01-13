<template>
  <div class="my">
    <PageHeader content="&符号在函数选择器里"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <div class="form">
      <input class="field" type="text" placeholder="123 /">
      <br />
      <select class="field">
        <option value ="volvo">Volvo</option>
        <option value ="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <br />
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
  name: 'Demo15',
}
</script>

<style scoped lang="scss">
@use "sass:selector";

@mixin find($child) {
  @at-root #{selector.unify(&, $child)} {
    @content;
  }
}
.my .field {
  @include find("input") {
    background: red;
  }
  @include find("select") {
    background: greenyellow;
  }
}
</style>
