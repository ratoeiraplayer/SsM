document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buscarBtn").addEventListener("click", buscarImagem);
});

function buscarImagem() {
    let local = document.getElementById("Local").value.trim().toLowerCase();
    let imagem = document.getElementById("imagemResultado");

    // Validação básica: campos vazios
    if (!local) {
        alert("Por favor, preencha corretamente.");
        return;
    }

    // Rotas a partir de Sala 12
    if (local === "sala 12") {
        imagem.src = "./imagens/horarios/h_sala12.jpeg";
    } else if (local === "sala 13") {
        imagem.src = "./imagens/horarios/h_sala13.jpeg";
    } else if (local === "sala 14") {
        imagem.src = "./imagens/horarios/h_sala14.jpeg";
    } else if (local === "sala 15") {
        imagem.src = "./imagens/horarios/h_sala15.jpeg";
    } else if (local === "sala 16") {
        imagem.src = "./imagens/horarios/h_sala16.jpeg";
    } else if (local === "sala 17") {
        imagem.src = "./imagens/horarios/h_sala17.jpeg";
    } else if (local === "sala 18") {
        imagem.src = "./imagens/horarios/h_sala18.jpeg";
    } else if (local === "sala 19") {
        imagem.src = "./imagens/horarios/h_sala19.jpeg";
    } else if (local === "sala 20") {
        imagem.src = "./imagens/horarios/h_sala20.jpeg";
    } else if (local === "sala 21") {
        imagem.src = "./imagens/horarios/h_sala21.jpeg";
    } else if (local === "sala 22") {
        imagem.src = "./imagens/horarios/h_sala22.jpeg";
    } else if (local === "sala 23") {
        imagem.src = "./imagens/horarios/h_sala23.jpeg";
    } else if (local === "sala 24") {
        imagem.src = "./imagens/horarios/h_sala24.jpeg";
    } else if (local === "sala 25") {
        imagem.src = "./imagens/horarios/h_sala25.jpeg";
    } else if (local === "sala 26") {
        imagem.src = "./imagens/horarios/h_sala26.jpeg";
    } else if (local === "sala 27") {
        imagem.src = "./imagens/horarios/h_sala27.jpeg";
    } else if (local === "sala 28") {
        imagem.src = "./imagens/horarios/h_sala28.jpeg";
    } else if (local === "sala 29") {
        imagem.src = "./imagens/horarios/h_sala29.jpeg";
    } else if (local === "sala 30") {
        imagem.src = "./imagens/horarios/h_sala30.jpeg";
    } else if (local === "museu") {
        imagem.src = "./imagens/horarios/h_museu.jpeg";
    } else {
        alert("Local não encontrado. Tente outro.");
        imagem.src = "./imagens/horarios/h_erro.jpeg";
    }

    // Mostrar a imagem
    if (imagem.src) {
        imagem.style.display = "block";
    }
}