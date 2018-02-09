/**
 * 该函数用来寻找对象中的key或者value是否存在
 * 如果 type 为 key，则查找存在的key并返回对应的值
 * 如果 type 为 value，则查找value所在的对象并返回该对象
 * type 默认为 value
 *
 * 用法
 *   let result = Find('三塔倒影公园1', obj, 'key');
 *   console.log(result);
 * 
 * @Author   Warrenyang
 * @DateTime 2018-01-17
 * @version  1.0.0
 * @param    {String}   needFind 需要查找的字符串
 * @param    {Object}   obj      数据源对象
 * @param    {String}   type     查找的类型(key or value)
 */
var Find = function(needFind, obj, type = 'value') {
  let flag = null; // 对应值是否存在
  for (let i in obj) {
    if (type == 'key' && i === needFind) {
      // 如果存在对应key，则返回该key对应的值
      flag = obj[i];
      break;
    }else if (type == 'value' && obj[i] === needFind) {
      // 如果存在对应值，则返回该值所在的对象
      flag = obj;
      break;
    } else if (typeof obj[i] == 'object' && obj[i].length != 0) {
      // 如果有子对象，则继续往下寻找，并将返回值交给flag
      flag = Find(needFind, obj[i], type);
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

export default Find;