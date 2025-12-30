console.log("Các số Armstrong có 3 chữ số là:");

    for (let i = 100; i <= 999; i++) {
        let a = Math.floor(i / 100);        
        let b = Math.floor((i % 100) / 10); 
        let c = i % 10; 

        if (a*a*a + b*b*b + c*c*c === i) {
            console.log(i);
        }
    }