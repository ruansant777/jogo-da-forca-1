let palavras = ["python", "desenvolvimento", "programacao", "inteligencia", "artificial", "algoritmo"];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
let letrasCorretas = [];
let letrasErradas = [];
let tentativas = 6;

function exibirPalavra() {
    let exibir = palavra.split("").map(letra => letrasCorretas.includes(letra) ? letra : "_").join(" ");
    document.getElementById("palavra").textContent = exibir;
}

function verificarLetra() {
    const letra = document.getElementById("inputLetra").value.toLowerCase();

    if (letra === "" || letra.length > 1) {
        return;
    }

    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
        document.getElementById("mensagem").textContent = "Você já tentou essa letra!";
        return;
    }

    if (palavra.includes(letra)) {
        letrasCorretas.push(letra);
        if (!palavra.split("").some(letra => !letrasCorretas.includes(letra))) {
            document.getElementById("mensagem").textContent = "Parabéns! Você adivinhou a palavra!";
        }
    } else {
        letrasErradas.push(letra);
        tentativas--;
        document.getElementById("mensagem").textContent = "Letra errada!";
    }

    document.getElementById("tentativas").textContent = tentativas;
    document.getElementById("letrasErradas").textContent = letrasErradas.join(", ");
    exibirPalavra();

    if (tentativas === 0) {
        document.getElementById("mensagem").textContent = "Você perdeu! A palavra era: " + palavra;
    }
}

exibirPalavra();
document.getElementById("tentativas").textContent = tentativas;

