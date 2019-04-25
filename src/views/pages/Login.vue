<template>
  <div id="login">
    <el-form ref="form" :model="user" label-width="80px" class="form">
      <el-form-item label="用户名">
        <el-col :span="20">
          <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="20">
          <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
        </el-col>
      </el-form-item>
      <el-button type="success" @click="login(user.name, user.password)">立即登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/types';

@Component
export default class Login extends Vue {
  user: User = {
    name: 'admin',
    password: '123456',
  };
  login(name: string, password: string) {
    if (name === 'admin' && password === '123456') {
      this.$router.push({name: 'page1'});
    }
  }
}
</script>
<style scoped lang="scss">
#login {
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:#333;
  .form {
    position:absolute;
    width:600px;
    height:300px;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-150px;
  }
}
</style>
