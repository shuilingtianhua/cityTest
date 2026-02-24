/**
 * 城市数据 - 城市推荐结果
 */

export const cities = {
  "北京": {
    tags: [
      "four_seasons", "fast_pace", "culture", "economy",
      "art_museum", "high_cost", "bustling", "traditional_food",
      "top_education", "public_transport", "metropolis"
    ],
    wuxing: ["金", "水"],
    climate: "四季分明，夏季炎热，冬季寒冷",
    description: "中国的首都，政治文化中心。这里有深厚的历史底蕴、顶级的学府和丰富的文化资源。适合追求文化熏陶、学术氛围和职业发展的人群。",
    advantages: [
      "教育资源全国顶尖",
      "文化活动丰富多彩",
      "职业发展机会多",
      "公共交通发达"
    ],
    disadvantages: [
      "房价物价较高",
      "交通拥堵",
      "空气质量不稳定"
    ],
    image: "🏛️",
    emoji: "🐉",
    answers: {
      1: "B", // 便利启动型
      2: "B", // 附近溜达
      3: "B", // 看情况
      4: "B", // 城市探索
      5: "C", // 1小时左右
      6: "A", // 平台依附型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "A", // 必须买房
      10: "A", // 存银行/理财
      11: "A", // 深度绑定
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "B", // 偶尔会
      15: "B", // 二人世界
      16: "C", // 四季分明党
      17: "A", // 阳光控
      18: "B", // 一般敏感
      19: "C", // 城市控
      20: "C", // 都能适应
      21: "A", // 故乡胃
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "B", // 职场中坚
      27: "B", // 中等确定
      28: "B", // 豪爽大气
      29: "A", // 非常介意
      30: "A"  // 机会之城
    }
  },
  "上海": {
    tags: [
      "four_seasons", "fast_pace", "economy", "innovation",
      "shopping_food", "high_cost", "international", "international_food",
      "top_education", "public_transport", "metropolis"
    ],
    wuxing: ["金", "水"],
    climate: "亚热带季风气候，四季分明，夏季炎热",
    description: "国际化大都市，中国经济中心。这里融合了东西方文化，既有现代摩天大楼，又有老上海风情。适合追求国际化视野、商业机会和时尚生活的人群。",
    advantages: [
      "国际化程度高",
      "商业机会丰富",
      "购物美食天堂",
      "文化生活多元"
    ],
    disadvantages: [
      "生活成本很高",
      "竞争激烈压力大",
      "冬天湿冷"
    ],
    image: "🌆",
    emoji: "🏙️",
    answers: {
      1: "C", // 效率优先型
      2: "C", // 社交时刻
      3: "B", // 看情况
      4: "B", // 城市探索
      5: "C", // 1小时左右
      6: "A", // 平台依附型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "B", // 看情况
      10: "C", // 投资房产/理财
      11: "C", // 各自安好
      12: "C", // 主动出击型
      13: "A", // 互不打扰
      14: "C", // 享受独处
      15: "D", // 丁克/晚育
      16: "C", // 四季分明党
      17: "A", // 阳光控
      18: "B", // 一般敏感
      19: "A", // 山海控
      20: "A", // 怕潮湿
      21: "D", // 国际胃
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "B", // 职场中坚
      27: "C", // 拥抱变化
      28: "A", // 精致小资
      29: "B", // 有点介意
      30: "A"  // 机会之城
    }
  },
  "广州": {
    tags: [
      "warm_humid", "medium_pace", "economy", "culture",
      "shopping_food", "medium_cost", "friendly", "traditional_food",
      "basic_education", "public_transport", "historic"
    ],
    wuxing: ["火", "木"],
    climate: "亚热带气候，温暖湿润，夏季长",
    description: "千年商都，岭南文化中心。这里气候宜人，美食丰富，生活节奏相对舒适。适合喜欢美食、温和气候和务实文化的人群。",
    advantages: [
      "美食之都，早茶文化",
      "气候温暖湿润",
      "生活成本相对适中",
      "包容性强"
    ],
    disadvantages: [
      "夏季炎热潮湿",
      "台风影响",
      "教育医疗资源相对较少"
    ],
    image: "🍜",
    emoji: "🥟",
    answers: {
      1: "B", // 便利启动型
      2: "C", // 社交时刻
      3: "C", // 愿意尝试
      4: "B", // 城市探索
      5: "B", // 45分钟左右
      6: "C", // 资源关系型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "C", // 主动出击型
      13: "C", // 热热闹闹
      14: "B", // 偶尔会
      15: "C", // 有娃家庭
      16: "A", // 极度怕冷
      17: "B", // 雨雪控
      18: "B", // 一般敏感
      19: "A", // 山海控
      20: "B", // 怕干燥
      21: "A", // 故乡胃
      22: "A", // 美食至上
      23: "A", // 必须丰富
      24: "A", // 下楼即达
      25: "A", // 地铁/公交党
      26: "B", // 职场中坚
      27: "C", // 拥抱变化
      28: "C", // 务实接地气
      29: "C", // 不介意
      30: "B"  // 安逸之都
    }
  },
  "深圳": {
    tags: [
      "warm_humid", "fast_pace", "innovation", "economy",
      "shopping_food", "high_cost", "international", "casual_food",
      "top_education", "car_friendly", "metropolis"
    ],
    wuxing: ["火", "木"],
    climate: "亚热带海洋性气候，温暖湿润",
    description: "科技之都，改革开放的前沿。这里创新氛围浓厚，年轻活力四射。适合追求科技创业、拥抱变化和渴望快速成长的人群。",
    advantages: [
      "科技产业发达",
      "年轻人聚集，活力强",
      "创新氛围浓厚",
      "气候温暖"
    ],
    disadvantages: [
      "房价极高",
      "文化底蕴相对薄弱",
      "工作压力大"
    ],
    image: "💻",
    emoji: "🚀",
    answers: {
      1: "C", // 效率优先型
      2: "D", // 继续搬砖
      3: "A", // 极度排斥
      4: "B", // 城市探索
      5: "B", // 45分钟左右
      6: "D", // 创业折腾型
      7: "D", // 财务爆发
      8: "A", // 极强
      9: "B", // 看情况
      10: "D", // 创业/投资朋友
      11: "C", // 各自安好
      12: "C", // 主动出击型
      13: "A", // 互不打扰
      14: "C", // 享受独处
      15: "D", // 丁克/晚育
      16: "A", // 极度怕冷
      17: "A", // 阳光控
      18: "B", // 一般敏感
      19: "C", // 城市控
      20: "B", // 怕干燥
      21: "D", // 国际胃
      22: "B", // 比较讲究
      23: "A", // 必须丰富
      24: "C", // 网购为主
      25: "B", // 自驾党
      26: "A", // 刚毕业/职场新人
      27: "C", // 拥抱变化
      28: "A", // 精致小资
      29: "A", // 非常介意
      30: "A"  // 机会之城
    }
  },
  "杭州": {
    tags: [
      "four_seasons", "medium_pace", "culture", "nature",
      "outdoor", "medium_cost", "friendly", "healthy_food",
      "top_education", "bike_friendly", "pastoral"
    ],
    wuxing: ["木", "水"],
    climate: "亚热带季风气候，四季分明",
    description: "人间天堂，风景秀丽的城市。西湖美景、互联网产业、宜人气候完美结合。适合追求品质生活、热爱自然和享受慢生活的人群。",
    advantages: [
      "自然环境优美",
      "互联网产业发达",
      "生活品质高",
      "历史文化深厚"
    ],
    disadvantages: [
      "房价较高",
      "交通拥堵",
      "夏季炎热"
    ],
    image: "🌸",
    emoji: "🏞️",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "C", // 各自安好
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "B", // 二人世界
      16: "C", // 四季分明党
      17: "B", // 雨雪控
      18: "A", // 非常敏感
      19: "A", // 山海控
      20: "B", // 怕干燥
      21: "C", // 清淡党
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "C", // 骑行/步行党
      26: "B", // 职场中坚
      27: "B", // 中等确定
      28: "A", // 精致小资
      29: "B", // 有点介意
      30: "C"  // 理想之地
    }
  },
  "成都": {
    tags: [
      "four_seasons", "slow_pace", "culture", "nature",
      "shopping_food", "low_cost", "friendly", "traditional_food",
      "basic_education", "car_friendly", "pastoral"
    ],
    wuxing: ["土", "水"],
    climate: "亚热带湿润气候，四季温和",
    description: "天府之国，悠闲自在的城市。这里美食遍地，生活节奏慢，幸福感强。适合追求慢生活、美食享受和轻松氛围的人群。",
    advantages: [
      "生活节奏慢，幸福感强",
      "美食丰富多样",
      "生活成本较低",
      "包容性强"
    ],
    disadvantages: [
      "职业机会相对较少",
      "冬天阴雨多",
      "夏天闷热"
    ],
    image: "🐼",
    emoji: "🌶️",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "C", // 愿意尝试
      4: "C", // 躺平休息
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "C", // 够用就行
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "B", // 被动社交型
      13: "C", // 热热闹闹
      14: "D", // 有宠物就够了
      15: "C", // 有娃家庭
      16: "D", // 无所谓
      17: "B", // 雨雪控
      18: "B", // 一般敏感
      19: "B", // 山川控
      20: "B", // 怕干燥
      21: "B", // 重口味党
      22: "A", // 美食至上
      23: "A", // 必须丰富
      24: "A", // 下楼即达
      25: "B", // 自驾党
      26: "C", // 成家立业期
      27: "B", // 中等确定
      28: "C", // 务实接地气
      29: "C", // 不介意
      30: "B"  // 安逸之都
    }
  },
  "重庆": {
    tags: [
      "four_seasons", "medium_pace", "economy", "culture",
      "shopping_food", "low_cost", "friendly", "traditional_food",
      "basic_education", "car_friendly", "historic"
    ],
    wuxing: ["火", "土"],
    climate: "亚热带季风气候，夏季炎热",
    description: "山城，立体魔幻的城市。这里地形独特，美食火辣，活力十足。适合喜欢独特地形、辣味美食和挑战的人群。",
    advantages: [
      "地形独特，城市景观好",
      "美食丰富火辣",
      "生活成本较低",
      "年轻人多"
    ],
    disadvantages: [
      "夏季炎热",
      "地形复杂出行不便",
      "空气质量不稳定"
    ],
    image: "🌶️",
    emoji: "🏔️",
    answers: {
      1: "B", // 便利启动型
      2: "C", // 社交时刻
      3: "C", // 愿意尝试
      4: "B", // 城市探索
      5: "B", // 45分钟左右
      6: "D", // 创业折腾型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "B", // 看情况
      10: "C", // 投资房产/理财
      11: "B", // 定期联系
      12: "C", // 主动出击型
      13: "C", // 热热闹闹
      14: "B", // 偶尔会
      15: "C", // 有娃家庭
      16: "A", // 极度怕冷
      17: "B", // 雨雪控
      18: "B", // 一般敏感
      19: "B", // 山川控
      20: "B", // 怕干燥
      21: "B", // 重口味党
      22: "A", // 美食至上
      23: "A", // 必须丰富
      24: "A", // 下楼即达
      25: "B", // 自驾党
      26: "C", // 成家立业期
      27: "C", // 拥抱变化
      28: "C", // 务实接地气
      29: "C", // 不介意
      30: "B"  // 安逸之都
    }
  },
  "武汉": {
    tags: [
      "four_seasons", "fast_pace", "economy", "culture",
      "shopping_food", "medium_cost", "friendly", "traditional_food",
      "top_education", "public_transport", "metropolis"
    ],
    wuxing: ["水", "火"],
    climate: "亚热带季风气候，夏季高温闷热，冬季湿冷",
    description: "长江与汉江交汇的中部核心城市，高校云集、科创活跃。",
    advantages: [
      "区位交通枢纽地位突出",
      "高等教育与科研力量强",
      "美食丰富，物价相对适中"
    ],
    disadvantages: [
      "夏季酷热，体感闷",
      "雨雪天气湿冷"
    ],
    image: "🌉",
    emoji: "🐟",
    answers: {
      1: "B", // 便利启动型
      2: "B", // 附近溜达
      3: "B", // 看情况
      4: "B", // 城市探索
      5: "C", // 1小时左右
      6: "A", // 平台依附型
      7: "B", // 成长和空间
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "B", // 偶尔会
      15: "C", // 有娃家庭
      16: "A", // 极度怕冷
      17: "B", // 雨雪控
      18: "B", // 一般敏感
      19: "A", // 山海控
      20: "B", // 怕干燥
      21: "B", // 重口味党
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "B", // 职场中坚
      27: "B", // 中等确定
      28: "C", // 务实接地气
      29: "B", // 有点介意
      30: "A"  // 机会之城
    }
  },
  "西安": {
    tags: [
      "four_seasons", "medium_pace", "culture", "economy",
      "art_museum", "low_cost", "friendly", "traditional_food",
      "top_education", "public_transport", "historic"
    ],
    wuxing: ["土", "金"],
    climate: "温带季风气候，四季分明",
    description: "古都长安，十三朝古都。这里历史遗迹众多，文化底蕴深厚，生活成本适中。适合热爱历史文化、喜欢古典氛围的人群。",
    advantages: [
      "历史文化深厚",
      "教育实力强",
      "生活成本适中",
      "旅游资源丰富"
    ],
    disadvantages: [
      "经济发展相对较慢",
      "空气质量一般",
      "冬季较冷"
    ],
    image: "🏯",
    emoji: "🦁",
    answers: {
      1: "B", // 便利启动型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "B", // 城市探索
      5: "B", // 45分钟左右
      6: "A", // 平台依附型
      7: "A", // 稳定和安全
      8: "C", // 够用就行
      9: "A", // 必须买房
      10: "A", // 存银行/理财
      11: "A", // 深度绑定
      12: "B", // 被动社交型
      13: "C", // 热热闹闹
      14: "B", // 偶尔会
      15: "C", // 有娃家庭
      16: "C", // 四季分明党
      17: "A", // 阳光控
      18: "B", // 一般敏感
      19: "C", // 城市控
      20: "A", // 怕潮湿
      21: "A", // 故乡胃
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "C", // 成家立业期
      27: "A", // 高度确定
      28: "B", // 豪爽大气
      29: "A", // 非常介意
      30: "B"  // 安逸之都
    }
  },
  "长沙": {
    tags: [
      "four_seasons", "medium_pace", "culture", "economy",
      "shopping_food", "medium_cost", "friendly", "traditional_food",
      "basic_education", "public_transport", "bustling"
    ],
    wuxing: ["火", "土"],
    climate: "亚热带季风气候，夏季炎热潮湿",
    description: "网红城市之一，夜生活和美食文化非常突出。",
    advantages: [
      "年轻氛围浓，娱乐产业发达",
      "物价相对亲民",
      "城市烟火气足"
    ],
    disadvantages: [
      "夏季闷热",
      "部分区域交通压力大"
    ],
    image: "🎵",
    emoji: "🌶️",
    answers: {
      1: "B", // 便利启动型
      2: "C", // 社交时刻
      3: "C", // 愿意尝试
      4: "B", // 城市探索
      5: "B", // 45分钟左右
      6: "D", // 创业折腾型
      7: "C", // 平衡和自由
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "C", // 主动出击型
      13: "C", // 热热闹闹
      14: "B", // 偶尔会
      15: "B", // 二人世界
      16: "A", // 极度怕冷
      17: "B", // 雨雪控
      18: "B", // 一般敏感
      19: "C", // 城市控
      20: "B", // 怕干燥
      21: "B", // 重口味党
      22: "A", // 美食至上
      23: "A", // 必须丰富
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "B", // 职场中坚
      27: "C", // 拥抱变化
      28: "C", // 务实接地气
      29: "C", // 不介意
      30: "B"  // 安逸之都
    }
  },
  "青岛": {
    tags: [
      "four_seasons", "medium_pace", "economy", "nature",
      "outdoor", "medium_cost", "friendly", "coastal",
      "basic_education", "public_transport", "historic"
    ],
    wuxing: ["水", "金"],
    climate: "海洋性气候影响明显，夏季凉爽，冬季较冷",
    description: "滨海山城，啤酒和红瓦绿树的城市名片深入人心。",
    advantages: [
      "海景资源丰富，宜居度高",
      "夏季相对凉爽舒适",
      "生活节奏适中"
    ],
    disadvantages: [
      "冬季风大体感偏冷",
      "旅游旺季人流较多"
    ],
    image: "🍺",
    emoji: "🌊",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "C", // 各自安好
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "B", // 二人世界
      16: "B", // 极度怕热
      17: "A", // 阳光控
      18: "A", // 非常敏感
      19: "A", // 山海控
      20: "A", // 怕潮湿
      21: "D", // 国际胃
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "C", // 成家立业期
      27: "B", // 中等确定
      28: "D", // 文艺清新
      29: "B", // 有点介意
      30: "C"  // 理想之地
    }
  },
  "厦门": {
    tags: [
      "warm_humid", "medium_pace", "culture", "nature",
      "outdoor", "medium_cost", "friendly", "healthy_food",
      "basic_education", "public_transport", "coastal"
    ],
    wuxing: ["水", "木"],
    climate: "亚热带海洋性气候，温暖宜人",
    description: "海上花园，滨海城市。这里风光旖旎，气候宜人，节奏舒适。适合追求海洋生活、喜欢温暖气候的人群。",
    advantages: [
      "环境优美，空气质量好",
      "气候宜人",
      "生活节奏适中",
      "滨海风光"
    ],
    disadvantages: [
      "房价较高",
      "工作机会有限",
      "台风影响"
    ],
    image: "🌴",
    emoji: "🏖️",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "C", // 各自安好
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "B", // 二人世界
      16: "A", // 极度怕冷
      17: "A", // 阳光控
      18: "A", // 非常敏感
      19: "A", // 山海控
      20: "B", // 怕干燥
      21: "C", // 清淡党
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "C", // 成家立业期
      27: "B", // 中等确定
      28: "D", // 文艺清新
      29: "B", // 有点介意
      30: "C"  // 理想之地
    }
  },
  "昆明": {
    tags: [
      "four_seasons", "slow_pace", "nature", "tourism",
      "outdoor", "medium_cost", "friendly", "healthy_food",
      "basic_education", "pastoral", "coastal"
    ],
    wuxing: ["木", "水"],
    climate: "低纬高原山地季风气候，四季如春",
    description: "春城昆明，以温和气候和丰富花卉著称，宜居度高。",
    advantages: [
      "气候全年舒适宜人",
      "周边自然景观丰富",
      "生活节奏悠闲"
    ],
    disadvantages: [
      "远离沿海经济核心",
      "早晚温差相对较大"
    ],
    image: "🌸",
    emoji: "🌤️",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "C", // 愿意尝试
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "C", // 够用就行
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "C", // 各自安好
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "D", // 丁克/晚育
      16: "D", // 无所谓
      17: "A", // 阳光控
      18: "A", // 非常敏感
      19: "B", // 山川控
      20: "C", // 都能适应
      21: "C", // 清淡党
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "C", // 网购为主
      25: "C", // 骑行/步行党
      26: "D", // 中年/成熟期
      27: "D", // 随遇而安
      28: "D", // 文艺清新
      29: "C", // 不介意
      30: "D"  // 自由之境
    }
  },
  "大连": {
    tags: [
      "four_seasons", "medium_pace", "economy", "nature",
      "outdoor", "medium_cost", "friendly", "coastal",
      "basic_education", "public_transport", "tourism"
    ],
    wuxing: ["水", "金"],
    climate: "海洋性气候特征明显，夏季凉爽，冬季多风",
    description: "东北沿海港口城市，海岸线绵长，城市景观干净整洁。",
    advantages: [
      "海滨风光好，宜居度较高",
      "夏天体感舒适",
      "城市环境整洁"
    ],
    disadvantages: [
      "冬季偏冷且多风",
      "城市地形起伏较多"
    ],
    image: "🌊",
    emoji: "⚓",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "B", // 中等
      9: "B", // 看情况
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "B", // 二人世界
      16: "B", // 极度怕热
      17: "A", // 阳光控
      18: "A", // 非常敏感
      19: "A", // 山海控
      20: "A", // 怕潮湿
      21: "A", // 故乡胃
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "A", // 地铁/公交党
      26: "C", // 成家立业期
      27: "B", // 中等确定
      28: "B", // 豪爽大气
      29: "A", // 非常介意
      30: "C"  // 理想之地
    }
  },
  "苏州": {
    tags: [
      "four_seasons", "slow_pace", "culture", "nature",
      "outdoor", "medium_cost", "friendly", "healthy_food",
      "basic_education", "bike_friendly", "pastoral"
    ],
    wuxing: ["木", "水"],
    climate: "亚热带季风气候，四季分明",
    description: "人间天堂，园林之城。这里园林精致、水乡风情浓郁，宜居宜业。适合喜欢精致生活、江南水乡文化的人群。",
    advantages: [
      "江南园林美",
      "生态环境好",
      "交通便利",
      "生活品质高"
    ],
    disadvantages: [
      "房价较高",
      "工业发达影响环境",
      "工作机会相对较少"
    ],
    image: "🏮",
    emoji: "🌊",
    answers: {
      1: "A", // 自然唤醒型
      2: "A", // 宅家充电
      3: "B", // 看情况
      4: "A", // 自然疗愈
      5: "B", // 45分钟左右
      6: "B", // 技能独立型
      7: "C", // 平衡和自由
      8: "B", // 中等
      9: "A", // 必须买房
      10: "B", // 投资自己
      11: "B", // 定期联系
      12: "B", // 被动社交型
      13: "B", // 适度友好
      14: "C", // 享受独处
      15: "C", // 有娃家庭
      16: "C", // 四季分明党
      17: "B", // 雨雪控
      18: "A", // 非常敏感
      19: "B", // 山川控
      20: "B", // 怕干燥
      21: "C", // 清淡党
      22: "B", // 比较讲究
      23: "B", // 偶尔有就行
      24: "D", // 逛街体验
      25: "C", // 骑行/步行党
      26: "C", // 成家立业期
      27: "B", // 中等确定
      28: "D", // 文艺清新
      29: "B", // 有点介意
      30: "C"  // 理想之地
    }
  }
}

/**
 * 根据答题结果和五行计算推荐城市
 * @param {Array} answers - 答案数组
 * @param {Object} wuxing - 五行信息
 * @returns {Array} 推荐的城市列表（按匹配度排序）
 */
export function calculateRecommendedCities(answers, wuxing) {
  const results = []
  
  // 统计选择题选项分布
  const optionCount = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  }
  
  answers.forEach(answer => {
    // 假设answer对象包含option属性表示A/B/C/D
    if (answer.option) {
      optionCount[answer.option]++
    }
  })

  for (const [cityName, cityData] of Object.entries(cities)) {
    let score = 0
    const matchedTags = []
    const reasons = []

    // 1. 八字喜用神匹配（先天能量需求）
    if (wuxing && wuxing.dominant) {
      // 城市五行强度评估
      const cityElementScore = evaluateCityElementScore(cityName, wuxing.dominant)
      score += cityElementScore.score
      reasons.push(...cityElementScore.reasons)
    }

    // 2. 选择题匹配（后天现实匹配度）
    const optionScore = evaluateOptionScore(optionCount, cityName, answers)
    score += optionScore.score
    reasons.push(...optionScore.reasons)

    // 3. 标签直接匹配
    for (const answer of answers) {
      if (cityData.tags.includes(answer.value)) {
        score += 0.5
        matchedTags.push(answer.value)
      }
    }

    // 4. 城市答案匹配（新的核心算法）
    const cityAnswerScore = evaluateCityAnswerScore(answers, cityData.answers, cityName)
    score += cityAnswerScore.score * 2 // 提高权重
    reasons.push(...cityAnswerScore.reasons)

    results.push({
      name: cityName,
      score: score,
      matchedTags: matchedTags,
      reasons: reasons,
      data: cityData
    })
  }

  // 按分数降序排序
  results.sort((a, b) => b.score - a.score)

  return results
}

/**
 * 评估城市与八字喜用神的匹配度
 */
function evaluateCityElementScore(cityName, dominantElements) {
  let score = 0
  const reasons = []
  
  // 五行城市映射
  const elementCities = {
    '火': {
      cities: ['深圳', '广州', '厦门', '长沙', '海口', '三亚', '杭州'],
      description: '南方城市、夏季炎热、夜景繁华、互联网/电子/文化传媒产业发达'
    },
    '水': {
      cities: ['上海', '青岛', '大连', '宁波', '福州', '温州', '武汉', '南京', '重庆'],
      description: '沿海/沿江城市、名字带水、多雨、金融/贸易/物流发达'
    },
    '金': {
      cities: ['西安', '成都', '重庆', '太原', '呼和浩特', '沈阳', '乌鲁木齐'],
      description: '西部城市、矿产资源、金融中心、交通枢纽'
    },
    '木': {
      cities: ['杭州', '苏州', '昆明', '贵阳', '南宁', '桂林'],
      description: '东部城市、绿化率高、园林多、教育/文创产业发达'
    },
    '土': {
      cities: ['北京', '郑州', '西安', '成都', '重庆', '武汉'],
      description: '中原城市、内陆盆地、政治文化中心、厚重稳定'
    }
  }
  
  dominantElements.forEach((element, index) => {
    if (elementCities[element]) {
      if (elementCities[element].cities.includes(cityName)) {
        // 优先级评分，第一个元素权重最高
        const elementScore = (dominantElements.length - index) * 2
        score += elementScore
        reasons.push(`八字喜${element}，${cityName}属于${element}旺城市（${elementCities[element].description}）`)
      }
    }
  })
  
  return { score, reasons }
}

/**
 * 评估选择题选项与城市的匹配度
 */
function evaluateOptionScore(optionCount, cityName, answers) {
  let score = 0
  const reasons = []
  
  // 选项偏好与城市类型映射
  const optionCityMap = {
    A: {
      cities: ['杭州', '成都', '青岛', '厦门', '昆明', '大连', '珠海'],
      description: '自然、安静、慢节奏、注重生活质量、怕拥挤'
    },
    B: {
      cities: ['广州', '长沙', '重庆', '苏州', '南京', '武汉', '西安'],
      description: '务实、平衡、可快可慢、适应性强'
    },
    C: {
      cities: ['昆明', '大连', '珠海', '厦门', '青岛', '苏州', '杭州'],
      description: '追求品质、有明确偏好、愿意为喜欢的事物付出'
    },
    D: {
      cities: ['上海', '北京', '深圳', '广州', '成都', '杭州'],
      description: '自由奔放、不拘一格、适应性强'
    }
  }
  
  // 找出用户最偏好的选项
  let maxOption = 'A'
  let maxCount = optionCount.A
  
  if (optionCount.B > maxCount) {
    maxOption = 'B'
    maxCount = optionCount.B
  }
  if (optionCount.C > maxCount) {
    maxOption = 'C'
    maxCount = optionCount.C
  }
  if (optionCount.D > maxCount) {
    maxOption = 'D'
    maxCount = optionCount.D
  }
  
  // 评估城市与用户偏好的匹配度
  if (optionCityMap[maxOption].cities.includes(cityName)) {
    score += 5
    reasons.push(`您的选择题偏好${maxOption}（${optionCityMap[maxOption].description}），${cityName}符合这一偏好`)
  }
  
  // 次要偏好也考虑
  Object.keys(optionCount).forEach(option => {
    if (option !== maxOption && optionCount[option] > 3) {
      if (optionCityMap[option].cities.includes(cityName)) {
        score += 2
        reasons.push(`您也有${option}选项偏好，${cityName}部分符合`)
      }
    }
  })
  
  // 气候耐受度特殊处理
  if (answers) {
    const climateAnswers = answers.filter(a => 
      a.value === 'heat_loving' || a.value === 'cold_loving'
    )
    
    climateAnswers.forEach(answer => {
      if (answer.value === 'heat_loving') {
        // 极度怕冷，必须去南方，扣分北方城市
        const northernCities = ['北京', '哈尔滨', '长春', '沈阳', '西安', '太原', '呼和浩特', '乌鲁木齐']
        if (northernCities.includes(cityName)) {
          score -= 3
          reasons.push(`您极度怕冷，${cityName}冬季较冷，可能不太适合`)
        }
      } else if (answer.value === 'cold_loving') {
        // 极度怕热，必须去北方/高原，扣分南方城市
        const southernCities = ['深圳', '广州', '厦门', '海口', '三亚', '南宁', '福州']
        if (southernCities.includes(cityName)) {
          score -= 3
          reasons.push(`您极度怕热，${cityName}夏季较热，可能不太适合`)
        }
      }
    })
  }
  
  return { score, reasons }
}

/**
 * 评估城市答案与用户答案的匹配度
 */
function evaluateCityAnswerScore(userAnswers, cityAnswers, cityName) {
  let score = 0
  const reasons = []
  let matchCount = 0
  
  // 构建用户答案的题目ID到选项的映射
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
      }
    }
  }
  
  // 生成理由
  const matchPercentage = Math.round((matchCount / 30) * 100)
  reasons.push(`与${cityName}的生活方式匹配度为${matchPercentage}%，${matchCount}道题目选项一致`)
  
  return { score, reasons }
}
