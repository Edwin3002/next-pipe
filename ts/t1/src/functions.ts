function suma (a, b){
    return a + b
}

console.log(suma(3,4));

(() => {
    function menos(
        title: string,
        cretatedAt: Date,
        stock?: number,
        size: string | undefined
    ){
        return{
            title, cretatedAt,stock,size
        }
    }
    const res = menos('a', 1, 'as', 2)
})();