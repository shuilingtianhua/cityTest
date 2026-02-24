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
  // 正确的年柱计算方法
  // 年干：(年份 - 3) % 10，1-10对应甲-癸
  // 年支：(年份 - 3) % 12，1-12对应子-亥
  const ganValue = (year - 3) % 10
  const zhiValue = (year - 3) % 12
  
  // 调整为数组索引（0-9对应甲-癸，0-11对应子-亥）
  const ganIndex = (ganValue === 0) ? 9 : ganValue - 1
  const zhiIndex = (zhiValue === 0) ? 11 : zhiValue - 1

  return {
    gan: tianGan[ganIndex],
    zhi: diZhi[zhiIndex],
    ganZhi: tianGan[ganIndex] + diZhi[zhiIndex],
    zodiac: zodiac[zhiIndex]
  }
}

/**
 * 获取某年的节气日期
 * @param {number} year - 年份
 * @returns {object} 节气日期
 */
function getSolarTerms(year) {
  // 简化的节气日期表，基于公历
  // 24节气对应的公历日期（大致）
  return {
    // 春季
    '立春': { month: 2, day: 4 },   // 正月节
    '雨水': { month: 2, day: 19 },  // 正月中
    '惊蛰': { month: 3, day: 6 },   // 二月节
    '春分': { month: 3, day: 21 },  // 二月中
    '清明': { month: 4, day: 5 },   // 三月节
    '谷雨': { month: 4, day: 20 },  // 三月中
    
    // 夏季
    '立夏': { month: 5, day: 6 },   // 四月节
    '小满': { month: 5, day: 21 },  // 四月中
    '芒种': { month: 6, day: 6 },   // 五月节
    '夏至': { month: 6, day: 22 },  // 五月中
    '小暑': { month: 7, day: 7 },   // 六月节
    '大暑': { month: 7, day: 23 },  // 六月中
    
    // 秋季
    '立秋': { month: 8, day: 7 },   // 七月节
    '处暑': { month: 8, day: 23 },  // 七月中
    '白露': { month: 9, day: 8 },   // 八月节
    '秋分': { month: 9, day: 23 },  // 八月中
    '寒露': { month: 10, day: 8 },  // 九月节
    '霜降': { month: 10, day: 23 }, // 九月中
    
    // 冬季
    '立冬': { month: 11, day: 7 },  // 十月节
    '小雪': { month: 11, day: 22 }, // 十月中
    '大雪': { month: 12, day: 7 },  // 十一月节
    '冬至': { month: 12, day: 22 }, // 十一月中
    '小寒': { month: 1, day: 6 },   // 十二月节
    '大寒': { month: 1, day: 20 }   // 十二月中
  }
}



/**
 * 根据日期获取农历月份（基于节气）
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日
 * @returns {number} 农历月份 (1-12)
 */
function getLunarMonth(year, month, day) {
  const solarTerms = getSolarTerms(year)
  const targetDate = new Date(year, month - 1, day)
  
  // 检查各个节气
  if (targetDate >= new Date(year, solarTerms['立春'].month - 1, solarTerms['立春'].day) && 
      targetDate < new Date(year, solarTerms['惊蛰'].month - 1, solarTerms['惊蛰'].day)) {
    return 1 // 正月
  } else if (targetDate >= new Date(year, solarTerms['惊蛰'].month - 1, solarTerms['惊蛰'].day) && 
             targetDate < new Date(year, solarTerms['清明'].month - 1, solarTerms['清明'].day)) {
    return 2 // 二月
  } else if (targetDate >= new Date(year, solarTerms['清明'].month - 1, solarTerms['清明'].day) && 
             targetDate < new Date(year, solarTerms['立夏'].month - 1, solarTerms['立夏'].day)) {
    return 3 // 三月
  } else if (targetDate >= new Date(year, solarTerms['立夏'].month - 1, solarTerms['立夏'].day) && 
             targetDate < new Date(year, solarTerms['芒种'].month - 1, solarTerms['芒种'].day)) {
    return 4 // 四月
  } else if (targetDate >= new Date(year, solarTerms['芒种'].month - 1, solarTerms['芒种'].day) && 
             targetDate < new Date(year, solarTerms['小暑'].month - 1, solarTerms['小暑'].day)) {
    return 5 // 五月
  } else if (targetDate >= new Date(year, solarTerms['小暑'].month - 1, solarTerms['小暑'].day) && 
             targetDate < new Date(year, solarTerms['立秋'].month - 1, solarTerms['立秋'].day)) {
    return 6 // 六月
  } else if (targetDate >= new Date(year, solarTerms['立秋'].month - 1, solarTerms['立秋'].day) && 
             targetDate < new Date(year, solarTerms['白露'].month - 1, solarTerms['白露'].day)) {
    return 7 // 七月
  } else if (targetDate >= new Date(year, solarTerms['白露'].month - 1, solarTerms['白露'].day) && 
             targetDate < new Date(year, solarTerms['寒露'].month - 1, solarTerms['寒露'].day)) {
    return 8 // 八月
  } else if (targetDate >= new Date(year, solarTerms['寒露'].month - 1, solarTerms['寒露'].day) && 
             targetDate < new Date(year, solarTerms['立冬'].month - 1, solarTerms['立冬'].day)) {
    return 9 // 九月
  } else if (targetDate >= new Date(year, solarTerms['立冬'].month - 1, solarTerms['立冬'].day) && 
             targetDate < new Date(year, solarTerms['大雪'].month - 1, solarTerms['大雪'].day)) {
    return 10 // 十月
  } else if (targetDate >= new Date(year, solarTerms['大雪'].month - 1, solarTerms['大雪'].day) && 
             targetDate < new Date(year, solarTerms['小寒'].month - 1, solarTerms['小寒'].day)) {
    return 11 // 十一月
  } else {
    // 小寒到大寒
    return 12 // 十二月
  }
}

/**
 * 计算月干支
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日
 * @returns {string} 天干地支
 */
export function getMonthGanZhi(year, month, day) {
  // 获取农历月份
  const lunarMonth = getLunarMonth(year, month, day)
  
  // 首先获取年干
  const yearGanZhi = getYearGanZhi(year)
  const yearGan = yearGanZhi.gan

  // 年上起月表（五虎遁）
  // 甲己之年丙作首，乙庚之岁戊为头，丙辛必定寻庚上，丁壬壬位顺行流，更有戊癸何方发，甲寅之上好追求
  const monthGanMap = {
    '甲': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
    '乙': ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
    '丙': ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'],
    '丁': ['壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
    '戊': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙'],
    '己': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
    '庚': ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
    '辛': ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'],
    '壬': ['壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
    '癸': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙']
  }

  // 月支固定对应（寅月为农历一月）
  const monthZhi = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑']

  const gan = monthGanMap[yearGan][lunarMonth - 1]
  const zhi = monthZhi[lunarMonth - 1]

  return {
    gan: gan,
    zhi: zhi,
    ganZhi: gan + zhi
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
  // 使用基于公式的日柱计算方法
  // 1. 计算从1997年8月10日到目标日期的天数差
  const baseDate = new Date(1997, 7, 10) // 1997年8月10日
  const targetDate = new Date(year, month - 1, day)
  const timeDiff = targetDate.getTime() - baseDate.getTime()
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  
  // 2. 1997年8月10日是甲申日，对应的天干地支索引
  const baseGan = 0 // 甲
  const baseZhi = 8 // 申
  
  // 3. 计算目标日期的天干地支索引
  let ganIndex = (baseGan + daysDiff) % 10
  let zhiIndex = (baseZhi + daysDiff) % 12
  
  // 4. 处理负数情况
  if (ganIndex < 0) ganIndex += 10
  if (zhiIndex < 0) zhiIndex += 12
  
  return {
    gan: tianGan[ganIndex],
    zhi: diZhi[zhiIndex],
    ganZhi: tianGan[ganIndex] + diZhi[zhiIndex]
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
  const dayGan = dayGanZhi.gan

  // 时支固定对应
  // 子时: 23-1点, 丑时: 1-3点, 寅时: 3-5点, 卯时: 5-7点
  // 辰时: 7-9点, 巳时: 9-11点, 午时: 11-13点, 未时: 13-15点
  // 申时: 15-17点, 酉时: 17-19点, 戌时: 19-21点, 亥时: 21-23点
  let shiIndex = Math.floor((hour + 1) / 2) % 12
  if (hour === 23) {
    shiIndex = 0
  }

  // 日上起时表（五鼠遁）
  // 甲己还加甲，乙庚丙作初，丙辛从戊起，丁壬庚子居，戊癸何方发，壬子是真途
  const hourGanOffset = {
    '甲': 0, '乙': 2, '丙': 4, '丁': 6, '戊': 8,
    '己': 0, '庚': 2, '辛': 4, '壬': 6, '癸': 8
  }

  const ganIndex = (hourGanOffset[dayGan] + shiIndex) % 10
  const zhiIndex = shiIndex

  return {
    gan: tianGan[ganIndex],
    zhi: diZhi[zhiIndex],
    ganZhi: tianGan[ganIndex] + diZhi[zhiIndex]
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
  // 直接使用输入的日期计算八字
  // 注意：这里的日期应该是公历日期，因为前端界面使用的是公历日期选择器
  const yearGanZhi = getYearGanZhi(year)
  const monthGanZhi = getMonthGanZhi(year, month, day)
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
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}`
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
