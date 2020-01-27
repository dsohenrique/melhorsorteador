function sortear() {
    let numeros = []
    const selector = (element) => document.querySelector(element)
    const quantidadeNumeros = selector('#qtd-numbers').value
    const inicial = selector('#initial-value').value
    const final = selector('#final-value').value
    const inputSortedNumber = selector('#sorted-number')

    while (numeros.length < quantidadeNumeros) {
        let aleatorio = Math.floor(Math.random() * final + inicial)

        if (numeros.indexOf(aleatorio) == -1)
            aleatorio == 0 && inicial != 0 ? numeros.push(aleatorio + 1) : numeros.push(aleatorio)
    }

    inputSortedNumber.value = numeros.sort()
}