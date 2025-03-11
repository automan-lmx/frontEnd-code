Promise.myAll = function(promise) {
  let res, rej
 const p = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
 })
   
    let i = 0, result = [], fullfilled = 0
     // 因为promise 不一定是一个数组，所以要用 const of 可以遍历很多类型 如 Set
    for (const item of promise) {
      const index = i
      i++
      Promise.resolve(item).then((data)=>{  // Promise.resolve(item) Promise包裹起来是因为 item 可能是基础数据类型
        // 1.完成数据汇总到最终结果
        // 判定是否全部完成
        result[index] = data
        fullfilled++
        if(fullfilled === i) {
            res(result)
        }
    },rej)
    }
 if(i === 0) {
    res([])
 }
 return p
}

Promise.myAll([1,2,3, Promise.resolve(123)]).then(
    res=>{
    console.log(res)
   },
   (err) => {
    console.log('err', err)
   }
)