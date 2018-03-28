import Ctp from '@/lib/console-to-page';

function fn() {
    return new Promise((resolve, reject) => {
        console.log('start')
        setTimeout(() => {
            resolve('success')
        },3000)
    })
}

function fn2() {
    return new Promise((resolve, reject) => {
        console.log('start2')
        setTimeout(() => {
            resolve('success2')
        },1000)
    })
}

let test = async function() {
    let result = await fn() //因为fn会返回一个Promise对象
    console.log('fffffffff')
    Ctp('await ------>', result)    //这里会打出Promise成功后传递过来的'success'
    
    let result2 = await fn2()
    Ctp('await2 ------>', result2)
}

test().then(() => {
  console.log('then');
});