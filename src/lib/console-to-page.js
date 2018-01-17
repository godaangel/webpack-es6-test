/**
 * 输出到页面的工具
 * 引入方式 import Ctp from './lib/console-to-page';
 * 调用方式 Ctp('输出的文字: ', '我是输出的文字')
 */
var Ctp = function(...arg){
  let msgDiv = document.getElementById('ctpMsg');
  if(!msgDiv){
    msgDiv = document.createElement('div');
    msgDiv.id = 'ctpMsg';
    document.body.appendChild(msgDiv);
  }
  let html = '';
  let log = '';
  for(let i in arg){
    if(typeof arg[i] == 'object'){
      html += `<p>${JSON.stringify(arg[i])}</p>`;
    }else{
      html += `<p>${arg[i]}</p>`;
    }
    console.log(arg[i])
  }
  
  msgDiv.innerHTML += html;
}

export default Ctp;