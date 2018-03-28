/**
 * 装饰器调用示例
 */
import Ctp from '@/lib/console-to-page';

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor)
  descriptor.writable = true;
  return descriptor;
}

function small(target, name, descriptor) {
  descriptor.value = function(name){
    Ctp('My name is ' + name);
  };
  return descriptor;
}

// function kitty()

class Cat {
  // @readonly
  @small
  say() {
    Ctp("meow ~");
  }
}
var cat = new Cat();
// cat.say = function() {
//   Ctp("woof !");
// }
cat.say('kitty'); // meow ~