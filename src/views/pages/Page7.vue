<template>
  <div id="page7">
    <div class="markdown" v-html="mdText"></div>
  </div>
</template>

<script lang="ts">
import '@/assets/css/markdown.scss';
import { Component, Vue } from 'vue-property-decorator';
import text from '@/assets/md/create-a-new-site.md';

@Component
export default class Page7 extends Vue {
  mdText: string = text;
}
</script>
<style scoped lang="scss">
#page7 {
  text-align: left;
  padding-left: 200px;
}
</style>
