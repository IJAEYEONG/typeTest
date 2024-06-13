
function sumArray(numbers:number[]):number{
  return numbers.reduce((acc,current)=>acc+current,0)
}
const total =sumArray([1,2,3,4,5])
console.log(total)
interface Solution<T>{
  forEach(callback:(item:T)=>void):void
}
const c:Solution<number>=[1,2,3]
c.forEach((item)=>{
  console.log(item);
  item.toFixed(1);
})
const b:Solution<String>=["1","2","3"]
b.forEach((item)=>{
  console.log(item)
  item.charAt(1)
})