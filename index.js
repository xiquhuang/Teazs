function generateRandomWord(length) {
  // 生成一个包含所有字母的数组
  const letters = "abcdefghijklmnopqrstuvwxyz";

  // 生成一个随机数，作为单词的长度
  const wordLength = Math.floor(Math.random() * length) + 1;

  // 生成一个空字符串
  let word = "";

  // 循环生成随机字母
  for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    word += letters[randomIndex];
  }

  // 返回生成的随机单词
  return word;
}

// 使用示例
const word = generateRandomWord(10);
console.log(word); // 输出： "qazwsxedcr"