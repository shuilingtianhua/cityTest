<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1>🏙️ 城市测试</h1>
        <p>通过五行 + 生活偏好，发现最适合你的居住城市</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="flow-intro">
          <div class="flow-title">测试流程</div>
          <ul class="flow-steps">
            <li><span class="step-index">1</span> 填写出生日期，生成你的五行画像</li>
            <li><span class="step-index">2</span> 回答 30 道关于生活方式的小问题</li>
            <li><span class="step-index">3</span> 获得专属的城市匹配结果和解释</li>
          </ul>
        </div>

        <div class="form-group">
          <label for="password">请输入访问密码</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="输入密码"
            @keyup.enter="handleLogin"
          />
        </div>

        <button type="submit" class="login-btn" :disabled="isLoading">
          <span v-if="!isLoading">进入测试</span>
          <span v-else>验证中...</span>
        </button>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>

      <div class="login-footer">
        <p>🔒 本工具不会上传你的任何个人信息，所有数据仅保存在本地浏览器。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { config } from '../data/config.js'
import { setItem, clearAllAppData } from '../utils/storage.js'

const router = useRouter()
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  if (!password.value.trim()) {
    errorMessage.value = '请输入密码'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  // 模拟验证延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  if (password.value === config.password) {
    // 清空当前应用的所有本地数据并写入登录状态
    clearAllAppData()
    setItem('isLoggedIn', 'true')
    router.push('/wuxing')
  } else {
    errorMessage.value = '密码错误，请重试'
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-header {
  margin-bottom: 40px;
}

.login-header h1 {
  font-size: 32px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header p {
  color: #666;
  font-size: 14px;
}

.login-form {
  text-align: left;
}

.flow-intro {
  background: #f8f9ff;
  border-radius: 12px;
  padding: 16px 14px;
  margin-bottom: 24px;
  border: 1px solid #e0e3ff;
}

.flow-title {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
}

.flow-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.flow-steps li {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #666;
}

.step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  margin-right: 8px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  outline: none;
}

.form-group input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.login-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.login-footer p {
  color: #999;
  font-size: 12px;
}
</style>
