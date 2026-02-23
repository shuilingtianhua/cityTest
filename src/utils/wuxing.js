/**
 * 五行计算工具
 * 根据出生日期计算天干地支和五行属性
 */

// 天干
const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']

// 地支
const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

// 生肖
const zodiac = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']

// 天干对应的五行
const tianGanWuXing = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水'
}

// 地支对应的五行
const diZhiWuXing = {
  '子': '水', '丑': '土', '寅': '木', '卯': '木',
  '辰': '土', '巳': '火', '午': '火', '未': '土',
  '申': '金', '酉': '金', '戌': '土', '亥': '水'
}

/**
 * 计算年干支
 * @param {number} year - 年份
 * @returns {string} 天干地支
 */
export function getYearGanZhi(year) {
  // 1984年是甲子年
  const offset = (year - 1984) % 60
  const ganIndex = offset % 10
  const zhiIndex = offset % 12

  // 处理负数年份
  const adjustedGanIndex = (ganIndex + 10) % 10
  const adjustedZhiIndex = (zhiIndex + 12) % 12

  return {
    gan: tianGan[adjustedGanIndex],
    zhi: diZhi[adjustedZhiIndex],
    ganZhi: tianGan[adjustedGanIndex] + diZhi[adjustedZhiIndex],
    zodiac: zodiac[adjustedZhiIndex]
  }
}

/**
 * 计算月干支
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @returns {string} 天干地支
 */
export function getMonthGanZhi(year, month) {
  // 月干支需要根据年干来计算
  const yearGanIndex = (year - 1984) % 10
  const adjustedYearGanIndex = (yearGanIndex + 10) % 10

  // 年干对应的月干基数
  const monthGanBase = {
    '甲': 3, '乙': 5,
    '丙': 7, '丁': 9,
    '戊': 1, '己': 3,
    '庚': 5, '辛': 7,
    '壬': 9, '癸': 1
  }

  const yearGan = tianGan[adjustedYearGanIndex]
  const monthGanStart = monthGanBase[yearGan]

  const ganIndex = (monthGanStart + month - 1 - 1) % 10
  const zhiIndex = (month + 1) % 12 // 寅月为农历一月

  return {
    gan: tianGan[ganIndex],
    zhi: diZhi[zhiIndex],
    ganZhi: tianGan[ganIndex] + diZhi[zhiIndex]
  }
}

/**
 * 计算日干支
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日
 * @returns {string} 天干地支
 */
export function getDayGanZhi(year, month, day) {
  // 使用Zeller公式计算日干支
  // 基准日期：1949年10月1日是甲子日
  const baseDate = new Date(1949, 9, 1)
  const targetDate = new Date(year, month - 1, day)

  const timeDiff = targetDate.getTime() - baseDate.getTime()
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

  const ganIndex = (daysDiff + 1) % 10
  const zhiIndex = (daysDiff + 1) % 12

  const adjustedGanIndex = (ganIndex + 10) % 10
  const adjustedZhiIndex = (zhiIndex + 12) % 12

  return {
    gan: tianGan[adjustedGanIndex],
    zhi: diZhi[adjustedZhiIndex],
    ganZhi: tianGan[adjustedGanIndex] + diZhi[adjustedZhiIndex]
  }
}

/**
 * 计算时干支
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日
 * @param {number} hour - 小时 (0-23)
 * @returns {string} 天干地支
 */
export function getHourGanZhi(year, month, day, hour) {
  // 时干需要根据日干来计算
  const dayGanZhi = getDayGanZhi(year, month, day)
  const dayGanIndex = tianGan.indexOf(dayGanZhi.gan)

  // 日干对应的时干基数
  const hourGanBase = {
    '甲': 1, '乙': 3,
    '丙': 5, '丁': 7,
    '戊': 9, '己': 1,
    '庚': 3, '辛': 5,
    '壬': 7, '癸': 9
  }

  const hourGanStart = hourGanBase[dayGanZhi.gan]
  const shiIndex = Math.floor((hour + 1) / 2) % 12

  const ganIndex = (hourGanStart + shiIndex - 1) % 10

  return {
    gan: tianGan[ganIndex],
    zhi: diZhi[shiIndex],
    ganZhi: tianGan[ganIndex] + diZhi[shiIndex]
  }
}

/**
 * 计算完整的八字
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日
 * @param {number} hour - 小时 (0-23)
 * @returns {object} 完整的八字信息
 */
export function getBaZi(year, month, day, hour) {
  const yearGanZhi = getYearGanZhi(year)
  const monthGanZhi = getMonthGanZhi(year, month)
  const dayGanZhi = getDayGanZhi(year, month, day)
  const hourGanZhi = getHourGanZhi(year, month, day, hour)

  return {
    year: yearGanZhi,
    month: monthGanZhi,
    day: dayGanZhi,
    hour: hourGanZhi,
    full: {
      nian: yearGanZhi.ganZhi,
      yue: monthGanZhi.ganZhi,
      ri: dayGanZhi.ganZhi,
      shi: hourGanZhi.ganZhi
    }
  }
}

/**
 * 计算五行数量和主导五行
 * @param {object} baZi - 八字对象
 * @returns {object} 五行统计结果
 */
export function calculateWuXing(baZi) {
  const wuXingCount = {
    '金': 0,
    '木': 0,
    '水': 0,
    '火': 0,
    '土': 0
  }

  // 统计天干的五行
  const allGan = [baZi.year.gan, baZi.month.gan, baZi.day.gan, baZi.hour.gan]
  allGan.forEach(gan => {
    wuXingCount[tianGanWuXing[gan]]++
  })

  // 统计地支的五行
  const allZhi = [baZi.year.zhi, baZi.month.zhi, baZi.day.zhi, baZi.hour.zhi]
  allZhi.forEach(zhi => {
    wuXingCount[diZhiWuXing[zhi]]++
  })

  // 找出主导五行
  let maxCount = 0
  let dominantWuXing = []
  for (const [wuXing, count] of Object.entries(wuXingCount)) {
    if (count > maxCount) {
      maxCount = count
      dominantWuXing = [wuXing]
    } else if (count === maxCount && count > 0) {
      dominantWuXing.push(wuXing)
    }
  }

  return {
    count: wuXingCount,
    dominant: dominantWuXing,
    baZi: baZi
  }
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} 格式化的日期字符串
 */
export function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 根据日期获取五行信息
 * @param {Date} date - 出生日期
 * @returns {object} 五行信息
 */
export function getWuXingByDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()

  const baZi = getBaZi(year, month, day, hour)
  const wuXingInfo = calculateWuXing(baZi)

  return {
    date: formatDate(date),
    baZi: baZi,
    wuxing: wuXingInfo
  }
}
