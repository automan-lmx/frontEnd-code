Promise.myRace = function(proms) {
    let res, rej
    const p = new Promise((resolve, reject) => {
      res = resolve
      rej = reject
    })
 
    for (const prom of proms) {
       Promise.resolve(prom).then(res).catch(rej)
    }
    return p
}

Promise.myRace([Promise.resolve(123),2,1]).then(res => {
    console.log(res)
},
err => {
    console.log('err', err)
}
)