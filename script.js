// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA)//output: 91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return `O numero ${numero} pertence à sequência de Fibonacci.`;
    }

    let c = a + b;

    while (c <= numero) {
        if (c === numero) {
            return `O numero ${numero} pertence à sequência de Fibonacci`;
        }

        a = b;
        b = c;
        c = a + b;
    }

    return `O numero ${numero} não pertence à sequencia de Fibonacci`
}

const digiteUmNumero = 22;
console.log(pertenceFibonacci(digiteUmNumero))

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoJson = [
    {"dia": 1, "faturamento": 2200},
    {"dia": 2, "faturamento": 3100},
    {"dia": 3, "faturamento": 4500},
    {"dia": 4, "faturamento": 3800},
    {"dia": 5, "faturamento": 2900},
    {"dia": 6, "faturamento": null},
    {"dia": 7, "faturamento": 3300},
    {"dia": 8, "faturamento": 0},
    {"dia": 9, "faturamento": 4900},
    {"dia": 10, "faturamento": 2700},
    {"dia": 11, "faturamento": 3200},
    {"dia": 12, "faturamento": null},
    {"dia": 13, "faturamento": 4700},
    {"dia": 14, "faturamento": 3800},
    {"dia": 15, "faturamento": 3900},
    {"dia": 16, "faturamento": 4100},
    {"dia": 17, "faturamento": 3000},
    {"dia": 18, "faturamento": 3400},
    {"dia": 19, "faturamento": 4200},
    {"dia": 20, "faturamento": 3100},
    {"dia": 21, "faturamento": null},
    {"dia": 22, "faturamento": 3700},
    {"dia": 23, "faturamento": 4400},
    {"dia": 24, "faturamento": 4600},
    {"dia": 25, "faturamento": 4800},
    {"dia": 26, "faturamento": 5000},
    {"dia": 27, "faturamento": null},
    {"dia": 28, "faturamento": 3500},
    {"dia": 29, "faturamento": 4300},
    {"dia": 30, "faturamento": null}
];

function calcularFaturamento(faturamentoJson) {

    const faturamentos = JSON.parse(faturamentoJson);

    const faturamentosValidos = faturamentos.filter(item => item.faturamento !== null && item.faturamento > 0);

    if (faturamentosValidos.length === 0) {
        return {
            menorValor: null,
            maiorValor: null,
            diasAcimaDaMedia: 0
        };
    }

    const valores = faturamentosValidos.map(item => item.faturamento);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const somaTotal = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaTotal / valores.length;

    const diasAcimaDaMedia = faturamentosValidos.filter(item => item.faturamento > mediaMensal).length;

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoJson);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

function calcularPercentuais(faturamento) {

    //calcular o total de faturamento
    let totalFaturamento = 0;
    for (let estado in faturamento) {
        totalFaturamento += faturamento[estado]
    }
    //calcula o percentual dos estados
    let percentuais = {}
    for (let estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%'
    }
    return percentuais;
}

let faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

//faz uma chamda da função e exibe o resultado
let resultados = calcularPercentuais(faturamentoMensal);

console.log("Percentual de representação por estado:");
for (let estado in resultados) {
    console.log(`${estado}: ${resultados[estado]}`);
}
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
let entrada = "Javascript"
let resultadoInvertido = inverterString(entrada)

console.log(`String original: ${entrada}`)
console.log(`String original: ${resultado}`)