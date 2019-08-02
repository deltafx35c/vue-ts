<template>
  <div id="page9">
    <div class="markdown" v-html="mdText"></div>
  </div>
</template>

<script lang="ts">
import '@/assets/css/markdown.scss'
import { Component, Vue } from 'vue-property-decorator'
import text from '@/assets/md/creat-a-chatroom-by-express-and-websocket.md'

@Component
export default class Page9 extends Vue {
  mdText: string = text
}
</script>
<style scoped lang="scss">
#page9 {
  text-align: left;
  padding-left: 200px;
}
</style>
