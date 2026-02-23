<template>
  <div class="quiz-container">
    <div class="quiz-card">
      <div class="page-header">
        <button @click="goBack" class="back-btn">← 返回</button>
        <h2>性格测试</h2>
        <div class="step-indicator">步骤 2/2</div>
      </div>

      <!-- 进度条 -->
      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${progressPercentage}%` }"
          ></div>
        </div>
        <div class="progress-text">
          问题 {{ currentQuestionIndex + 1 }} / {{ questions.length }}
        </div>
      </div>

      <!-- 题目区域 -->
      <div v-if="currentQuestion" class="question-section">
        <div class="question-number">第 {{ currentQuestionIndex + 1 }} 题</div>
        <div class="question-text">{{ currentQuestion.question }}</div>

        <div class="options-list">
          <div
            v-for="(option, index) in currentQuestion.options"
            :key="option.value"
            class="option-item"
            :class="{
              'selected': selectedOption === option.value,
              'hovered': hoveredIndex === index
            }"
            @click="selectOption(option.value)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = -1"
          >
            <div class="option-radio">
              <div class="radio-circle" :class="{ 'checked': selectedOption === option.value }"></div>
            </div>
            <div class="option-content">{{ option.label }}</div>
            <div v-if="selectedOption === option.value" class="check-icon">✓</div>
          </div>
        </div>

        <button
          @click="nextQuestion"
          class="next-btn"
          :disabled="!selectedOption"
          :class="{ 'disabled': !selectedOption }"
        >
          {{ isLastQuestion ? '查看结果 →' : '下一题 →' }}
        </button>
      </div>

      <!-- 完成状态 -->
      <div v-else class="complete-section">
        <div class="success-icon">✓</div>
        <h3>测试完成！</h3>
        <p>正在为你分析结果...</p>
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../data/questions.js'
import { calculateRecommendedCities } from '../data/cities.js'
import { getItem, setItem } from '../utils/storage.js'

const router = useRouter()
const currentQuestionIndex = ref(0)
const selectedOption = ref('')
const hoveredIndex = ref(-1)
const answers = ref([])

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const progressPercentage = computed(() => {
  return ((currentQuestionIndex.value + 1) / questions.length) * 100
})

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === questions.length - 1
})

function selectOption(value) {
  selectedOption.value = value
}

function nextQuestion() {
  if (!selectedOption.value) return

  // 保存答案
  answers.value.push({
    questionId: currentQuestion.value.id,
    value: selectedOption.value
  })

  // 保存到 localStorage
  setItem('quizAnswers', answers.value)

  if (isLastQuestion.value) {
    // 完成所有题目，计算结果并跳转
    calculateAndShowResult()
  } else {
    // 下一题
    currentQuestionIndex.value++
    selectedOption.value = ''
  }
}

function calculateAndShowResult() {
  // 显示完成状态
  currentQuestionIndex.value = questions.length

  // 获取五行信息
  const userWuxing = getItem('userWuxing', {})

  // 计算推荐城市
  const recommendedCities = calculateRecommendedCities(answers.value, userWuxing.wuxing)

  // 保存结果
  setItem('recommendedCities', recommendedCities)

  // 延迟跳转，显示加载动画
  setTimeout(() => {
    router.push('/result')
  }, 1500)
}

function goBack() {
  if (answers.value.length > 0 && !confirm('返回将清空已答题进度，确定要返回吗？')) {
    return
  }
  router.push('/wuxing')
}

onMounted(() => {
  // 检查是否有保存的答题进度
  const savedAnswers = getItem('quizAnswers')
  if (savedAnswers) {
    answers.value = savedAnswers
    // 如果之前已完成，直接跳转结果页
    if (answers.value.length >= questions.length) {
      router.push('/result')
    } else {
      // 否则继续答题
      currentQuestionIndex.value = answers.value.length
    }
  }

  // 检查是否有五行信息
  const userWuxing = getItem('userWuxing')
  if (!userWuxing) {
    router.push('/wuxing')
  }
})
</script>

<style scoped>
.quiz-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.quiz-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 30px;
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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

.progress-container {
  margin-bottom: 30px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.5s ease;
  border-radius: 4px;
}

.progress-text {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.question-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.question-number {
  color: #667eea;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.question-text {
  font-size: 20px;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.6;
  font-weight: 500;
}

.options-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.option-item:hover,
.option-item.hovered {
  border-color: #667eea;
  background: #f8f9ff;
}

.option-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.option-radio {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.radio-circle.checked {
  border-color: #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.radio-circle.checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.option-content {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.check-icon {
  color: #667eea;
  font-weight: bold;
  font-size: 18px;
  animation: popIn 0.3s ease;
}

@keyframes popIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.next-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-btn:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.next-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.complete-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  animation: scaleIn 0.5s ease;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.complete-section h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.complete-section p {
  color: #666;
  margin-bottom: 20px;
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 480px) {
  .quiz-card {
    padding: 20px;
    min-height: 450px;
  }

  .question-text {
    font-size: 18px;
  }

  .option-item {
    padding: 14px 16px;
  }

  .option-content {
    font-size: 15px;
  }
}
</style>
