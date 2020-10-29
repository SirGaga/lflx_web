<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>

      <el-form-item label="" prop="name">
        <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="" prop="name">
        <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password></el-input>
      </el-form-item>

      <el-button  type="primary" style="width:100%;margin-bottom:30px;" @click="submitForm('loginForm')">Login</el-button>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.replace('/main');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }

}
</script>

<style scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login-container>.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.login-container>.login-form>.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
.login-container>.login-form>.tips>span {
/*&:first-of-type {*/
   margin-right: 16px;
 /*}*/
}
.login-container>.login-form>.title-container {
  position: relative;
}
.login-container>.login-form>.title-container>.title {
  font-size: 26px;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.login-container .el-form-item {
  border: 1px solid hsla(0,0%,100%,.1);
  background: rgba(0,0,0,.1);
  border-radius: 5px;
  color: #454545;
}
</style>