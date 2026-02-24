/**
 * 八字分析工具
 * 用于分析用户的生辰八字，确定喜用神
 */

// 天干地支表
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

// 五行对应关系
const WU_XING = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水'
}

const DI_ZHI_WU_XING = {
  '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
  '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
}

// 季节五行
const SEASON_WU_XING = {
  1: '水', 2: '木', 3: '木', 4: '木', 5: '火', 6: '火',
  7: '火', 8: '金', 9: '金', 10: '金', 11: '水', 12: '水'
}

/**
 * 简化的八字分析
 * @param {Object} birthInfo - 出生信息
 * @param {number} birthInfo.year - 年份
 * @param {number} birthInfo.month - 月份
 * @param {number} birthInfo.day - 日期
 * @param {number} birthInfo.hour - 小时
 * @returns {Object} 八字分析结果
 */
export function analyzeBaZi(birthInfo) {
  try {
    const { year, month, day, hour } = birthInfo
    
    // 计算季节五行
    const seasonWuXing = SEASON_WU_XING[month]
    
    // 简化计算日干（实际需要精确的农历转换，这里使用简化算法）
    // 基于公历日期的简单映射
    const dayIndex = (year + month * 30 + day) % 10
    const dayGan = TIAN_GAN[dayIndex]
    const dayWuXing = WU_XING[dayGan]
    
    // 计算小时五行
    const hourIndex = hour % 12
    const hourZhi = DI_ZHI[hourIndex]
    const hourWuXing = DI_ZHI_WU_XING[hourZhi]
    
    // 简化的喜用神分析
    let recommendedElements = []
    
    // 基于季节和日干的简单分析
    if (seasonWuXing === '火' && dayWuXing === '木') {
      // 夏季木被火泄，需要水
      recommendedElements = ['水']
    } else if (seasonWuXing === '水' && dayWuXing === '火') {
      // 冬季火被水克，需要火或土
      recommendedElements = ['火', '土']
    } else if (seasonWuXing === '金' && dayWuXing === '木') {
      // 秋季木被金克，需要火或水
      recommendedElements = ['火', '水']
    } else if (seasonWuXing === '木' && dayWuXing === '土') {
      // 春季土被木克，需要火或土
      recommendedElements = ['火', '土']
    } else if (seasonWuXing === '土' && dayWuXing === '水') {
      // 季末土克水，需要金或木
      recommendedElements = ['金', '木']
    } else {
      // 其他情况，推荐平衡五行
      const allElements = ['金', '木', '水', '火', '土']
      const currentElements = [seasonWuXing, dayWuXing, hourWuXing]
      recommendedElements = allElements.filter(el => !currentElements.includes(el))
    }
    
    return {
      success: true,
      data: {
        season: month,
        seasonWuXing: seasonWuXing,
        dayGan: dayGan,
        dayWuXing: dayWuXing,
        hourZhi: hourZhi,
        hourWuXing: hourWuXing,
        recommendedElements: recommendedElements.slice(0, 2), // 最多推荐两个
        disclaimer: '此分析为简化版，仅供参考。精准八字分析请咨询专业命理师。'
      }
    }
  } catch (error) {
    return {
      success: false,
      error: '八字分析失败，请检查输入数据'
    }
  }
}

/**
 * 计算城市与八字的能量匹配度
 * @param {string} cityName - 城市名称
 * @param {Array} recommendedElements - 推荐五行
 * @returns {Object} 能量匹配度
 */
export function calculateEnergyMatch(cityName, recommendedElements) {
  // 城市五行属性映射
  const cityWuXingMap = {
    // 火属性城市
    '广州': ['火'],
    '深圳': ['火'],
    '厦门': ['火'],
    '长沙': ['火'],
    '杭州': ['火', '木'],
    '海口': ['火'],
    '三亚': ['火'],
    
    // 水属性城市
    '上海': ['水'],
    '青岛': ['水'],
    '大连': ['水'],
    '武汉': ['水'],
    '南京': ['水'],
    '重庆': ['水', '火'],
    '宁波': ['水'],
    '福州': ['水'],
    
    // 木属性城市
    '杭州': ['木', '火'],
    '苏州': ['木'],
    '昆明': ['木'],
    '贵阳': ['木'],
    '南宁': ['木'],
    
    // 金属性城市
    '西安': ['金', '土'],
    '成都': ['金', '土'],
    '沈阳': ['金'],
    '乌鲁木齐': ['金'],
    '太原': ['金'],
    
    // 土属性城市
    '北京': ['土'],
    '郑州': ['土'],
    '西安': ['土', '金'],
    '成都': ['土', '金'],
    '重庆': ['土', '火']
  }
  
  const cityElements = cityWuXingMap[cityName] || []
  let score = 0
  const reasons = []
  
  recommendedElements.forEach((element, index) => {
    if (cityElements.includes(element)) {
      // 第一个元素权重更高
      const elementScore = (recommendedElements.length - index) * 5
      score += elementScore
      reasons.push(`八字喜${element}，${cityName}属于${element}旺城市`)
    }
  })
  
  // 归一化到0-10分
  const maxScore = recommendedElements.length * 5
  const normalizedScore = maxScore > 0 ? Math.min(10, (score / maxScore) * 10) : 0
  
  return {
    score: normalizedScore,
    reasons: reasons
  }
}
