// 計算以下數值：
// 1. 2 的 10 次方（使用 BigInt）
// 2. 計算結果是否大於 Number.MAX_SAFE_INTEGER
// 3. 將結果轉換為字串

let result = BigInt(2) ** BigInt(10);
let isLarger = result > BigInt(Number.MAX_SAFE_INTEGER);
let resultString = let resultString = result.toString();