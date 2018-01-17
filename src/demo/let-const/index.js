/**
 * let和const的用法
 */
import Ctp from '@/lib/console-to-page';

/**
 * 测试let和var的作用域
 * @Author   Warrenyang
 * @DateTime 2018-01-16
 */
var letRange = function(){
  {
    //let和var在同一个域
    let a = 10;
    var b = 1;
  }

  try {
    Ctp(a,b);
  }catch(e){
    Ctp(e.message);
  }
}

export {
  letRange
}