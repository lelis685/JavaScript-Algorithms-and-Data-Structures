function countUniqueValues(arr){
   if(arr.length == 0){
      return 0;
   }
   
   let right = 0;
   let left = 1;
   let unique = 1;
   
   while(left < arr.length){
      if(arr[right] != arr[left]){
         unique++;
      }
      right++;
      left++;
   }
   return unique;
}

console.log(countUniqueValues([]));
