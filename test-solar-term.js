// 测试节气计算
import { getBaZi } from './src/utils/wuxing.js'

// 测试立秋前后的日期
console.log('测试 1997年8月6日12时 (立秋前):')
const result1 = getBaZi(1997, 8, 6, 12)
console.log('年柱:', result1.year.ganZhi)
console.log('月柱:', result1.month.ganZhi)
console.log('日柱:', result1.day.ganZhi)
console.log('时柱:', result1.hour.ganZhi)
console.log('完整八字:', result1.full)
console.log('------------------------')

console.log('测试 1997年8月7日12时 (立秋当天):')
const result2 = getBaZi(1997, 8, 7, 12)
console.log('年柱:', result2.year.ganZhi)
console.log('月柱:', result2.month.ganZhi)
console.log('日柱:', result2.day.ganZhi)
console.log('时柱:', result2.hour.ganZhi)
console.log('完整八字:', result2.full)
console.log('------------------------')

console.log('测试 1997年8月8日12时 (立秋后):')
const result3 = getBaZi(1997, 8, 8, 12)
console.log('年柱:', result3.year.ganZhi)
console.log('月柱:', result3.month.ganZhi)
console.log('日柱:', result3.day.ganZhi)
console.log('时柱:', result3.hour.ganZhi)
console.log('完整八字:', result3.full)
console.log('------------------------')
