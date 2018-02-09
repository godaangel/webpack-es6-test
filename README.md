# webpack-es6-test  

npm install  
npm run dev  

愉快的写吧~

导出了一些工具函数，持续更新ing

#### Find-查找  
  * 该函数用来寻找对象中的key或者value是否存在
  * 如果 type 为 key，则查找存在的key并返回对应的值
  * 如果 type 为 value，则查找value所在的对象并返回该对象
  * type 默认为 value  

##### 用法
```javascript
  /*
  * @param    {object}   value 目标值
  * @param    {object}   source 数据源 
  * @param    {boolean}  type 类型
  */
  import {Find} from 'main.min.js';
  let result = Find('name', obj, 'key');
  let result_value = Find('三塔公园', obj);
```

#### IsSameObj-判断对象是否相同  
  * 检查是否为同一对象，可以使用深度检查  

##### 用法
```javascript
  /*
  * @param    {object}   obj_1 
  * @param    {object}   obj_2 
  * @param    {boolean}  deep 是否深度检查，默认false
  */
  import IsSameObj from 'main.min.js';
  let isSame = IsSameObj(obj_1, obj_2, true);
  console.log(isSame);
```
