<template>
  <div class="wuxing-container">
    <div class="wuxing-card">
      <div class="page-header">
        <button @click="goBack" class="back-btn">← 返回</button>
        <h2>五行分析</h2>
        <div class="step-indicator">步骤 1/2</div>
      </div>

      <div class="content-wrapper">
        <div class="intro-section">
          <div class="icon">⚗️</div>
          <h3>了解你的五行属性</h3>
          <p>根据你的阳历出生日期，生成对应的八字和五行分布，用于在后续推荐中加入「更适合你的城市气场」。</p>
          <p class="hint-text">请直接输入你的阳历出生日期；本工具不采集具体出生时刻。</p>
        </div>

        <div class="form-section">
          <label class="date-label">请输入你的阳历出生日期</label>
          <div class="date-picker-card">
            <div class="date-picker-header">
              <div class="date-picker-icon">📅</div>
              <div class="date-picker-text">
                <div class="date-picker-title">选择你的生日</div>
                <div class="date-picker-subtitle">用于生成八字与五行画像，不会被上传到服务器</div>
              </div>
            </div>
            <div class="date-input-row">
              <div class="select-group">
                <div class="select-wrapper">
                  <select
                    v-model="birthYear"
                    class="date-input"
                    @change="handleDatePartChange"
                  >
                    <option value="">年份</option>
                    <option
                      v-for="year in yearOptions"
                      :key="year"
                      :value="year"
                    >
                      {{ year }} 年
                    </option>
                  </select>
                </div>
                <div class="select-wrapper">
                  <select
                    v-model="birthMonth"
                    class="date-input"
                    @change="handleDatePartChange"
                  >
                    <option value="">月份</option>
                    <option
                      v-for="month in monthOptions"
                      :key="month"
                      :value="month"
                    >
                      {{ month }} 月
                    </option>
                  </select>
                </div>
                <div class="select-wrapper">
                  <select
                    v-model="birthDay"
                    class="date-input"
                    :disabled="!dayOptions.length"
                    @change="handleDatePartChange"
                  >
                    <option value="">{{ dayOptions.length ? '日期' : '先选年月' }}</option>
                    <option
                      v-for="day in dayOptions"
                      :key="day"
                      :value="day"
                    >
                      {{ day }} 日
                    </option>
                  </select>
                </div>
                <div class="select-wrapper">
                  <select
                    v-model="birthHour"
                    class="date-input"
                    @change="handleDatePartChange"
                  >
                    <option value="">时</option>
                    <option
                      v-for="hour in hourOptions"
                      :key="hour"
                      :value="hour"
                    >
                      {{ hour }} 时
                    </option>
                  </select>
                </div>
                <div class="select-wrapper">
                  <select
                    v-model="birthMinute"
                    class="date-input"
                    @change="handleDatePartChange"
                  >
                    <option value="">分</option>
                    <option
                      v-for="minute in minuteOptions"
                      :key="minute"
                      :value="minute"
                    >
                      {{ minute }} 分
                    </option>
                  </select>
                </div>
              </div>
              <button
                v-if="birthDate"
                type="button"
                class="date-clear-btn"
                @click="clearDate"
              >
                重选
              </button>
            </div>
            <div v-if="birthDate" class="date-preview">
              <span class="preview-label">已选择生日：</span>
              <span class="preview-value">{{ birthDate }}</span>
            </div>
          </div>
        </div>

        <div v-if="wuxingResult" class="result-section">
          <div class="ba-zi-display">
            <div class="ba-zi-title">你的八字</div>
            <div class="ba-zi-grid">
              <div class="ba-zi-item">
                <div class="label">年</div>
                <div class="value">{{ wuxingResult.baZi.year.ganZhi }}</div>
                <div class="zodiac">🐾{{ wuxingResult.baZi.year.zodiac }}</div>
              </div>
              <div class="ba-zi-item">
                <div class="label">月</div>
                <div class="value">{{ wuxingResult.baZi.month.ganZhi }}</div>
              </div>
              <div class="ba-zi-item">
                <div class="label">日</div>
                <div class="value">{{ wuxingResult.baZi.day.ganZhi }}</div>
              </div>
              <div class="ba-zi-item">
                <div class="label">时</div>
                <div class="value">{{ wuxingResult.baZi.hour.ganZhi }}</div>
              </div>
            </div>
          </div>

          <div class="wuxing-display">
            <div class="wuxing-title">五行分析</div>
            <div class="wuxing-grid">
              <div
                v-for="(count, element) in wuxingResult.wuxing.count"
                :key="element"
                class="wuxing-item"
                :class="{
                  'dominant': wuxingResult.wuxing.dominant.includes(element),
                  'missing': count === 0
                }"
              >
                <div class="element-icon">{{ getElementIcon(element) }}</div>
                <div class="element-name">{{ element }}</div>
                <div class="element-count">{{ count }}个</div>
                <div v-if="wuxingResult.wuxing.dominant.includes(element)" class="dominant-tag">主导</div>
                <div v-if="count === 0" class="missing-tag">缺失</div>
              </div>
            </div>
          </div>

          <div class="dominant-result">
            <div class="result-title">主导五行</div>
            <div class="result-value">
              <span
                v-for="element in wuxingResult.wuxing.dominant"
                :key="element"
                class="element-tag"
              >
                {{ getElementIcon(element) }} {{ element }}
              </span>
            </div>
          </div>

          <button @click="goToQuiz" class="continue-btn">
            开始答题 →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getWuXingByDate, getBaZi, calculateWuXing as calcWuXing } from '../utils/wuxing.js'
import { getItem, setItem, removeItem } from '../utils/storage.js'

const router = useRouter()
const birthDate = ref('')
const birthYear = ref('')
const birthMonth = ref('')
const birthDay = ref('')
const birthHour = ref('')
const birthMinute = ref('')
const wuxingResult = ref(null)

const now = new Date()
const currentYear = now.getFullYear()
const yearOptions = Array.from({ length: 80 }, (_, index) => currentYear - index)
const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1)
const hourOptions = Array.from({ length: 24 }, (_, index) => index)
const minuteOptions = Array.from({ length: 60 }, (_, index) => index)

const elementIcons = {
  '金': '⚔️',
  '木': '🌳',
  '水': '💧',
  '火': '🔥',
  '土': '⛰️'
}

const dayOptions = computed(() => {
  const year = Number(birthYear.value)
  const month = Number(birthMonth.value)
  if (!year || !month) {
    return []
  }
  const daysInMonth = new Date(year, month, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, index) => index + 1)
})

function getElementIcon(element) {
  return elementIcons[element] || '✨'
}

function calculateWuXing() {
  if (!birthDate.value) return

  const year = Number(birthYear.value)
  const month = Number(birthMonth.value) // 直接使用月份值，不减去1
  const day = Number(birthDay.value)
  const hour = Number(birthHour.value || 12) // 默认12时
  const minute = Number(birthMinute.value || 0) // 默认0分

  // 直接调用getBaZi函数，传入正确的参数
  const baZi = getBaZi(year, month, day, hour)
  const wuxingInfo = calcWuXing(baZi)
  
  wuxingResult.value = {
    date: birthDate.value,
    baZi: baZi,
    wuxing: wuxingInfo
  }

  // 保存到 localStorage
  setItem('userWuxing', wuxingResult.value)
}

function handleDatePartChange() {
  const year = birthYear.value
  const month = birthMonth.value
  const day = birthDay.value

  if (!year || !month || !day) {
    wuxingResult.value = null
    return
  }

  const monthStr = String(month).padStart(2, '0')
  const dayStr = String(day).padStart(2, '0')
  const hourStr = String(birthHour.value || 12).padStart(2, '0')
  const minuteStr = String(birthMinute.value || 0).padStart(2, '0')
  
  birthDate.value = `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}`
  calculateWuXing()
}

function clearDate() {
  birthDate.value = ''
  birthYear.value = ''
  birthMonth.value = ''
  birthDay.value = ''
  birthHour.value = ''
  birthMinute.value = ''
  wuxingResult.value = null
  removeItem('userWuxing')
}

function goToQuiz() {
  router.push('/quiz')
}

function goBack() {
  router.push('/login')
}

onMounted(() => {
  // 检查是否有保存的日期
  const savedWuxing = getItem('userWuxing')
  if (savedWuxing) {
    wuxingResult.value = savedWuxing
    birthDate.value = wuxingResult.value.date
    if (wuxingResult.value.date) {
      // 处理日期时间格式
      const dateTimeParts = wuxingResult.value.date.split(' ')
      const dateParts = dateTimeParts[0].split('-')
      const timeParts = dateTimeParts[1] ? dateTimeParts[1].split(':') : ['12', '00']
      
      birthYear.value = dateParts[0] || ''
      birthMonth.value = dateParts[1] ? Number(dateParts[1]) : ''
      birthDay.value = dateParts[2] ? Number(dateParts[2]) : ''
      birthHour.value = timeParts[0] ? Number(timeParts[0]) : ''
      birthMinute.value = timeParts[1] ? Number(timeParts[1]) : ''
    }
  }
})
</script>

<style scoped>
.wuxing-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.wuxing-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 30px;
  width: 100%;
  max-width: 600px;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.content-wrapper {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-section {
  text-align: center;
  margin-bottom: 30px;
}

.icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.intro-section h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

.intro-section p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.form-section {
  margin-bottom: 30px;
}

.date-picker-card {
  border-radius: 14px;
  padding: 16px 16px 14px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f4f1ff 100%);
  border: 1px solid rgba(102, 126, 234, 0.22);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.date-picker-card:hover {
  box-shadow: 0 14px 32px rgba(102, 126, 234, 0.25);
  transform: translateY(-1px);
}

.date-picker-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.date-picker-icon {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
  font-size: 20px;
}

.date-picker-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.date-picker-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.date-picker-subtitle {
  font-size: 12px;
  color: #666;
}

.date-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
}

.select-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  flex-wrap: wrap;
}

.select-wrapper {
  flex: 1;
  min-width: 80px;
}

.date-label {
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.date-input {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.25s ease;
  outline: none;
  background: rgba(255, 255, 255, 0.92);
  color: #333;
}

.date-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.25);
  background: #ffffff;
}

.date-clear-btn {
  padding: 9px 14px;
  border-radius: 999px;
  border: none;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.95);
  color: #666;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.date-clear-btn:hover {
  background: #fff;
  color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.28);
}

.date-preview {
  margin-top: 10px;
  font-size: 13px;
  color: #444;
}

.preview-label {
  opacity: 0.8;
  margin-right: 4px;
}

.preview-value {
  font-weight: 600;
  color: #333;
}

.hint-text {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
}

.result-section {
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ba-zi-display {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
}

.ba-zi-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.ba-zi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.ba-zi-item {
  background: white;
  border-radius: 10px;
  padding: 15px 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.ba-zi-item .label {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.ba-zi-item .value {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.ba-zi-item .zodiac {
  font-size: 14px;
}

.wuxing-display {
  margin-bottom: 25px;
}

.wuxing-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.wuxing-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.wuxing-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px 8px;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.wuxing-item.dominant {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.wuxing-item.missing {
  opacity: 0.5;
}

.wuxing-item .element-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.wuxing-item .element-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
}

.wuxing-item .element-count {
  font-size: 12px;
  opacity: 0.8;
}

.dominant-tag {
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  color: #667eea;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 8px;
  font-weight: 600;
}

.missing-tag {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ff6b6b;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 8px;
  font-weight: 600;
}

.dominant-result {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  color: white;
}

.result-title {
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.result-value {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.element-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
}

.continue-btn {
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

.continue-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

@media (max-width: 480px) {
  .wuxing-card {
    padding: 20px;
  }

  .ba-zi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .wuxing-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .select-group {
    grid-template-columns: repeat(2, 1fr);
  }

  .select-wrapper {
    min-width: 70px;
  }

  .date-input {
    font-size: 13px;
    padding: 10px 12px;
  }
}
</style>
