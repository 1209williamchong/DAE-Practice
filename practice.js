// 實作簡單計算機功能，計算：
// 1. 兩件商品的總價
// 2. 折扣後的價格（八折）
// 3. 平均價格
let item1 = 199
let item2 = 299

let total = item1 + item2
let discount = 0.8 * total
let average = discount / 2



// 將攝氏溫度轉換為華氏溫度
// 公式：°F = °C × 9/5 + 32
let celsius = 10
let fahrenheit = celsius * 9/5 + 32



// 實作發票對獎程式
// 特別獎號碼：12345678
// 使用者發票號碼：後三碼為 678
// 對中後三碼可得 200 元

let specialNumber = 12345678
let userNumber = 87654678

// 提示：可使用 % 運算子取得後三碼
let lastThreeDigits = userNumber % 1000
let isWinner = lastThreeDigits% 1000 == lastThreeDigits