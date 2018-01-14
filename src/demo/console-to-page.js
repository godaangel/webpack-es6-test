/**
 * 输出到页面的工具
 */
var Ctp = function(...arg){
  let html = '';
  let log = '';
  for(let i in arg){
    html += `<p>${arg[i]}</p>`;
    log += `${arg[i]}\n`;
  }
  console.log(log);
  document.getElementById('msg').innerHTML += html;
}

export default Ctp;