let num = []

for (let i = 0; i < 10; i++) {
    num[i] = Number(prompt("digite um numero:"))

    if(num[i] < 0){
        console.log(num[i])
    }
}