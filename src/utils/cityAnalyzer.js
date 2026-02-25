/**
 * 城市分析工具
 * 用于动态生成城市的答案向量，分析城市特征
 */

// 城市特征数据库
const cityFeatures = {
  '北京': {
    climate: { temp: '四季分明', humidity: '干燥', airQuality: '一般' },
    economy: { industry: ['科技', '金融', '文化'], salary: '高', startup: '中等' },
    lifestyle: { pace: '快', commute: '长', nightlife: '中等' },
    culture: { people: '豪爽', social: '正式', dialect: '普通话为主' },
    temperament: { reputation: '政治文化中心', artistic: '中等', practical: '高' },
    cost: { housing: '高', consumption: '高' },
    food: { cuisine: '鲁菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '华北'
  },
  '上海': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['金融', '贸易', '科技'], salary: '高', startup: '高' },
    lifestyle: { pace: '快', commute: '长', nightlife: '丰富' },
    culture: { people: '精致', social: '开放', dialect: '上海话' },
    temperament: { reputation: '国际化大都市', artistic: '高', practical: '高' },
    cost: { housing: '高', consumption: '高' },
    food: { cuisine: '本帮菜', diversity: '极高' },
    wuxing: ['水', '金'],
    location: '华东'
  },
  '广州': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['贸易', '制造', '科技'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '丰富' },
    culture: { people: '务实', social: '热情', dialect: '粤语' },
    temperament: { reputation: '千年商都', artistic: '中等', practical: '高' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '粤菜', diversity: '高' },
    wuxing: ['火', '木'],
    location: '华南'
  },
  '深圳': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['科技', '金融', '制造'], salary: '高', startup: '高' },
    lifestyle: { pace: '快', commute: '中等', nightlife: '丰富' },
    culture: { people: '年轻', social: '开放', dialect: '普通话为主' },
    temperament: { reputation: '创新之城', artistic: '中等', practical: '高' },
    cost: { housing: '高', consumption: '中高' },
    food: { cuisine: '多元', diversity: '高' },
    wuxing: ['火', '木'],
    location: '华南'
  },
  '成都': {
    climate: { temp: '温和', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['科技', '制造', '旅游'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '丰富' },
    culture: { people: '悠闲', social: '热情', dialect: '四川话' },
    temperament: { reputation: '天府之国', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '川菜', diversity: '高' },
    wuxing: ['土', '水'],
    location: '西南'
  },
  '重庆': {
    climate: { temp: '炎热', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['制造', '金融', '科技'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '丰富' },
    culture: { people: '豪爽', social: '热情', dialect: '重庆话' },
    temperament: { reputation: '山城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '川菜', diversity: '高' },
    wuxing: ['火', '土'],
    location: '西南'
  },
  '杭州': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['互联网', '旅游', '科技'], salary: '中高', startup: '高' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '精致', social: '温和', dialect: '吴语' },
    temperament: { reputation: '人间天堂', artistic: '高', practical: '中等' },
    cost: { housing: '高', consumption: '中高' },
    food: { cuisine: '浙菜', diversity: '高' },
    wuxing: ['木', '水'],
    location: '华东'
  },
  '武汉': {
    climate: { temp: '炎热', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['制造', '科技', '教育'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '长', nightlife: '中等' },
    culture: { people: '直爽', social: '热情', dialect: '武汉话' },
    temperament: { reputation: '九省通衢', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '中等' },
    food: { cuisine: '鄂菜', diversity: '高' },
    wuxing: ['水', '火'],
    location: '华中'
  },
  '西安': {
    climate: { temp: '四季分明', humidity: '干燥', airQuality: '一般' },
    economy: { industry: ['文化', '旅游', '制造'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '传统', dialect: '陕西话' },
    temperament: { reputation: '古都', artistic: '高', practical: '中等' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '陕菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '西北'
  },
  '天津': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '金融', '港口'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '天津话' },
    temperament: { reputation: '北方港口城市', artistic: '中等', practical: '高' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '鲁菜', diversity: '高' },
    wuxing: ['水', '金'],
    location: '华北'
  },
  '苏州': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['制造', '科技', '旅游'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '精致', social: '温和', dialect: '吴语' },
    temperament: { reputation: '园林城市', artistic: '高', practical: '中等' },
    cost: { housing: '高', consumption: '中等' },
    food: { cuisine: '苏菜', diversity: '高' },
    wuxing: ['木', '水'],
    location: '华东'
  },
  '南京': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['科技', '教育', '制造'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '儒雅', social: '温和', dialect: '南京话' },
    temperament: { reputation: '六朝古都', artistic: '高', practical: '中等' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '苏菜', diversity: '高' },
    wuxing: ['土', '水'],
    location: '华东'
  },
  '郑州': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '物流', '贸易'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '河南话' },
    temperament: { reputation: '中原枢纽', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '豫菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '华中'
  },
  '长沙': {
    climate: { temp: '炎热', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['娱乐', '制造', '科技'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '丰富' },
    culture: { people: '直爽', social: '热情', dialect: '湖南话' },
    temperament: { reputation: '娱乐之都', artistic: '高', practical: '中等' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '湘菜', diversity: '高' },
    wuxing: ['火', '土'],
    location: '华中'
  },
  '东莞': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['制造', '科技', '贸易'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '短', nightlife: '丰富' },
    culture: { people: '务实', social: '热情', dialect: '粤语' },
    temperament: { reputation: '世界工厂', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '粤菜', diversity: '高' },
    wuxing: ['火', '木'],
    location: '华南'
  },
  '沈阳': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '重工业', '贸易'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '东北话' },
    temperament: { reputation: '东北中心', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '东北菜', diversity: '高' },
    wuxing: ['金', '水'],
    location: '东北'
  },
  '青岛': {
    climate: { temp: '凉爽', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['制造', '旅游', '港口'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '青岛话' },
    temperament: { reputation: '海滨城市', artistic: '中等', practical: '高' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '鲁菜', diversity: '高' },
    wuxing: ['水', '金'],
    location: '华东'
  },
  '合肥': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['科技', '制造', '教育'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '务实', social: '热情', dialect: '合肥话' },
    temperament: { reputation: '科技新城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '徽菜', diversity: '高' },
    wuxing: ['土', '木'],
    location: '华东'
  },
  '佛山': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['制造', '贸易', '旅游'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '短', nightlife: '丰富' },
    culture: { people: '务实', social: '热情', dialect: '粤语' },
    temperament: { reputation: '武术之乡', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '粤菜', diversity: '高' },
    wuxing: ['火', '木'],
    location: '华南'
  },
  '宁波': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['港口', '制造', '贸易'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '中等', commute: '短', nightlife: '中等' },
    culture: { people: '务实', social: '温和', dialect: '宁波话' },
    temperament: { reputation: '港口城市', artistic: '中等', practical: '高' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '浙菜', diversity: '高' },
    wuxing: ['水', '金'],
    location: '华东'
  },
  '昆明': {
    climate: { temp: '四季如春', humidity: '适中', airQuality: '好' },
    economy: { industry: ['旅游', '农业', '科技'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '温和', social: '热情', dialect: '云南话' },
    temperament: { reputation: '春城', artistic: '高', practical: '中等' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '滇菜', diversity: '高' },
    wuxing: ['木', '水'],
    location: '西南'
  },
  '大连': {
    climate: { temp: '凉爽', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['制造', '港口', '旅游'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '大连话' },
    temperament: { reputation: '滨海城市', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '中等' },
    food: { cuisine: '鲁菜', diversity: '高' },
    wuxing: ['水', '金'],
    location: '东北'
  },
  '厦门': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['旅游', '贸易', '科技'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '温和', social: '热情', dialect: '闽南语' },
    temperament: { reputation: '海上花园', artistic: '高', practical: '中等' },
    cost: { housing: '高', consumption: '中等' },
    food: { cuisine: '闽菜', diversity: '高' },
    wuxing: ['水', '木'],
    location: '华南'
  },
  '无锡': {
    climate: { temp: '四季分明', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['制造', '科技', '旅游'], salary: '中高', startup: '中等' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '精致', social: '温和', dialect: '吴语' },
    temperament: { reputation: '太湖明珠', artistic: '高', practical: '中等' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '苏菜', diversity: '高' },
    wuxing: ['木', '水'],
    location: '华东'
  },
  '福州': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['贸易', '制造', '科技'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '短', nightlife: '中等' },
    culture: { people: '温和', social: '热情', dialect: '福州话' },
    temperament: { reputation: '海滨城市', artistic: '中等', practical: '高' },
    cost: { housing: '中高', consumption: '中等' },
    food: { cuisine: '闽菜', diversity: '高' },
    wuxing: ['水', '木'],
    location: '华南'
  },
  '济南': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '金融', '教育'], salary: '中等', startup: '中等' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '济南话' },
    temperament: { reputation: '泉城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '鲁菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '华北'
  },
  '哈尔滨': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '重工业', '旅游'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '东北话' },
    temperament: { reputation: '冰城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '东北菜', diversity: '高' },
    wuxing: ['水', '金'],
    location: '东北'
  },
  '长春': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '汽车', '科技'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '东北话' },
    temperament: { reputation: '汽车城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '东北菜', diversity: '高' },
    wuxing: ['金', '水'],
    location: '东北'
  },
  '石家庄': {
    climate: { temp: '四季分明', humidity: '适中', airQuality: '一般' },
    economy: { industry: ['制造', '医药', '贸易'], salary: '中等', startup: '低' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '石家庄话' },
    temperament: { reputation: '华北枢纽', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '冀菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '华北'
  },
  '南宁': {
    climate: { temp: '温暖', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['贸易', '制造', '旅游'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '温和', social: '热情', dialect: '南宁话' },
    temperament: { reputation: '绿城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '桂菜', diversity: '高' },
    wuxing: ['木', '火'],
    location: '华南'
  },
  '太原': {
    climate: { temp: '四季分明', humidity: '干燥', airQuality: '一般' },
    economy: { industry: ['煤炭', '制造', '科技'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '太原话' },
    temperament: { reputation: '龙城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '晋菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '华北'
  },
  '贵阳': {
    climate: { temp: '凉爽', humidity: '湿润', airQuality: '好' },
    economy: { industry: ['旅游', '制造', '科技'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '短', nightlife: '中等' },
    culture: { people: '温和', social: '热情', dialect: '贵州话' },
    temperament: { reputation: '林城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '黔菜', diversity: '高' },
    wuxing: ['木', '水'],
    location: '西南'
  },
  '乌鲁木齐': {
    climate: { temp: '四季分明', humidity: '干燥', airQuality: '一般' },
    economy: { industry: ['能源', '贸易', '旅游'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '维吾尔语' },
    temperament: { reputation: '西域首府', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '新疆菜', diversity: '高' },
    wuxing: ['金', '土'],
    location: '西北'
  },
  '兰州': {
    climate: { temp: '四季分明', humidity: '干燥', airQuality: '一般' },
    economy: { industry: ['能源', '制造', '贸易'], salary: '中等', startup: '低' },
    lifestyle: { pace: '慢', commute: '中等', nightlife: '中等' },
    culture: { people: '豪爽', social: '热情', dialect: '兰州话' },
    temperament: { reputation: '黄河之都', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '陇菜', diversity: '高' },
    wuxing: ['土', '金'],
    location: '西北'
  },
  '南昌': {
    climate: { temp: '炎热', humidity: '湿润', airQuality: '一般' },
    economy: { industry: ['制造', '科技', '教育'], salary: '中等', startup: '低' },
    lifestyle: { pace: '中等', commute: '中等', nightlife: '中等' },
    culture: { people: '直爽', social: '热情', dialect: '南昌话' },
    temperament: { reputation: '英雄城', artistic: '中等', practical: '高' },
    cost: { housing: '中等', consumption: '低' },
    food: { cuisine: '赣菜', diversity: '高' },
    wuxing: ['火', '土'],
    location: '华东'
  }
}

/**
 * 动态生成城市的答案向量
 * @param {string} cityName - 城市名称
 * @returns {Object} 城市的答案向量
 */
export function generateCityAnswers(cityName) {
  const features = cityFeatures[cityName]
  if (!features) {
    return null
  }

  const answers = {}
  
  // 题1：理想的早晨
  if (features.lifestyle.pace === '慢' && features.climate.airQuality === '好') {
    answers[1] = 'A' // 自然唤醒型
  } else if (features.lifestyle.commute === '短') {
    answers[1] = 'B' // 便利启动型
  } else if (features.lifestyle.pace === '快') {
    answers[1] = 'C' // 效率优先型
  } else {
    answers[1] = 'D' // 夜猫子型
  }

  // 题2：工作日晚饭后
  if (features.lifestyle.pace === '慢') {
    answers[2] = 'A' // 宅家充电
  } else if (features.lifestyle.commute === '短') {
    answers[2] = 'B' // 附近溜达
  } else if (features.lifestyle.nightlife === '丰富') {
    answers[2] = 'C' // 社交时刻
  } else {
    answers[2] = 'D' // 继续搬砖
  }

  // 题3：对于排队
  if (features.lifestyle.pace === '快') {
    answers[3] = 'A' // 极度排斥
  } else if (features.food.diversity === '高') {
    answers[3] = 'B' // 看情况
  } else if (features.culture.social === '热情') {
    answers[3] = 'C' // 愿意尝试
  } else {
    answers[3] = 'D' // 绝不排队
  }

  // 题4：周末最理想的打开方式
  if (features.climate.airQuality === '好') {
    answers[4] = 'A' // 自然疗愈
  } else if (features.temperament.artistic === '高') {
    answers[4] = 'B' // 城市探索
  } else if (features.lifestyle.pace === '慢') {
    answers[4] = 'C' // 躺平休息
  } else {
    answers[4] = 'D' // 社交聚会
  }

  // 题5：单程通勤极限
  if (features.lifestyle.commute === '短') {
    answers[5] = 'A' // 30分钟以内
  } else if (features.lifestyle.commute === '中等') {
    answers[5] = 'B' // 45分钟左右
  } else if (features.lifestyle.commute === '长') {
    answers[5] = 'C' // 1小时左右
  } else {
    answers[5] = 'D' // 1.5小时以上
  }

  // 题6：职业形态
  if (features.economy.industry.includes('科技') && features.economy.startup === '高') {
    answers[6] = 'D' // 创业折腾型
  } else if (features.economy.industry.includes('金融') || features.economy.industry.includes('科技')) {
    answers[6] = 'A' // 平台依附型
  } else if (features.economy.industry.includes('文化') || features.economy.industry.includes('旅游')) {
    answers[6] = 'B' // 技能独立型
  } else {
    answers[6] = 'C' // 资源关系型
  }

  // 题7：职业发展
  if (features.economy.salary === '高' && features.economy.startup === '高') {
    answers[7] = 'D' // 财务爆发
  } else if (features.economy.salary === '高') {
    answers[7] = 'B' // 成长和空间
  } else if (features.lifestyle.pace === '慢') {
    answers[7] = 'C' // 平衡和自由
  } else {
    answers[7] = 'A' // 稳定和安全
  }

  // 题8：对搞钱的渴望
  if (features.economy.salary === '高' && features.economy.startup === '高') {
    answers[8] = 'A' // 极强
  } else if (features.economy.salary === '中高') {
    answers[8] = 'B' // 中等
  } else if (features.lifestyle.pace === '慢') {
    answers[8] = 'C' // 够用就行
  } else {
    answers[8] = 'D' // 随缘
  }

  // 题9：买房/租房
  if (features.cost.housing === '高') {
    answers[9] = 'B' // 看情况
  } else if (features.cost.housing === '中等') {
    answers[9] = 'A' // 必须买房
  } else {
    answers[9] = 'C' // 长期租房
  }

  // 题10：闲钱用途
  if (features.economy.startup === '高') {
    answers[10] = 'D' // 创业/投资朋友
  } else if (features.economy.industry.includes('科技') || features.economy.industry.includes('金融')) {
    answers[10] = 'C' // 投资房产/理财
  } else if (features.temperament.artistic === '高') {
    answers[10] = 'B' // 投资自己
  } else {
    answers[10] = 'A' // 存银行/理财
  }

  // 题11：与亲友的关系
  if (features.culture.social === '传统') {
    answers[11] = 'A' // 深度绑定
  } else if (features.culture.social === '热情') {
    answers[11] = 'B' // 定期联系
  } else if (features.culture.social === '开放') {
    answers[11] = 'C' // 各自安好
  } else {
    answers[11] = 'D' // 想要逃离
  }

  // 题12：交新朋友的能力
  if (features.culture.social === '热情') {
    answers[12] = 'C' // 主动出击型
  } else if (features.culture.social === '温和') {
    answers[12] = 'B' // 被动社交型
  } else if (features.culture.social === '开放') {
    answers[12] = 'C' // 主动出击型
  } else {
    answers[12] = 'A' // 社恐型
  }

  // 题13：邻里/社区关系
  if (features.culture.social === '热情') {
    answers[13] = 'C' // 热热闹闹
  } else if (features.culture.social === '温和') {
    answers[13] = 'B' // 适度友好
  } else if (features.culture.social === '开放') {
    answers[13] = 'D' // 兴趣圈子
  } else {
    answers[13] = 'A' // 互不打扰
  }

  // 题14：孤独感
  if (features.culture.social === '热情') {
    answers[14] = 'B' // 偶尔会
  } else if (features.lifestyle.pace === '慢') {
    answers[14] = 'C' // 享受独处
  } else if (features.culture.social === '开放') {
    answers[14] = 'B' // 偶尔会
  } else {
    answers[14] = 'A' // 很难忍受
  }

  // 题15：未来的伴侣/家庭生活
  if (features.cost.housing === '高') {
    answers[15] = 'B' // 二人世界
  } else if (features.cost.housing === '中等' && features.economy.salary === '中等') {
    answers[15] = 'C' // 有娃家庭
  } else if (features.lifestyle.pace === '快') {
    answers[15] = 'D' // 丁克/晚育
  } else {
    answers[15] = 'A' // 单身万岁
  }

  // 题16：对冷热的耐受度
  if (features.climate.temp === '炎热') {
    answers[16] = 'B' // 极度怕热
  } else if (features.climate.temp === '四季分明' && features.location === '东北') {
    answers[16] = 'A' // 极度怕冷
  } else if (features.climate.temp === '四季分明') {
    answers[16] = 'C' // 四季分明党
  } else {
    answers[16] = 'D' // 无所谓
  }

  // 题17：天气偏好
  if (features.climate.airQuality === '好') {
    answers[17] = 'A' // 阳光控
  } else if (features.climate.humidity === '湿润') {
    answers[17] = 'B' // 雨雪控
  } else if (features.climate.temp === '四季如春') {
    answers[17] = 'C' // 温和派
  } else {
    answers[17] = 'D' // 没感觉
  }

  // 题18：空气质量敏感
  if (features.climate.airQuality === '好') {
    answers[18] = 'A' // 非常敏感
  } else if (features.climate.airQuality === '一般') {
    answers[18] = 'B' // 一般敏感
  } else {
    answers[18] = 'C' // 不敏感
  }

  // 题19：自然景观偏好
  if (cityName === '青岛' || cityName === '大连' || cityName === '厦门' || cityName === '宁波' || cityName === '福州') {
    answers[19] = 'A' // 山海控
  } else if (cityName === '杭州' || cityName === '苏州' || cityName === '昆明' || cityName === '贵阳') {
    answers[19] = 'B' // 山川控
  } else if (cityName === '北京' || cityName === '上海' || cityName === '深圳' || cityName === '广州') {
    answers[19] = 'C' // 城市控
  } else {
    answers[19] = 'D' // 平原控
  }

  // 题20：干燥/潮湿适应力
  if (features.climate.humidity === '干燥') {
    answers[20] = 'B' // 怕干燥
  } else if (features.climate.humidity === '湿润') {
    answers[20] = 'A' // 怕潮湿
  } else {
    answers[20] = 'C' // 都能适应
  }

  // 题21：饮食习惯
  if (cityName === '成都' || cityName === '重庆' || cityName === '长沙' || cityName === '贵阳') {
    answers[21] = 'B' // 重口味党
  } else if (cityName === '广州' || cityName === '厦门' || cityName === '福州') {
    answers[21] = 'C' // 清淡党
  } else if (cityName === '上海' || cityName === '深圳' || cityName === '北京') {
    answers[21] = 'D' // 国际胃
  } else {
    answers[21] = 'A' // 故乡胃
  }

  // 题22：对吃的重视程度
  if (cityName === '成都' || cityName === '广州' || cityName === '长沙' || cityName === '重庆') {
    answers[22] = 'A' // 美食至上
  } else if (features.food.diversity === '高') {
    answers[22] = 'B' // 比较讲究
  } else {
    answers[22] = 'C' // 一般般
  }

  // 题23：夜生活需求
  if (cityName === '成都' || cityName === '重庆' || cityName === '长沙' || cityName === '深圳' || cityName === '广州') {
    answers[23] = 'A' // 必须丰富
  } else if (features.lifestyle.nightlife === '中等') {
    answers[23] = 'B' // 偶尔有就行
  } else if (features.lifestyle.pace === '慢') {
    answers[23] = 'C' // 不需要
  } else {
    answers[23] = 'D' // 宅家夜生活
  }

  // 题24：购物方式
  if (features.cost.consumption === '低') {
    answers[24] = 'A' // 下楼即达
  } else if (features.culture.practical === '高') {
    answers[24] = 'B' // 周末采购
  } else if (features.economy.salary === '高') {
    answers[24] = 'D' // 逛街体验
  } else {
    answers[24] = 'C' // 网购为主
  }

  // 题25：交通出行偏好
  if (cityName === '北京' || cityName === '上海' || cityName === '广州' || cityName === '深圳') {
    answers[25] = 'A' // 地铁/公交党
  } else if (cityName === '成都' || cityName === '重庆' || cityName === '武汉' || cityName === '郑州') {
    answers[25] = 'B' // 自驾党
  } else if (cityName === '杭州' || cityName === '苏州' || cityName === '厦门') {
    answers[25] = 'C' // 骑行/步行党
  } else {
    answers[25] = 'D' // 混合党
  }

  // 题26：人生阶段
  if (cityName === '深圳' || cityName === '上海' || cityName === '北京') {
    answers[26] = 'A' // 刚毕业/职场新人
  } else if (cityName === '广州' || cityName === '杭州' || cityName === '武汉' || cityName === '南京') {
    answers[26] = 'B' // 职场中坚
  } else if (cityName === '成都' || cityName === '西安' || cityName === '郑州' || cityName === '长沙') {
    answers[26] = 'C' // 成家立业期
  } else {
    answers[26] = 'D' // 中年/成熟期
  }

  // 题27：对未来的确定性需求
  if (cityName === '北京' || cityName === '西安' || cityName === '郑州') {
    answers[27] = 'A' // 高度确定
  } else if (cityName === '广州' || cityName === '武汉' || cityName === '苏州' || cityName === '南京') {
    answers[27] = 'B' // 中等确定
  } else if (cityName === '深圳' || cityName === '上海') {
    answers[27] = 'C' // 拥抱变化
  } else {
    answers[27] = 'D' // 随遇而安
  }

  // 题28：欣赏的城市气质
  if (cityName === '上海' || cityName === '杭州' || cityName === '苏州' || cityName === '厦门') {
    answers[28] = 'A' // 精致小资
  } else if (cityName === '北京' || cityName === '西安' || cityName === '大连' || cityName === '哈尔滨') {
    answers[28] = 'B' // 豪爽大气
  } else if (cityName === '广州' || cityName === '成都' || cityName === '重庆' || cityName === '郑州') {
    answers[28] = 'C' // 务实接地气
  } else {
    answers[28] = 'D' // 文艺清新
  }

  // 题29：语言沟通问题
  if (cityName === '北京' || cityName === '深圳') {
    answers[29] = 'A' // 非常介意
  } else if (cityName === '上海' || cityName === '杭州' || cityName === '苏州') {
    answers[29] = 'B' // 有点介意
  } else if (cityName === '广州' || cityName === '厦门' || cityName === '成都' || cityName === '重庆') {
    answers[29] = 'C' // 不介意
  } else {
    answers[29] = 'D' // 觉得有意思
  }

  // 题30：理想中的家
  if (cityName === '北京' || cityName === '上海' || cityName === '深圳' || cityName === '广州') {
    answers[30] = 'A' // 机会之城
  } else if (cityName === '成都' || cityName === '重庆' || cityName === '西安' || cityName === '长沙') {
    answers[30] = 'B' // 安逸之都
  } else if (cityName === '杭州' || cityName === '苏州' || cityName === '厦门' || cityName === '昆明') {
    answers[30] = 'C' // 理想之地
  } else {
    answers[30] = 'D' // 自由之境
  }

  return answers
}

/**
 * 计算八字能量匹配得分
 * @param {Array} userWuxing - 用户五行喜用神
 * @param {string} cityName - 城市名称
 * @returns {Object} 能量匹配结果
 */
export function calculateEnergyMatch(userWuxing, cityName) {
  const city = cityFeatures[cityName]
  if (!city || !city.wuxing) {
    return { score: 0, reasons: [] }
  }

  let score = 0
  const reasons = []

  // 计算五行匹配度
  if (userWuxing && userWuxing.dominant) {
    userWuxing.dominant.forEach((element, index) => {
      if (city.wuxing.includes(element)) {
        // 优先级评分，第一个元素权重最高
        const elementScore = (userWuxing.dominant.length - index) * 2
        score += elementScore
        reasons.push(`八字喜${element}，${cityName}属于${element}旺城市`)
      }
    })
  }

  // 归一化到0-10分
  const maxPossibleScore = userWuxing && userWuxing.dominant ? userWuxing.dominant.length * 2 : 10
  const normalizedScore = Math.min((score / maxPossibleScore) * 10, 10)

  return {
    score: normalizedScore,
    reasons: reasons
  }
}

/**
 * 计算综合匹配得分
 * @param {Array} userAnswers - 用户答案
 * @param {Array} userWuxing - 用户五行喜用神
 * @param {string} cityName - 城市名称
 * @returns {Object} 综合匹配结果
 */
export function calculateComprehensiveMatch(userAnswers, userWuxing, cityName) {
  // 生成城市答案向量
  const cityAnswers = generateCityAnswers(cityName)
  if (!cityAnswers) {
    return null
  }

  // 计算生活方式匹配
  const lifeMatch = calculateCityMatch(userAnswers, cityAnswers)
  
  // 计算八字能量匹配
  const energyMatch = calculateEnergyMatch(userWuxing, cityName)
  
  // 综合得分（权重可调整）
  const totalScore = (lifeMatch.score * 0.5) + (energyMatch.score * 0.5)
  
  return {
    cityName: cityName,
    totalScore: totalScore,
    lifeMatch: lifeMatch,
    energyMatch: energyMatch,
    cityFeatures: cityFeatures[cityName]
  }
}

/**
 * 获取所有城市的综合匹配结果
 * @param {Array} userAnswers - 用户答案
 * @param {Array} userWuxing - 用户五行喜用神
 * @returns {Array} 排序后的城市匹配结果
 */
export function getCityRecommendations(userAnswers, userWuxing) {
  const results = []
  
  for (const cityName in cityFeatures) {
    const matchResult = calculateComprehensiveMatch(userAnswers, userWuxing, cityName)
    if (matchResult) {
      results.push(matchResult)
    }
  }
  
  // 按综合得分降序排序
  results.sort((a, b) => b.totalScore - a.totalScore)
  
  // 返回前5名
  return results.slice(0, 5)
}

/**
 * 计算用户答案与城市答案的匹配度
 * @param {Array} userAnswers - 用户答案
 * @param {Object} cityAnswers - 城市答案
 * @returns {Object} 匹配度结果
 */
export function calculateCityMatch(userAnswers, cityAnswers) {
  let score = 0
  let matchCount = 0
  const matchedQuestions = []

  // 构建用户答案映射
  const userAnswerMap = {}
  userAnswers.forEach(answer => {
    userAnswerMap[answer.questionId] = answer.option
  })

  // 计算匹配度
  for (let qid = 1; qid <= 30; qid++) {
    if (userAnswerMap[qid] && cityAnswers[qid]) {
      if (userAnswerMap[qid] === cityAnswers[qid]) {
        matchCount++
        score += 1
        matchedQuestions.push(qid)
      }
    }
  }

  // 归一化到0-10分
  const normalizedScore = (score / 30) * 10
  const matchPercentage = Math.round((matchCount / 30) * 100)

  return {
    score: normalizedScore,
    matchCount: matchCount,
    matchPercentage: matchPercentage,
    matchedQuestions: matchedQuestions
  }
}

/**
 * 获取城市特征描述
 * @param {string} cityName - 城市名称
 * @returns {Object} 城市特征描述
 */
export function getCityFeatures(cityName) {
  return cityFeatures[cityName]
}
