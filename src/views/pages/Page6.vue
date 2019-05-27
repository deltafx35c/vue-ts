<template>
  <div id="page6">
    <div class="markdown" v-html="mdText"></div>
  </div>
</template>

<script lang="ts">
import '@/assets/css/markdown.scss';
import { Component, Vue } from 'vue-property-decorator';
import text from '@/assets/md/frontend-centos.md';

@Component
export default class Page6 extends Vue {
  mdText: string = text;
}
</script>
<style scoped lang="scss">
#page6 {
    text-align:left;
    padding-left:200px;
}
</style>
