<template>
  <div id="base-aside">
    <el-menu :default-openeds="['1', '3']" class="menu" background-color="#222d32" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>功能设置</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <router-link to="/page1"><el-menu-item index="1-1">页面1</el-menu-item></router-link>
          <router-link to="/page2"><el-menu-item index="1-2">页面2</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <router-link to="/page3"><el-menu-item index="1-3">页面3</el-menu-item></router-link>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <router-link to="/page4"><el-menu-item index="1-4-1">页面4-1</el-menu-item></router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>业务报表</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>系统配置</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseHeader extends Vue {
  token: string = '';
}
</script>

<style scoped lang="scss">
#base-aside {
  .menu {
    border-right:none;
  }
}
</style>
