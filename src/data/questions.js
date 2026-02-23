/**
 * 题库数据 - 城市适合度测试
 */

export const questions = [
  // 气候与节奏
  {
    id: 1,
    question: "你更喜欢哪种气候？",
    options: [
      { label: "四季分明，春秋宜人", value: "four_seasons" },
      { label: "温暖湿润，冬天不太冷", value: "warm_humid" },
      { label: "凉爽舒适，宁愿稍冷一点", value: "cool_rainy" },
      { label: "干燥通透，阳光充足", value: "dry_sunny" }
    ]
  },
  {
    id: 2,
    question: "你理想的生活节奏是？",
    options: [
      { label: "快节奏，充满活力和机遇", value: "fast_pace" },
      { label: "中等节奏，平衡工作生活", value: "medium_pace" },
      { label: "慢节奏，享受悠闲时光", value: "slow_pace" },
      { label: "平时慢一点，关键时刻能冲刺", value: "flexible" }
    ]
  },

  // 城市类型与发展方向
  {
    id: 3,
    question: "你对城市的期待中，哪个最重要？",
    options: [
      { label: "丰富的文化底蕴和历史", value: "culture" },
      { label: "发达的经济和高薪机会", value: "economy" },
      { label: "优美的自然环境和生态", value: "nature" },
      { label: "创新前沿和科技氛围", value: "innovation" }
    ]
  },
  {
    id: 4,
    question: "你更偏好哪一类城市？",
    options: [
      { label: "国际化大都市，节奏很快", value: "metropolis" },
      { label: "省会或区域中心城市", value: "hub" },
      { label: "滨海旅居型城市", value: "coastal" },
      { label: "山水小城或田园城市", value: "pastoral" }
    ]
  },

  // 休闲方式与日常生活
  {
    id: 5,
    question: "周末你喜欢做什么？",
    options: [
      { label: "逛博物馆、艺术展、文化活动", value: "art_museum" },
      { label: "户外徒步、露营、登山", value: "outdoor" },
      { label: "逛街购物、美食探店", value: "shopping_food" },
      { label: "安静待在家或咖啡馆，自己充电", value: "quiet_reading" }
    ]
  },
  {
    id: 6,
    question: "你希望所在城市的夜晚是什么氛围？",
    options: [
      { label: "霓虹灯通明，很热闹", value: "bustling" },
      { label: "有夜市和小吃街，但不过分吵闹", value: "friendly" },
      { label: "偶尔有夜生活，多数时间比较安静", value: "private" },
      { label: "有音乐节、Livehouse 等多元文化场景", value: "international" }
    ]
  },

  // 经济压力与成本
  {
    id: 7,
    question: "你对房价和物价的接受程度？",
    options: [
      { label: "可以接受较高成本，只要发展好", value: "high_cost" },
      { label: "中等水平，性价比重要", value: "medium_cost" },
      { label: "偏好较低成本，生活压力小", value: "low_cost" },
      { label: "短期内不太在意成本，更看经验和阅历", value: "flexible_cost" }
    ]
  },
  {
    id: 8,
    question: "如果收入差不多，你更在意哪一点？",
    options: [
      { label: "消费便宜，存钱更快", value: "low_cost" },
      { label: "消费适中，但公共服务更好", value: "medium_cost" },
      { label: "消费略高，但机会更多", value: "economy" },
      { label: "消费高，但生活方式很精彩", value: "high_cost" }
    ]
  },

  // 社交、美食、教育
  {
    id: 9,
    question: "你喜欢什么样的社交环境？",
    options: [
      { label: "热闹繁华，人来人往", value: "bustling" },
      { label: "温暖人情，邻里和睦", value: "friendly" },
      { label: "多元开放，国际范儿", value: "international" },
      { label: "安静私密，保持距离", value: "private" }
    ]
  },
  {
    id: 10,
    question: "你对美食的态度是？",
    options: [
      { label: "热爱传统美食，讲究地道", value: "traditional_food" },
      { label: "喜欢尝试各国料理", value: "international_food" },
      { label: "偏好清淡健康饮食", value: "healthy_food" },
      { label: "随缘就好，不会专门为吃跑远路", value: "casual_food" }
    ]
  },
  {
    id: 11,
    question: "你对教育资源的优先级？",
    options: [
      { label: "希望有顶尖高校和科研机构", value: "top_education" },
      { label: "更在意中小学质量和学区", value: "basic_education" },
      { label: "国际学校多，适合双语环境", value: "international_education" },
      { label: "教育不是当前阶段的首要考虑", value: "moderate_education" }
    ]
  },

  // 交通与通勤
  {
    id: 12,
    question: "你对城市交通的要求是？",
    options: [
      { label: "地铁密集，公共交通发达", value: "public_transport" },
      { label: "道路通畅，自驾方便", value: "car_friendly" },
      { label: "骑行友好，绿色出行", value: "bike_friendly" },
      { label: "步行可达，社区内就能解决大部分需求", value: "walkable" }
    ]
  },
  {
    id: 13,
    question: "你更希望城市在全国交通网络中扮演什么角色？",
    options: [
      { label: "全国或区域级交通枢纽", value: "hub" },
      { label: "重要港口或海运城市", value: "port" },
      { label: "靠近多条高速和高铁，出行方便", value: "gateway" },
      { label: "位置居中，去哪里都算折中", value: "inland" }
    ]
  },

  // 工作机会与产业
  {
    id: 14,
    question: "你更偏好哪一类工作机会？",
    options: [
      { label: "互联网、科技和创新产业", value: "innovation" },
      { label: "制造业、实体经济为主", value: "manufacture" },
      { label: "文旅、消费和服务业", value: "tourism" },
      { label: "综合型大城市，行业选择多", value: "economy" }
    ]
  },
  {
    id: 15,
    question: "你对创业氛围的看重程度？",
    options: [
      { label: "非常重要，希望城市鼓励创业", value: "entrepreneur" },
      { label: "有机会不错，但不是刚需", value: "emerging" },
      { label: "更想在成熟企业稳定发展", value: "economy" },
      { label: "目前不特别考虑创业相关", value: "moderate_education" }
    ]
  },

  // 城市规模与氛围
  {
    id: 16,
    question: "你理想中的城市规模是？",
    options: [
      { label: "几乎所有东西都很大、很全的一线超大城市", value: "metropolis" },
      { label: "人口多但不至于拥挤的省会级城市", value: "hub" },
      { label: "中等城市或新一线，生活感更强", value: "bustling" },
      { label: "小而美的城市，熟悉感更重要", value: "pastoral" }
    ]
  },
  {
    id: 17,
    question: "你对旅游属性强的城市有什么感觉？",
    options: [
      { label: "很喜欢，愿意住在景点城市", value: "tourism" },
      { label: "适合周末去玩，但日常生活更重要", value: "nature" },
      { label: "不太想住在游客太多的地方", value: "private" },
      { label: "如果资源好，游客多也可以接受", value: "coastal" }
    ]
  },

  // 历史、人文与自然
  {
    id: 18,
    question: "以下哪种城市印象最吸引你？",
    options: [
      { label: "古城街巷、城墙和博物馆", value: "historic" },
      { label: "高楼林立、夜景璀璨", value: "metropolis" },
      { label: "山水田园、远离喧嚣", value: "pastoral" },
      { label: "海湾、沙滩与海风", value: "coastal" }
    ]
  },
  {
    id: 19,
    question: "你希望日常能多接触哪种自然环境？",
    options: [
      { label: "湖泊、河流、海边", value: "coastal" },
      { label: "山林、公园和郊野绿道", value: "outdoor" },
      { label: "城市园林和口袋公园", value: "nature" },
      { label: "对自然环境没有特别刚需", value: "economy" }
    ]
  },

  // 出行半径与生活便利度
  {
    id: 20,
    question: "你日常能接受的通勤方式是？",
    options: [
      { label: "乘坐地铁/公交 40 分钟以内", value: "public_transport" },
      { label: "自驾 30 分钟左右", value: "car_friendly" },
      { label: "骑行或步行可达最好", value: "bike_friendly" },
      { label: "通勤时间长一些也行，只要房子舒适", value: "flexible" }
    ]
  },
  {
    id: 21,
    question: "理想中，你家附近 1 公里内最好有什么？",
    options: [
      { label: "购物中心和商街", value: "shopping_food" },
      { label: "公园、绿地或河边步道", value: "outdoor" },
      { label: "咖啡馆、书店和小剧场", value: "art_museum" },
      { label: "菜市场、便利店等日常配套", value: "walkable" }
    ]
  },

  // 家庭与未来规划
  {
    id: 22,
    question: "如果未来考虑家庭，你更看重？",
    options: [
      { label: "子女教育资源和升学机会", value: "top_education" },
      { label: "生活成本和抚养压力", value: "low_cost" },
      { label: "环境安全、社区氛围", value: "friendly" },
      { label: "与父母或亲友距离方便往来", value: "hub" }
    ]
  },
  {
    id: 23,
    question: "你对养老/长期定居的城市有何偏好？",
    options: [
      { label: "气候温暖湿润，冬天不冷", value: "warm_humid" },
      { label: "夏天凉爽，适合避暑", value: "cool_rainy" },
      { label: "环境安静、有山有水", value: "pastoral" },
      { label: "医疗资源密集的大城市", value: "metropolis" }
    ]
  },

  // 个性与城市气场
  {
    id: 24,
    question: "你更希望城市给你什么样的整体感觉？",
    options: [
      { label: "务实稳定，适合长期扎根", value: "economy" },
      { label: "年轻有活力，机会不断出现", value: "innovation" },
      { label: "慢生活、幸福感高", value: "slow_pace" },
      { label: "多元包容，可以做自己", value: "international" }
    ]
  },
  {
    id: 25,
    question: "下面哪一句更接近你对城市的期望？",
    options: [
      { label: "哪怕忙一点，也要舞台够大", value: "fast_pace" },
      { label: "挣钱和生活都要兼顾", value: "medium_pace" },
      { label: "不想太卷，享受生活更重要", value: "slow_pace" },
      { label: "阶段性可以拼一拼，以后再换城市", value: "emerging" }
    ]
  },

  // 文化活动与娱乐
  {
    id: 26,
    question: "你更看重哪类文化娱乐资源？",
    options: [
      { label: "剧院、博物馆、艺术展等高密度文化设施", value: "art_museum" },
      { label: "音乐节、演唱会和综艺演播", value: "bustling" },
      { label: "地方戏曲、民俗节庆", value: "historic" },
      { label: "自然风光配合轻户外活动", value: "outdoor" }
    ]
  },
  {
    id: 27,
    question: "你对“游客很多”的城市是什么态度？",
    options: [
      { label: "很喜欢，越热闹越有活力", value: "tourism" },
      { label: "还可以，选相对安静的片区居住", value: "coastal" },
      { label: "不太喜欢，人太多会很累", value: "private" },
      { label: "只要配套好、管理到位就能接受", value: "economy" }
    ]
  },

  // 工作生活平衡、未来规划
  {
    id: 28,
    question: "对你来说，工作与生活平衡的理想状态是？",
    options: [
      { label: "拼一线城市的机会，生活压力大也可以", value: "metropolis" },
      { label: "新一线/强二线，机会和生活都相对均衡", value: "hub" },
      { label: "更看重生活质量和环境", value: "pastoral" },
      { label: "短期在大城市，长期回节奏慢的城市", value: "emerging" }
    ]
  },
  {
    id: 29,
    question: "如果需要经常出差或异地往返，你更倾向？",
    options: [
      { label: "机场和高铁枢纽城市，去哪都方便", value: "hub" },
      { label: "靠近港口或海运枢纽", value: "port" },
      { label: "距离多座大城市 1~2 小时高铁圈", value: "gateway" },
      { label: "不常出差，对交通枢纽不敏感", value: "inland" }
    ]
  },

  // 总体偏好收尾题
  {
    id: 30,
    question: "综合来说，你更接近哪一种城市性格？",
    options: [
      { label: "外向、开放、机会多的大城市", value: "metropolis" },
      { label: "稳健、务实、发展中的成长型城市", value: "emerging" },
      { label: "舒适、安逸、节奏不快的宜居城市", value: "pastoral" },
      { label: "个性鲜明、有独特文化标签的城市", value: "historic" }
    ]
  }
]
