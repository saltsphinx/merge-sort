function mergeSort(arr = [])
{
  if (arr.length <= 1)
    {
      return arr;
    }
  
  const mergedArr = [];
  const [left, right] = [mergeSort(arr.slice(0, arr.length / 2)), mergeSort(arr.slice(arr.length / 2))];
  
  while(left.length >= 1 || right.length >= 1)
    {
      if (left.length < 1)
        {
          mergedArr.push(right.shift());
        }
      else if(right.length < 1 )
        {
          mergedArr.push(left.shift());
        }
      else
        {
          left[0] <= right[0] ? mergedArr.push(left.shift()) : mergedArr.push(right.shift());
        }
    }
  
  return mergedArr;
}