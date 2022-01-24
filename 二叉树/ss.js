var SS = function ()  {
  this.a = 1
  return this
}
let ss = new SS()
let p4 = new Array()
console.log(ss.constructor === SS.prototype.constructor)
console.log(typeof SS.prototype)


class Person {
  constructor() {
    this.id = 1
  }
}
let p1 = new Person()
let p2 = new Person.constructor()
let p3 = new p1.constructor()


console.log(p1.constructor.constructor === p2.constructor)
console.log(p1 === Person.prototype)
console.log(p1.id)
console.log(p1.constructor)
console.log(p3.constructor === p1.constructor)
console.log(p4.constructor)
console.log(Array.prototype.constructor)


var object = {
  name : "My Object",
  getNameFunc : function(){
      let name = 1
      console.log(this.name)
    }

  }

object.getNameFunc()
console.log(object.name)
console.log(Promise)

let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log(x));

const demo = async ()=>{
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('我延迟了一秒')
      return resolve(1)
    },1000)
  })
  console.log('我由于上面的程序还没执行完，先不执行“等待一会”');
  return result
}
demo().then(result=>{
  console.log('输出',result);
})

console.log(2)
