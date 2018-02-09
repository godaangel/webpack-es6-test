/**
 * 用法
 *   import IsSameObj from 'demo/utils/sameObj';
 *   let isSame = IsSameObj(obj_1, obj_2, true);
 *   console.log(isSame);
 * 
 * 检查是否为同一对象，可以使用深度检查
 * @Author   Warrenyang
 * @DateTime 2018-02-09
 * @param    {object}   obj_1 
 * @param    {object}   obj_2 
 * @param    {boolean}  deep 是否深度检查，默认false
 * @return   {boolean}       返回是否相同
 */
var IsSameObj = function(obj_1, obj_2, deep = false) {
  let obj_1_props = Object.getOwnPropertyNames(obj_1);
  let obj_2_props = Object.getOwnPropertyNames(obj_2);
  // 如果长度不符，则返回false
  if (obj_1_props.length != obj_2_props.length) {
    return false;
  }
  //遍历每个元素
  for (let i in obj_1_props) {
    let propName = obj_1_props[i];
    let item1 = obj_1[propName];
    let item2 = obj_2[propName];

    if (item1 !== item2 && (typeof item1 != 'object') && (typeof item2 != 'object')) {
      // 如果两个都是非对象且不相等
      return false;
    }else if(deep && ((typeof item1 == 'object') || (typeof item2 == 'object'))){
      // 如果是深度遍历且至少有一个是对象
      if(!IsSameObj(item1, item2, deep)){
        return false;
      }
    }else if(!deep && item1 !== item2 && ((typeof item1 == 'object') || (typeof item2 == 'object'))){
      // 如果非深度遍历且至少一个是对象，两个不相等
      return false;
    }
  }

  return true;
}

export default IsSameObj;