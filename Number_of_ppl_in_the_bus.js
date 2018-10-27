var number = function(busStops){
    var people=0;
    busStops.forEach(item=>{
      return count(item);
    })
  
    function count(arr){
      var add=arr[0];
      var remove=arr[1];
      var total=add-remove;
      people+=total
    }
    return people;
  }
