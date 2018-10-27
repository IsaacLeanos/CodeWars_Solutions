function descendingOrder(n){
  var nString=n.toString()
  var nArray=nString.split('')
  nArray.sort((a,b)=>{
    return b>a
  })
  var sorted=nArray.join('')
  return parseInt(sorted)
}

descendingOrder(126345);
