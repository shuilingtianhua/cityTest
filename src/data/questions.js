/**
 * 题库数据 - 城市适合度测试
 */

export const questions = [
  // 第一组：生活节奏与幸福感
  {
    id: 1,
    question: "理想的早晨，你更希望是哪种画面？",
    options: [
      { label: "自然唤醒型：被阳光和鸟鸣叫醒，在阳台喝杯咖啡发会呆", value: "natural_morning" },
      { label: "便利启动型：下楼就是早餐铺/便利店，打包带走路上搞定", value: "convenient_morning" },
      { label: "效率优先型：家离公司近，多睡半小时，踩点打卡", value: "efficient_morning" },
      { label: "夜猫子型：上午不存在，从中午才开始真正醒来", value: "night_owl_morning" }
    ]
  },
  {
    id: 2,
    question: "工作日的晚饭后，你更倾向？",
    options: [
      { label: "宅家充电：追剧、看书、打游戏，享受独处时光", value: "home_evening" },
      { label: "附近溜达：去公园散步、逛超市或楼下小酒馆坐坐", value: "neighborhood_evening" },
      { label: "社交时刻：约饭、看演出、参加活动，不回家那么早", value: "social_evening" },
      { label: "继续搬砖：加班或学习，为未来蓄力", value: "work_evening" }
    ]
  },
  {
    id: 3,
    question: "对于\"排队\"，你的真实心态是？",
    options: [
      { label: "极度排斥：超过5分钟就烦躁，宁愿不吃", value: "hate_queue" },
      { label: "看情况：网红店超过20分钟就放弃，但真爱的店愿意等", value: "selective_queue" },
      { label: "愿意尝试：只要评价好，排1小时也OK，就当体验", value: "willing_queue" },
      { label: "绝不排队：直接找黄牛或选VIP通道", value: "avoid_queue" }
    ]
  },
  {
    id: 4,
    question: "周末最理想的打开方式是？",
    options: [
      { label: "自然疗愈：爬山、露营、逛公园，去人少的地方吸氧", value: "nature_weekend" },
      { label: "城市探索：看展、探店、逛商场、打卡新地标", value: "city_explore_weekend" },
      { label: "躺平休息：在家点外卖，瘫两天谁也别叫我", value: "rest_weekend" },
      { label: "社交聚会：约朋友吃饭、桌游、剧本杀", value: "social_weekend" }
    ]
  },
  {
    id: 5,
    question: "你能接受的单程通勤极限是？",
    options: [
      { label: "30分钟以内：通勤超过半小时会严重影响幸福感", value: "short_commute" },
      { label: "45分钟左右：可以接受，但再长就需要权衡", value: "medium_commute" },
      { label: "1小时左右：为了住得舒服或工作机会，可以忍", value: "long_commute" },
      { label: "1.5小时以上：只要能上车睡觉或听东西，也能接受", value: "very_long_commute" }
    ]
  },
  
  // 第二组：职业与财富
  {
    id: 6,
    question: "你目前的职业形态更接近？",
    options: [
      { label: "平台依附型：需要大公司背书、团队协作、总部资源", value: "corporate_career" },
      { label: "技能独立型：靠专业技能吃饭，在哪都能干", value: "independent_career" },
      { label: "资源关系型：需要人脉积累、圈子社交、信息差", value: "network_career" },
      { label: "创业折腾型：想自己干点啥，不怕失败，就怕没机会", value: "entrepreneur_career" }
    ]
  },
  {
    id: 7,
    question: "对于职业发展，你更看重？",
    options: [
      { label: "稳定和安全：大平台、五险一金、不轻易裁员", value: "stable_career" },
      { label: "成长和空间：能学到东西、快速升职、承担更多", value: "growth_career" },
      { label: "平衡和自由：钱够用就行，不想太累，有生活", value: "balance_career" },
      { label: "财务爆发：想搞大钱，愿意赌一把，不怕996", value: "wealth_career" }
    ]
  },
  {
    id: 8,
    question: "你对\"搞钱\"的渴望程度是？",
    options: [
      { label: "极强：年轻就是搞钱，存钱第一位，生活可以凑合", value: "high_wealth_drive" },
      { label: "中等：要赚钱，但也要生活，不能牺牲健康", value: "medium_wealth_drive" },
      { label: "够用就行：钱是工具，不是目的，差不多就行", value: "low_wealth_drive" },
      { label: "随缘：有就多花，没就少花，不想被钱绑架", value: "free_wealth_drive" }
    ]
  },
  {
    id: 9,
    question: "面对买房/租房，你的态度是？",
    options: [
      { label: "必须买房：有房才有家，愿意为此背贷", value: "must_buy_house" },
      { label: "看情况：能买就买，买不起也不强求", value: "flexible_house" },
      { label: "长期租房：不想被房贷绑死，喜欢自由", value: "rent_house" },
      { label: "房车/旅居：不需要固定住所，在哪都能活", value: "nomadic_house" }
    ]
  },
  {
    id: 10,
    question: "如果你有一笔闲钱（比如20万），你会？",
    options: [
      { label: "存银行/理财：求稳，保本最重要", value: "safe_investment" },
      { label: "投资自己：报课、考证、进修", value: "self_investment" },
      { label: "投资房产/理财：看机会，愿意尝试", value: "asset_investment" },
      { label: "创业/投资朋友：自己干点啥，或者和朋友合伙", value: "risk_investment" }
    ]
  },
  
  // 第三组：人际与归属感
  {
    id: 11,
    question: "你和亲友的关系现状是？",
    options: [
      { label: "深度绑定：父母年纪大，需要经常见面照顾", value: "close_family" },
      { label: "定期联系：逢年过节回家，平时各忙各的", value: "regular_family" },
      { label: "各自安好：家人都健康，支持我去任何地方", value: "independent_family" },
      { label: "想要逃离：想离原生家庭远一点，重新开始", value: "distant_family" }
    ]
  },
  {
    id: 12,
    question: "在陌生环境里，你交新朋友的能力？",
    options: [
      { label: "社恐型：很难主动开口，需要很长时间", value: "shy_social" },
      { label: "被动社交型：如果有人主动，可以聊得很好", value: "passive_social" },
      { label: "主动出击型：参加活动、约人吃饭，很快能混熟", value: "active_social" },
      { label: "随缘型：不强求，有朋友最好，没有也能自己待着", value: "casual_social" }
    ]
  },
  {
    id: 13,
    question: "你希望的邻里/社区关系是？",
    options: [
      { label: "互不打扰：见面点头就行，别来烦我", value: "private_neighbor" },
      { label: "适度友好：偶尔聊聊天，互相帮忙收快递", value: "friendly_neighbor" },
      { label: "热热闹闹：像老家一样，邻里串门、互相照应", value: "close_neighbor" },
      { label: "兴趣圈子：和邻居是因为共同爱好聚在一起", value: "hobby_neighbor" }
    ]
  },
  {
    id: 14,
    question: "对于\"孤独感\"，你的真实感受是？",
    options: [
      { label: "很难忍受：需要经常有人陪，否则会emo", value: "hate_loneliness" },
      { label: "偶尔会：但可以通过视频/游戏缓解", value: "tolerate_loneliness" },
      { label: "享受独处：一个人待着很舒服，不觉得孤独", value: "enjoy_loneliness" },
      { label: "有宠物就够了：有猫有狗，万事足", value: "pet_loneliness" }
    ]
  },
  {
    id: 15,
    question: "你希望未来的伴侣/家庭生活是怎样的？",
    options: [
      { label: "单身万岁：暂时不考虑，或一直不考虑", value: "single_life" },
      { label: "二人世界：和伴侣一起，暂时不要孩子", value: "couple_life" },
      { label: "有娃家庭：未来要孩子，需要学区和生活配套", value: "family_life" },
      { label: "丁克/晚育：不想要孩子，或很久以后再说", value: "childfree_life" }
    ]
  },
  
  // 第四组：气候与环境
  {
    id: 16,
    question: "你对冷热的耐受度是？",
    options: [
      { label: "极度怕冷：冬天低于0度会死，必须去南方", value: "heat_loving" },
      { label: "极度怕热：夏天超过30度受不了，必须去北方/高原", value: "cold_loving" },
      { label: "四季分明党：喜欢春夏秋冬分明，每个季节都有不同", value: "four_seasons_loving" },
      { label: "无所谓：穿衣服调整就行，身体适应力强", value: "temperature_neutral" }
    ]
  },
  {
    id: 17,
    question: "你喜欢的天气偏好是？",
    options: [
      { label: "阳光控：喜欢大晴天，阴天会抑郁", value: "sun_loving" },
      { label: "雨雪控：喜欢下雨下雪，觉得很有安全感", value: "rain_snow_loving" },
      { label: "温和派：不干不湿，不冷不热，刚刚好", value: "mild_weather_loving" },
      { label: "没感觉：天气不影响心情，室内待着就行", value: "weather_neutral" }
    ]
  },
  {
    id: 18,
    question: "你对空气质量和环境敏感吗？",
    options: [
      { label: "非常敏感：雾霾会嗓子疼、鼻炎犯", value: "environment_sensitive" },
      { label: "一般敏感：重度污染会不舒服，轻度能忍", value: "moderate_environment_sensitive" },
      { label: "不敏感：没啥感觉，更看重经济活力", value: "environment_neutral" },
      { label: "没概念：没住过污染城市，不知道", value: "environment_naive" }
    ]
  },
  {
    id: 19,
    question: "你更喜欢哪种自然景观？",
    options: [
      { label: "山海控：喜欢海、沙滩、开阔水面", value: "ocean_loving" },
      { label: "山川控：喜欢山、森林、徒步、登高", value: "mountain_loving" },
      { label: "城市控：喜欢高楼大厦、灯火辉煌，自然无所谓", value: "city_loving" },
      { label: "平原控：喜欢一望无际、视野开阔", value: "plain_loving" }
    ]
  },
  {
    id: 20,
    question: "你对干燥/潮湿的适应力？",
    options: [
      { label: "怕潮湿：受不了回南天、梅雨季，会发霉", value: "dry_loving" },
      { label: "怕干燥：皮肤会干裂、流鼻血", value: "humid_loving" },
      { label: "都能适应：在哪都能调节", value: "humidity_neutral" },
      { label: "没感觉：没注意过这个问题", value: "humidity_naive" }
    ]
  },
  
  // 第五组：胃口与生活方式
  {
    id: 21,
    question: "你的饮食习惯是？",
    options: [
      { label: "故乡胃：吃不到正宗的家乡菜会死", value: "hometown_food" },
      { label: "重口味党：无辣不欢，喜欢火锅烧烤", value: "spicy_food" },
      { label: "清淡党：喜欢原汁原味，海鲜/粤菜/日料", value: "light_food" },
      { label: "国际胃：各国料理都爱，喜欢尝试新东西", value: "international_food" }
    ]
  },
  {
    id: 22,
    question: "你对\"吃\"这件事的重视程度？",
    options: [
      { label: "美食至上：可以为了好吃的搬家，愿意花时间探店", value: "food_obsessed" },
      { label: "比较讲究：会找好吃的，但不会太折腾", value: "food_careful" },
      { label: "一般般：能吃就行，不挑", value: "food_neutral" },
      { label: "无所谓：经常吃外卖速食，不关心美食", value: "food_indifferent" }
    ]
  },
  {
    id: 23,
    question: "你对夜生活的需求是？",
    options: [
      { label: "必须丰富：晚上10点后街上得有人，有宵夜摊、酒吧", value: "nightlife_lover" },
      { label: "偶尔有就行：周末能找个地方喝酒聊天，平时无所谓", value: "casual_nightlife" },
      { label: "不需要：晚上10点后世界最好安静", value: "nightlife_hater" },
      { label: "宅家夜生活：晚上是自己打游戏/追剧的时间，不需要出门", value: "home_nightlife" }
    ]
  },
  {
    id: 24,
    question: "你喜欢的购物方式是？",
    options: [
      { label: "下楼即达：便利店、小超市、菜市场，随时能买到", value: "convenient_shopping" },
      { label: "周末采购：习惯开车去山姆/盒马，一次买一周", value: "bulk_shopping" },
      { label: "网购为主：很少线下购物，快递方便就行", value: "online_shopping" },
      { label: "逛街体验：喜欢逛商场、小店，享受线下淘货", value: "experiential_shopping" }
    ]
  },
  {
    id: 25,
    question: "你对交通出行的偏好是？",
    options: [
      { label: "地铁/公交党：不开车，靠公共交通出行", value: "public_transport" },
      { label: "自驾党：出门必开车，受不了挤地铁", value: "car_driving" },
      { label: "骑行/步行党：喜欢骑电动车或走路，近距离搞定", value: "biking_walking" },
      { label: "混合党：怎么方便怎么来，看情况", value: "flexible_transport" }
    ]
  },
  
  // 第六组：个人状态与未来
  {
    id: 26,
    question: "你目前的人生阶段是？",
    options: [
      { label: "刚毕业/职场新人：想闯一闯，积累经验", value: "fresh_graduate" },
      { label: "职场中坚：有一定经验，想突破或转型", value: "mid_career" },
      { label: "成家立业期：考虑结婚、买房、孩子", value: "family_building" },
      { label: "中年/成熟期：想稳定下来，追求生活品质", value: "mature_stage" }
    ]
  },
  {
    id: 27,
    question: "你对未来的确定性需求是？",
    options: [
      { label: "高度确定：需要稳定的工作、收入、生活节奏", value: "certainty_seeking" },
      { label: "中等确定：有计划，但也接受变化", value: "moderate_certainty" },
      { label: "拥抱变化：计划赶不上变化，先干了再说", value: "change_embracing" },
      { label: "随遇而安：去哪都行，看缘分", value: "fate_accepting" }
    ]
  },
  {
    id: 28,
    question: "你欣赏的城市气质是？",
    options: [
      { label: "精致小资：咖啡馆、买手店、艺术展", value: "exquisite_city" },
      { label: "豪爽大气：大口吃肉大口喝酒，不拘小节", value: "bold_city" },
      { label: "务实接地气：生活方便、人情味浓、不太装", value: "practical_city" },
      { label: "文艺清新：慢节奏、有山有水、有文化氛围", value: "artistic_city" }
    ]
  },
  {
    id: 29,
    question: "你介意语言沟通问题吗？",
    options: [
      { label: "非常介意：听不懂方言会焦虑，必须普通话普及", value: "language_sensitive" },
      { label: "有点介意：希望能慢慢听懂，但长期听不懂会烦", value: "moderate_language_sensitive" },
      { label: "不介意：方言是文化，愿意学两句", value: "language_accepting" },
      { label: "觉得有意思：喜欢听不同方言，觉得很有特色", value: "language_appreciating" }
    ]
  },
  {
    id: 30,
    question: "用一个词/短语形容你理想中的\"家\"，是？",
    options: [
      { label: "机会之城：能让我搞钱、成长、见世面", value: "opportunity_city" },
      { label: "安逸之都：生活舒服、压力小、能喘口气", value: "comfortable_city" },
      { label: "理想之地：有山有水、有文化、有同类", value: "ideal_city" },
      { label: "自由之境：不被定义，想走就走，想留就留", value: "free_city" }
    ]
  }
]
