let a = 7
let b = 11
for (let i = 1; i <= a * b; i++) {
  if (i % a === 0 && i % b === 0) {
    console.log(`最小公倍數是 ${i}`)
    break // 找到後立即終止迴圈
  }
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      continue // 跳過 3 的倍數
    }
    console.log(i)
  }