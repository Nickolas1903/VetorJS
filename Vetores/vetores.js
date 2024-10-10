let a = [], b = [], c = []

for (let i = 0; i < 5; i++) {
    a[i] = Number(prompt("Digite um numero:"))

    b[i] = parseInt(Math.random() * 5 + 1)

    c[i] = a[i] * b[i]
}

for(let rep = 0; rep < 5; rep++){
    console.log(c[rep])
}