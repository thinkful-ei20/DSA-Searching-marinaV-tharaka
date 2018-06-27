// [128, 97, 121, 123, 98, 97, 105]
//Can't sell in past days
//Compare each day with the rest of the existing days.
//Cant sell in the first and last day

const maxProfit = function(stockArr) {

    let maxProfitNum = 0;//Maximum profit
    let bestDay = stockArr[1];//Best day to but the stocks.

    //go through the days
    for(let i = 0; i < stockArr.length - 1; i++) {
        let currentaVal = stockArr[i];//128
        for(let j = i + 1; j < stockArr.length; j++) {
            if((stockArr[j] > currentaVal) && (stockArr[j] - currentaVal > maxProfitNum))  {
                maxProfitNum = stockArr[j] - currentaVal;
            }
        }
    }

    return maxProfitNum;
}

// const maxProfit2 = function(stockArr) {
//     //base case
//     if(stockArr.length === 0) {
//         return 0;
//     }
// }

let stockDays = [128, 97, 121, 123, 98, 97, 105];

console.log(maxProfit(stockDays));

