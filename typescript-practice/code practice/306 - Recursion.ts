function fibonacci(n) {// 實作斐波那契數列
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // 測試範例
  console.log(fibonacci(0)); // 0
  console.log(fibonacci(1)); // 1
  console.log(fibonacci(5)); // 5
  console.log(fibonacci(10)); // 55