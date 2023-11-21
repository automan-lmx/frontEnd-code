function convertToDecimal(numberStr, base) {
  return parseInt(numberStr, base);
}

// 示例用法
let binaryNumber = "1010"; // 二进制数字
console.log(convertToDecimal(binaryNumber, 2)); // 转换为十进制

let hexadecimalNumber = "1A"; // 十六进制数字
console.log(convertToDecimal(hexadecimalNumber, 16)); // 转换为十进制
