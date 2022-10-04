(()=> {
    const cal = (prices: number[]): string => {
        let total = 0;
    prices.forEach(item => {
        total+= item;
    });
    return total.toString();
    }

    const printT = (prices: number[]): void => {
        const res = cal(prices);
        console.log(`el total es ${res}`);
        
    }
    const res = cal([1,3,5,7])
    console.log(res);
    printT([2,4,6,8]);
    
})();