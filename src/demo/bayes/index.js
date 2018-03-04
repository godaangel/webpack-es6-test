import HashMap from './HashMap';

function Bayes($data){
  this._DATA = $data;
}
Bayes.prototype = {
  /**
   * 将训练数据单条数据按类别分类
   * @return HashMap<类别，对用类别的训练数据>
   */
  dataOfClass: function() {
    var map = new HashMap();
    var t = [], c = '';
    var datas = this._DATA;
    if(!(datas instanceof Array)) return;
    for(var i = 0; i < datas.length; i++){
      t = datas[i];
      c = t[t.length - 1];
      if(map.hasKey(c)){
        var ot = map.get(c);
        ot.push(t);
        map.put(c, ot);
      }else{
        var nt = [];
        nt.push(t);
        map.put(c, nt);
      }
    }
    return map;
  },
  /**
   * 预测测试数据的类别
   * @param Array testT 测试数据
   * @return String 测试数据对应类别
   */
  predictClass: function(testT){
    var doc = this.dataOfClass();
    var maxP = 0, maxPIndex = -1;
    var classes = doc.keys();
    for(var i = 0; i < classes.length; i++){
      var c = classes[i]
      var d = doc.get(c);
      var pOfC = d.length / this._DATA.length;
      for(var j = 0; j < testT.length; j++){
        var pv = this.pOfV(d, testT[j], j);
        pOfC = pOfC * pv;
      }
      if(pOfC > maxP){
        maxP = pOfC;
        maxPIndex = i;
      }
    }
    if(maxPIndex === -1 || maxPIndex > doc.length){
      return '无法分类';
    }
    return classes[maxPIndex];
  },
  /**
   * 计算指定属性在训练数据中指定值出现的条件概率
   * @param d     属于某一类的训练元组
   * @param value 指定属性
   * @param index 指定属性所在列
   * @return 特征属性在某类别下的条件概率
   */
  pOfV: function(d, value, index){
    var p = 0, count = 0, total = d.length, t = [];
    for(var i = 0; i < total; i++){
      if(d[i][index] === value)
        count++;
    }
    p = count / total;
    return p;
  } 
}

export default Bayes;