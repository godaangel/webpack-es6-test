/**
 * es6测试代码
 * 符号在webpack.config.js的alias里面配置 alias原理去百度吧~
 */
import Ctp from '@/lib/console-to-page'; // 导入输出工具
Ctp('欢迎使用es6代码编辑测试');
/**
 * 测试一下提交
 */

// study
import {letRange} from 'demo/let-const/index';
import Bayes from 'demo/bayes/index';

// utils
import FindValue from 'demo/utils/findvalue';
import FindKey from 'demo/utils/findkey';
import Find from 'demo/utils/find';
import IsSameObj from 'demo/utils/sameObj';

// 数据源
import Obj from 'demo/utils/testObj';

/**
 * 对象用于存放需要测试的方法，避免变量污染和页面过长
 */
const AllFunction = {
  /**
   * 查找方法集合
   */
  findInObj() {
    // 查找对象是否含有指定value
    let result = FindValue('三塔倒影公园1', Obj);
    Ctp('FindValue ----> ', result);

    // 查找对象是否含有指定key, 如果有数组需求，则多次调用吧先
    let result2 = FindKey('ticketIndex', Obj);
    Ctp('FindKey ----> ', result2);

    // 查找对象是否含有指定value
    let result3 = Find('无需排队', Obj);
    Ctp('Find ----> ', result3);

    // 查找对象是否含有指定key
    let result4 = Find('origin_url', Obj, 'key');
    Ctp('Find ----> ', result4);
  },
  /**
   * let const 集合
   */
  letConst() {
    // let const 的作用域
    letRange();
  },
  sameObj(){
    let obj_1 = {
      name: 'goda',
      age: {
        number: 20,
        haha: 134,
        name: {
          hah:123
        }
      }
    };

    let obj_2 = {
      name: 'goda',
      age: {
        number: 20,
        haha: 134,
        name: {
          hah:123
        }
      }
    }

    let isSame = IsSameObj(obj_1, obj_2, true);
    Ctp('IsSameObj ----> ', isSame);
    
  }
}

// AllFunction.letConst();
// AllFunction.findInObj();

// AllFunction.sameObj();

/**
 * 叶贝斯分类 start
 */
// import BTestData from 'demo/bayes/testData';
// var test = ['sunny', 'hot', 'high', 'FALSE'];

// var bayes = new Bayes(BTestData);
// var bayesResult = bayes.predictClass(test);

// Ctp('贝叶斯分类 bayesResult ----> ', bayesResult);
/**
 * 叶贝斯分类 end
 */

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        })
    })
}

let test = async function() {
    let result = await fn() //因为fn会返回一个Promise对象
    console.log(result)    //这里会打出Promise成功后传递过来的'success'
}

test()

// import 'demo/promise/index';

// import 'demo/promise/link';


