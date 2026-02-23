<template>
  <div class="result-container">
    <div class="result-card">
      <div class="page-header">
        <button @click="resetTest" class="back-btn">← 重新测试</button>
        <h2>测试结果</h2>
        <div class="step-indicator">结果已生成</div>
      </div>

      <div v-if="recommendedCities && recommendedCities.length > 0" class="result-content">
        <!-- 主要推荐城市 -->
        <div class="main-result">
          <div class="result-title">
            <span class="title-icon">🏆</span>
            <span>综合你的五行属性与生活偏好，你最适合居住的城市是</span>
          </div>

          <div class="city-card main-city">
            <div class="city-header">
              <div class="city-name">
                <span class="city-emoji">{{ topCity.emoji }}</span>
                <h3>{{ topCity.name }}</h3>
              </div>
              <div class="match-score">
                <span>匹配度</span>
                <span class="score-number">{{ topCity.score }}</span>
              </div>
            </div>

            <div class="city-climate">
              <span class="label">🌤️ 气候</span>
              <span>{{ topCity.data.climate }}</span>
            </div>

            <div class="city-description">
              {{ topCity.data.description }}
            </div>

            <div class="city-section">
              <div class="section-title">✨ 城市优势</div>
              <div class="tags-list">
                <span
                  v-for="advantage in topCity.data.advantages"
                  :key="advantage"
                  class="tag advantage"
                >
                  ✓ {{ advantage }}
                </span>
              </div>
            </div>

            <div class="city-section">
              <div class="section-title">⚠️ 注意事项</div>
              <div class="tags-list">
                <span
                  v-for="disadvantage in topCity.data.disadvantages"
                  :key="disadvantage"
                  class="tag disadvantage"
                >
                  ✗ {{ disadvantage }}
                </span>
              </div>
            </div>

            <div class="city-section">
              <div class="section-title">🎯 匹配因素</div>
              <div class="matched-factors">
                <span
                  v-for="tag in topCity.matchedTags"
                  :key="tag"
                  class="factor-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 其他推荐城市 -->
        <div class="other-cities">
          <div class="section-title">🌟 其他推荐城市</div>
          <div class="cities-grid">
            <div
              v-for="(city, index) in otherCities"
              :key="city.name"
              class="city-item"
            >
              <div class="city-rank">{{ index + 2 }}</div>
              <div class="city-info">
                <div class="city-icon">{{ city.data.emoji }}</div>
                <div class="city-small-name">{{ city.name }}</div>
                <div class="city-small-score">匹配度: {{ city.score }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 五行信息 -->
        <div v-if="userWuxing" class="wuxing-section">
          <div class="section-title">⚗️ 你的五行属性</div>
          <div class="wuxing-info">
            <div class="ba-zi-summary">
              <div class="ba-zi-text">
                <span class="label">八字:</span>
                <span class="value">{{ userWuxing.baZi.year.ganZhi }}年</span>
                <span class="value">{{ userWuxing.baZi.month.ganZhi }}月</span>
                <span class="value">{{ userWuxing.baZi.day.ganZhi }}日</span>
                <span class="value">{{ userWuxing.baZi.hour.ganZhi }}时</span>
              </div>
            </div>
            <div class="dominant-wuxing">
              <span class="label">主导五行:</span>
              <span
                v-for="element in userWuxing.wuxing.dominant"
                :key="element"
                class="wuxing-element"
              >
                {{ getElementIcon(element) }} {{ element }}
              </span>
            </div>
          </div>
        </div>

        <!-- 匹配说明 -->
        <div class="match-explanation">
          <div class="match-title">🧩 匹配说明（只做参考）</div>
          <ul class="match-list">
            <li>根据你在问卷中的每一个选择，与各城市的「生活方式标签」进行匹配，命中越多，分数越高。</li>
            <li>再结合你的主导五行，与城市对应的五行属性做加权匹配，为更适合你气场的城市额外加分。</li>
            <li>最终按照总分从高到低排序，第一名是当前最推荐的城市，其余为备选候选。</li>
          </ul>
          <div class="match-note">本结果不构成任何决策建议，只是帮你从另一个角度认识自己和城市的契合度。</div>
        </div>

        <!-- 分享按钮 -->
        <div class="share-section">
          <button @click="shareResult" class="share-btn">
            <span>📤 分享结果</span>
          </button>
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-else class="loading-section">
        <div class="loader"></div>
        <p>正在生成结果...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getItem, removeItem } from '../utils/storage.js'

const router = useRouter()
const recommendedCities = ref([])
const userWuxing = ref(null)

const elementIcons = {
  '金': '⚔️',
  '木': '🌳',
  '水': '💧',
  '火': '🔥',
  '土': '⛰️'
}

const topCity = computed(() => {
  return recommendedCities.value[0] || {}
})

const otherCities = computed(() => {
  return recommendedCities.value.slice(1, 6) // 显示前6个其他城市
})

function getElementIcon(element) {
  return elementIcons[element] || '✨'
}

function shareResult() {
  const city = topCity.value
  const shareText = `我在《你适合居住在哪个城市？》测试中，最适合我的城市是${city.name}！${city.emoji}\n\n快来看看你适合居住在哪个城市吧！`

  if (navigator.share) {
    navigator.share({
      title: '城市测试结果',
      text: shareText
    }).catch(err => {
      console.log('分享失败:', err)
    })
  } else {
    // 复制到剪贴板
    navigator.clipboard.writeText(shareText).then(() => {
      alert('结果已复制到剪贴板！')
    }).catch(err => {
      console.log('复制失败:', err)
      alert('分享失败，请手动分享')
    })
  }
}

function resetTest() {
  if (confirm('确定要重新开始测试吗？这将清除当前的答题记录。')) {
    removeItem('quizAnswers')
    removeItem('userWuxing')
    removeItem('recommendedCities')
    router.push('/wuxing')
  }
}

onMounted(() => {
  // 获取推荐城市结果
  const savedCities = getItem('recommendedCities')
  if (savedCities) {
    recommendedCities.value = savedCities
  }

  // 获取五行信息
  const savedWuxing = getItem('userWuxing')
  if (savedWuxing) {
    userWuxing.value = savedWuxing
  }

  // 如果没有结果，返回登录页
  if (!savedCities) {
    router.push('/login')
  }
})
</script>

<style scoped>
.result-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.result-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 30px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.back-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.back-btn:hover {
  color: #667eea;
}

.page-header h2 {
  font-size: 20px;
  margin: 0;
}

.step-indicator {
  background: #f0f2ff;
  color: #667eea;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  opacity: 0.9;
  cursor: default;
}

.result-content {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title-icon {
  font-size: 28px;
}

.city-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 25px;
  color: white;
  margin-bottom: 30px;
}

.main-city {
  animation: slideUp 0.6s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.city-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.city-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.city-emoji {
  font-size: 36px;
}

.city-name h3 {
  font-size: 32px;
  margin: 0;
  font-weight: 700;
}

.match-score {
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
}

.match-score span:first-child {
  display: block;
  font-size: 12px;
  opacity: 0.9;
}

.score-number {
  font-size: 28px;
  font-weight: 700;
}

.city-climate {
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.city-climate .label {
  font-weight: 600;
  opacity: 0.9;
}

.city-description {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
  opacity: 0.95;
}

.city-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  opacity: 0.9;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
}

.tag.advantage {
  background: rgba(76, 175, 80, 0.3);
}

.tag.disadvantage {
  background: rgba(244, 67, 54, 0.3);
}

.matched-factors {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.factor-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.other-cities {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
}

.other-cities .section-title {
  color: #333;
  margin-bottom: 15px;
}

.cities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.city-item {
  background: white;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.city-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.city-rank {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.city-info {
  flex: 1;
}

.city-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.city-small-name {
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

.city-small-score {
  font-size: 12px;
  color: #666;
}

.wuxing-section {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
}

.wuxing-section .section-title {
  color: #333;
  margin-bottom: 15px;
}

.wuxing-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ba-zi-summary {
  background: white;
  border-radius: 10px;
  padding: 12px 16px;
}

.ba-zi-text {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.ba-zi-text .label {
  color: #666;
  font-weight: 500;
}

.ba-zi-text .value {
  color: #333;
  font-weight: 600;
}

.dominant-wuxing {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.dominant-wuxing .label {
  color: #666;
  font-weight: 500;
}

.wuxing-element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
}

.match-explanation {
  background: #f9fafc;
  border-radius: 15px;
  padding: 18px 20px;
  margin-bottom: 25px;
  border: 1px dashed rgba(102, 126, 234, 0.4);
}

.match-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.match-list {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #555;
  line-height: 1.7;
}

.match-list li + li {
  margin-top: 4px;
}

.match-note {
  margin-top: 10px;
  font-size: 12px;
  color: #888;
}

.share-section {
  text-align: center;
}

.share-btn {
  padding: 14px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.loading-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f0f0f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-section p {
  color: #666;
}

@media (max-width: 600px) {
  .result-card {
    padding: 20px;
    border-radius: 15px;
  }

  .city-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .city-name h3 {
    font-size: 26px;
  }

  .cities-grid {
    grid-template-columns: 1fr;
  }

  .ba-zi-text {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
