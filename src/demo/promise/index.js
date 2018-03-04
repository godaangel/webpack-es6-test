/**
 * 在前端的开发实践中，我们有时会遇到需要发送多个请求并根据请求顺序返回数据的需求，比如，我们要发送a、b、c三个请求，这三个请求返回的数据分别为a1、a2、a3，而我们想要a1、a2、a3按照我们希望的顺序返回。那么，使用Promise.all()方法可以完美的解决这一问题。
 */
import Ctp from '@/lib/console-to-page';
//模拟异步请求的函数
let request = (name, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random()
            if (random >= 0.2) {
                resolve(`${name}成功了`)
            } else {
                reject(`${name}失败了`)
            }
        }, time)    
    })
}

//构建三个Promise实例
let a = request('小明')
let b = request('小红',1000)
let c = request('小华')

//使用Promise.all(), 注意它接收的是一个数组作为参数, 可以控制请求顺序 
Promise.all([b,a,c]).then(result => {
    Ctp(result)
}).catch(result => {
    Ctp(result)
});