/** 
 * promise链式调用示例
 * @Author   Warrenyang
 * @DateTime 2018-03-02
 */
import Ctp from '@/lib/console-to-page';

let love = new Promise((resolve, reject) => {
    setTimeout(() => {
        let happy = Math.random() >= 0.3 ? true : false
        if ( happy ) {
            resolve('marry')
        } else {
            reject('break')
        }    
    }, 500)
})

let haveChild = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('孩子生了！') 
    }, 1000)
})

love.then(result => {
    Ctp('恋爱阶段:', result)
    return haveChild  // 这里返回一个Promise对象,它的resolve会被下一个then捕捉
}).then(result => {
    Ctp('结婚后:', result)
    return '最后，他们白头偕老！' //这里返回的字符串会传给下一个then
}).then(result => {
    Ctp('结婚后:', result)
}).catch(error => { 
    Ctp('恋爱阶段:',error)
})