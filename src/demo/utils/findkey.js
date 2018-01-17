/**
 * 该函数用来找到对象中是否存在key，并且返回该key的值
 * warrenyang@tencent.com
 * 2018-01-17
 */
var FindKey = function(key, obj) {
  let flag = null; // 对应值是否存在
  for (let i in obj) {
    if (i === key) {
      // 如果存在对应值，则返回该值所在的对象
      flag = obj[i];
      break;
    } else if (typeof obj[i] == 'object' && obj[i].length != 0) {
      // 如果有子对象，则继续往下寻找，并将返回值交给flag
      flag = FindKey(key, obj[i]);
    } else {
      continue;
    }
    // 如果存在value，则停止for循环
    if (flag) {
      break;
    }
  }
  return flag;
}

export default FindKey;