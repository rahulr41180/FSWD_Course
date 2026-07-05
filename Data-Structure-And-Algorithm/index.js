
var characterReplacement = function(s, k) {

      function findMaxCount(charArr) {
            let max = -Infinity;
            for(let i = 0; i<charArr.length; i++) {
                  if(charArr[i] > max) {
                        max = charArr[i];
                  }
            }
            return max;
      }
    
      let charArr = new Array(256).fill(0);
      let low = 0;
      let high = 0;
      let res = 0;
      for(high; high<s.length; high++) {
            charArr[s[high].charCodeAt(s[high])]++;
            let len = high - low + 1;
            let maxCount = findMaxCount(charArr);
            let diff = len - maxCount;
            while(diff > k) {
                  charArr[s[low].charCodeAt(s[low])]--;
                  low++;
                  len = high - low + 1;
                  maxCount = findMaxCount(charArr);
                  diff = len - maxCount;
            }

            res = Math.max(len, res);
      }
      
      return res;
};

console.log(characterReplacement('ABAB', 2));