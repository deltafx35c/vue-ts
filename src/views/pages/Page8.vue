<template>
  <div id="page8">
    <div class="markdown" v-html="mdText"></div>
  </div>
</template>

<script lang="ts">
import '@/assets/css/markdown.scss'
import { Component, Vue } from 'vue-property-decorator'
import text from '@/assets/md/customize-a-seed-project-by-vue-cli.md'

@Component
export default class Page8 extends Vue {
  mdText: string = text
}
</script>
<style scoped lang="scss">
#page8 {
  text-align: left;
  padding-left: 200px;
}
</style>
