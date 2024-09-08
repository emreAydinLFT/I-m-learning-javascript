function divide(a, b) {
    try{
        if(b === 0){
            throw new Error('bölme hatası : bölmenin sıfır olması mümkün değil')
        }
        return a / b ;
    }catch(e){
        console.error(e.message);
        return n
    }
}