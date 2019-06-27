<template>
  <div id="base-aside">
    <el-menu :default-openeds="['1', '2', '3']" class="menu" background-color="#222d32" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-star-off"></i>常用模板</template>
        <el-menu-item-group>
          <router-link to="/page1">
            <el-menu-item index="1-1">模板一</el-menu-item>
          </router-link>
          <router-link to="/page2">
            <el-menu-item index="1-2">模板二</el-menu-item>
          </router-link>
          <router-link to="/page3">
            <el-menu-item index="1-3">模板三</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>常用报表</template>
        <el-menu-item-group>
          <router-link to="/page4">
            <el-menu-item index="2-1">报表一</el-menu-item>
          </router-link>
          <router-link to="/page0">
            <el-menu-item index="2-2">报表二</el-menu-item>
          </router-link>
          <router-link to="/page0">
            <el-menu-item index="2-3">报表三</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-notebook-1"></i>常用文档</template>
        <el-menu-item-group>
          <router-link to="/page5">
            <el-menu-item index="3-1">文档一</el-menu-item>
          </router-link>
          <router-link to="/page6">
            <el-menu-item index="3-2">文档二</el-menu-item>
          </router-link>
          <router-link to="/page7">
            <el-menu-item index="3-3">文档三</el-menu-item>
          </router-link>
          <router-link to="/page8">
            <el-menu-item index="3-4">文档四</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseHeader extends Vue {
  token: string = ''
}
</script>

<style scoped lang="scss">
#base-aside {
  .menu {
    border-right: none;
  }
}
</style>
