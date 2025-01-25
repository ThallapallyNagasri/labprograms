function doubleAfterEverySecond(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubled = n * 2;
            resolve(doubled);
        }, 1000); 
    });
}

async function display() {
    let a=await doubleAfterEverySecond(10);
    let b=await doubleAfterEverySecond(20);
    let c=await doubleAfterEverySecond(30);
    console.log(a+b+c)  
}

display();
