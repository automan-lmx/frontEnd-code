/**
 *
 * 给定长度为N(1≤N≤2000)的字符串S，要构造一个长度为N的字符串T。期初，T是一个空串，随后反复进行下列任意操作。
 *   ◦ 从S的头部删除一个字符，加到T的尾部
 *   ◦ 从S的尾部删除一个字符，加到T的尾部
 * 目标是要构造字典序尽可能小的字符串
 */

function constructMinimalString(S) {
  let T = "";
  while (S.length > 0) {
    let i = 0;

    // 比较头尾字符，找到第一个不相等的位置
    while (i < S.length - 1 && S[i] === S[S.length - 1 - i]) {
      i++;
    }

    // 如果头部字符小于或等于尾部字符，从头部取字符；否则从尾部取字符
    if (S[i] <= S[S.length - 1 - i]) {
      T += S[0];
      S = S.substring(1);
    } else {
      T += S[S.length - 1];
      S = S.substring(0, S.length - 1);
    }
  }
  return T;
}

// 示例
let S = "your_input_string_here";
let T = constructMinimalString(S);
console.log(T);
