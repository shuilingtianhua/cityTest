// 测试完整的八字计算算法
import { getBaZi } from './src/utils/wuxing.js'

// 测试用例：1997年8月10日12时，期望：丁丑年戊申月甲申日庚午时
console.log('测试 1997年8月10日12时:')
const result1 = getBaZi(1997, 8, 10, 12)
console.log('年柱:', result1.year.ganZhi)
console.log('月柱:', result1.month.ganZhi)
console.log('日柱:', result1.day.ganZhi)
console.log('时柱:', result1.hour.ganZhi)
console.log('完整八字:', result1.full)
console.log('期望结果: 丁丑年戊申月甲申日庚午时')
console.log('------------------------')

// 测试其他日期
console.log('测试 2024年2月23日10时:')
const result2 = getBaZi(2024, 2, 23, 10)
console.log('年柱:', result2.year.ganZhi)
console.log('月柱:', result2.month.ganZhi)
console.log('日柱:', result2.day.ganZhi)
console.log('时柱:', result2.hour.ganZhi)
console.log('完整八字:', result2.full)
console.log('------------------------')

console.log('测试 2023年1月1日0时:')
const result3 = getBaZi(2023, 1, 1, 0)
console.log('年柱:', result3.year.ganZhi)
console.log('月柱:', result3.month.ganZhi)
console.log('日柱:', result3.day.ganZhi)
console.log('时柱:', result3.hour.ganZhi)
console.log('完整八字:', result3.full)
console.log('------------------------')

console.log('测试 1984年1月1日5时:')
const result4 = getBaZi(1984, 1, 1, 5)
console.log('年柱:', result4.year.ganZhi)
console.log('月柱:', result4.month.ganZhi)
console.log('日柱:', result4.day.ganZhi)
console.log('时柱:', result4.hour.ganZhi)
console.log('完整八字:', result4.full)
console.log('------------------------')

console.log('测试 1990年1月1日18时:')
const result5 = getBaZi(1990, 1, 1, 18)
console.log('年柱:', result5.year.ganZhi)
console.log('月柱:', result5.month.ganZhi)
console.log('日柱:', result5.day.ganZhi)
console.log('时柱:', result5.hour.ganZhi)
console.log('完整八字:', result5.full)
