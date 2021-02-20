<template>
  <div class="login_box">
    <h3 class="login_title">登录</h3>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>

</template>

<script>

export default {
    name:"Login",
     data() {
      return {
        form: {
          name: '',
          password:''
        },
        // rules 要在 data 里面定义！！！！
        rules:{
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password:[
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
        }
      }
    },
    methods:{
        onSubmit:function(formName){
            var that = this
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // 使用 axios 向后端发送数据
                console.log(that.form.name)
                // this.axios.post('http://localhost:9000/login/',
                // {
                //     userName: that.form.name,
                //     password: that.form.password
                // })
                // .then(function(response){
                //     console.log(response)
                //     // 登录成功之后跳转
                //     that.$router.push("/todolist")
                    
                // })
                // 跳转到 Hello World
                that.$router.push("/hello")
    
            } else {
                this.$message.error("请输入用户名和密码")
                return false;
            }
            });
        }
    }
    
}
</script>

<style scoped>
    .login_box{
        width: 500px;
        height: 300px;
        border: 1px solid #DCDFE6;
        margin: 150px auto;
        padding: 20px 30px 20px 30px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px #DCDFE6;
    }

    .login_title{
        text-align: center;
        margin-bottom: 20px;
    }
</style>