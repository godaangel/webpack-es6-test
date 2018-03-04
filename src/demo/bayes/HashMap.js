function HashMap(obj) {
  this.length = 0;
  this.obj = new Object();
}
HashMap.prototype = {
  isEmpty: function(){
    return this.length === 0;
  },
  hasKey: function(key){
    return (key in this.obj);
  },
  hasVal: function(val){
    for(var key in this.obj){
      if(this.obj[key] === value){
        return true;
      }
    }
    return false;
  },
  put: function(key, value){
    if(!this.hasKey(key)){
      this.length++;
    }
    this.obj[key] = value;
  },
  get: function(key){
    return this.obj[key];
  },
  remove: function(key){
    if(this.hasKey(key) && delete this.obj[key]){
      this.length--;
    }
  },
  keys: function(){
    var _keys = new Array();
    for(var key in this.obj){
      _keys.push(key);
    }
    return _keys;
  },
  values: function(){
    var _vals = new Array();
    for(var key in this.obj){
      _vals.push(this.obj[key]);
    }
    return _vals;
  },
  size: function(){
    return this.length;
  },
  clear: function() {
    this.length = 0;
    this.obj = new Object();
  }
}

export default HashMap;