function fibonaci(num)
    {
      const list = [];
      for(var i = 0; i < num; i++)
      {
        if(i < 2){list.push(i); }
        else
        {
          var x = list[i -1] + list[i -2];
          list.push(x);
        }
      }
      return list;
    }
console.log(fibonaci(20));