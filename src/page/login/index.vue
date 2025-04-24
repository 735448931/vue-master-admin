<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="title">系统登录</h2>
      <el-form 
        :model="form" 
        :rules="rules" 
        ref="loginForm"
        @keyup.enter="handleLogin"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="User"
          />
        </el-form-item>
        
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        
        <el-form-item>
          <el-button 
            type="primary" 
            class="login-btn" 
            @click="handleLogin"
            :loading="loading"
          >
            立即登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// 表单类型定义
interface LoginForm {
  username: string
  password: string
}

// 表单数据
const form = reactive<LoginForm>({
  username: '',
  password: ''
})

// 表单验证规则
const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ]
})

const loginForm = ref<FormInstance>()
const loading = ref(false)

const handleLogin = async () => {
  if (!loginForm.value) return
  
  try {
    loading.value = true
    await loginForm.value.validate()
    
    // 这里替换为实际登录逻辑
    console.log('登录数据:', form)
    // await loginAPI(form)
    
  } catch (error) {
    console.error('验证失败:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-box {
  width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.title {
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>