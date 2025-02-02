let dice1: number
let dice2: number
let attempts = 0

do {
  dice1 = Math.floor(Math.random() * 6) + 1
  dice2 = Math.floor(Math.random() * 6) + 1
  attempts++
  console.log(`第 ${attempts} 次嘗試：骰子1 = ${dice1}, 骰子2 = ${dice2}`)
} while (dice1 !== dice2)

console.log(`總共擲了 ${attempts} 次才骰到一樣的點數！點數為：${dice1}`)