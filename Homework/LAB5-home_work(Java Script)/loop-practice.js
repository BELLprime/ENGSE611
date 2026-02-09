function loop() {
    console.clear () ;
    const output = [] ;
    let maxNumber = 10 ;
    
    for (let i=0 ; i <= maxNumber ; i++) {
        if (i%2 == 0) {
            output.push(i + " (คู่)");
            console.log("%d (คู่)" , i);
        } else {
            output.push(i + " (คี่)");
            console.log("%d (คี่)" , i);
        } 
    }
    for (let i=0 ; i <= maxNumber ; i += 2) {
        output.push("นับทีละ 2: " + i);
        console.log("นับทีละ 2: %d" , i);
    }
    for (let i=maxNumber ; i >=0 ; i--) {
        output.push("ถอยหลัง: " + i);
        console.log("ถอยหลัง: %d" , i);
    }


    document.getElementById("output").innerHTML = output.join("<br>");
}
document.getElementById("btn").addEventListener("click", loop);