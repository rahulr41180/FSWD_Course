
var totalFruit = function(fruits) {
    
    let low = 0;
    let max_length = -1;
    let hashMap = new Map();
    for(let high = 0; high < fruits.length; high++) {

        hashMap.set(fruits[high], (hashMap.get(fruits[high]) || 0) + 1);

        while(hashMap.size > 2) {
            hashMap.set(fruits[low], hashMap.get(fruits[low]) - 1);
            if(hashMap.get(fruits[low]) === 0) {
                hashMap.delete(fruits[low]);
            }
            low++;

        }

        let len = high - low + 1;
        max_length = Math.max(len, max_length);


    }

    return max_length;

};

console.log(totalFruit([0,1,2,2]))