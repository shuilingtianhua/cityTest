import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { getItem } from './utils/storage.js'

// 页面组件
import LoginPage from './pages/LoginPage.vue'
import FiveElementPage from './pages/FiveElementPage.vue'
import QuizPage from './pages/QuizPage.vue'
import ResultPage from './pages/ResultPage.vue'

// 路由配置
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/wuxing', component: FiveElementPage },
  { path: '/quiz', component: QuizPage },
  { path: '/result', component: ResultPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 检查登录状态与流程完整性
router.beforeEach((to, from, next) => {
  const isLoggedIn = getItem('isLoggedIn', 'false') === 'true'
  const hasWuxing = !!getItem('userWuxing')
  const hasAnswers = !!getItem('quizAnswers')
  const hasResult = !!getItem('recommendedCities')

  if (to.path === '/login') {
    // 允许已登录用户访问登录页
    return next()
  }

  // 未登录禁止访问其他页面
  if (!isLoggedIn) {
    return next('/login')
  }

  // 强制流程顺序：五行 -> 问卷 -> 结果
  if (to.path === '/wuxing') {
    return next()
  }

  if (to.path === '/quiz') {
    if (!hasWuxing) {
      return next('/wuxing')
    }
    return next()
  }

  if (to.path === '/result') {
    if (!hasWuxing || !hasAnswers || !hasResult) {
      // 缺任何一步数据都从五行页重走流程
      return next('/wuxing')
    }
    return next()
  }

  return next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
