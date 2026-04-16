document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("BuscarBtn").addEventListener("click", buscarImagem);
});

function buscarImagem() {
    let origem = document.getElementById("origem").value.trim().toLowerCase();
    let destino = document.getElementById("destino").value.trim().toLowerCase();
    let imagem = document.getElementById("imagemResultado");

    // Valida��o b�sica: campos vazios
    if (!origem || !destino) {
        alert("Por favor, preencha origem e destino.");
        imagem.src = "imagens/salas/sala_falta.svg";
        return;
    }

    // Validao: origem e destino iguais
    if (origem === destino) {
        alert("Por favor, escolha locais diferentes.");
        imagem.src = "imagens/salas/sala_diferente.svg";
        return;
    }

    // Rotas a partir de Sala 12
    if (origem === "sala 12" && destino === "sala 13") {
        imagem.src = "imagens/salas/sala12/sala12_13.svg";
    } else if (origem === "sala 12" && destino === "sala 14") {
        imagem.src = "imagens/salas/sala12/Sala12_14.svg";
    } else if (origem === "sala 12" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala12/Sala12_15.svg";
    } else if (origem === "sala 12" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala12/Sala12_16.svg";
    } else if (origem === "sala 12" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala12/Sala12_17.svg";
    } else if (origem === "sala 12" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala12/Sala12_18.svg";
    } else if (origem === "sala 12" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala12/Sala12_19.svg";
    } else if (origem === "sala 12" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala12/Sala12_20.svg";
    } else if (origem === "sala 12" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala12/Sala12_21.svg";
    } else if (origem === "sala 12" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala12/Sala12_22.svg";
    } else if (origem === "sala 12" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala12/Sala12_23.svg";
    } else if (origem === "sala 12" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala12/Sala12_24.svg";
    } else if (origem === "sala 12" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala12/Sala12_25.svg";
    } else if (origem === "sala 12" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala12/Sala12_26.svg";
    } else if (origem === "sala 12" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala12/Sala12_27.svg";
    } else if (origem === "sala 12" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala12/Sala12_28.svg";
    } else if (origem === "sala 12" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala12/Sala12_29.svg";
    } else if (origem === "sala 12" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala12/Sala12_30.svg";
    } else if (origem === "sala 12" && destino === "museu") {
        imagem.src = "./imagens/salas/sala12/Sala12_museu.svg";
    } else if (origem === "sala 12" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala12/Sala12_WCf.svg";
    } else if (origem === "sala 12" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala12/Sala12_WCm.svg";


    } else if (origem === "sala 13" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala13/Sala13_12.svg";
    } else if (origem === "sala 13" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala13/Sala13_14.svg";
    } else if (origem === "sala 13" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala13/Sala13_15.svg";
    } else if (origem === "sala 13" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala13/Sala13_16.svg";
    } else if (origem === "sala 13" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala13/Sala13_17.svg";
    } else if (origem === "sala 13" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala13/Sala13_18.svg";
    } else if (origem === "sala 13" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala13/Sala13_19.svg";
    } else if (origem === "sala 13" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala13/Sala13_20.svg";
    } else if (origem === "sala 13" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala13/Sala13_21.svg";
    } else if (origem === "sala 13" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala13/Sala13_22.svg";
    } else if (origem === "sala 13" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala13/Sala13_23.svg";
    } else if (origem === "sala 13" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala13/sala13_24.svg";
    } else if (origem === "sala 13" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala13/sala13_25.svg";
    } else if (origem === "sala 13" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala13/sala13_26.svg";
    } else if (origem === "sala 13" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala13/sala13_27.svg";
    } else if (origem === "sala 13" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala13/sala13_28.svg";
    } else if (origem === "sala 13" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala13/sala13_29.svg";
    } else if (origem === "sala 13" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala13/sala13_30.svg";
    } else if (origem === "sala 13" && destino === "museu") {
        imagem.src = "./imagens/salas/sala13/sala13_museu.svg";
    } else if (origem === "sala 13" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala13/Sala13_WCf.svg";
    } else if (origem === "sala 13" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala13/sala13_WCm.svg";


        
    } else if (origem === "sala 14" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala14/Sala14_12.svg";
    } else if (origem === "sala 14" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala14/Sala14_13.svg";
    } else if (origem === "sala 14" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala14/sala14_15.svg";
    } else if (origem === "sala 14" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala14/sala14_16.svg";
    } else if (origem === "sala 14" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala14/sala14_17.svg";
    } else if (origem === "sala 14" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala14/Sala14_18.svg";
    } else if (origem === "sala 14" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala14/Sala14_19.svg";
    } else if (origem === "sala 14" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala14/Sala14_20.svg";
    } else if (origem === "sala 14" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala14/Sala14_21.svg";
    } else if (origem === "sala 14" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala14/Sala14_22.svg";
    } else if (origem === "sala 14" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala14/Sala14_23.svg";
    } else if (origem === "sala 14" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala14/Sala14_24.svg";
    } else if (origem === "sala 14" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala14/Sala14_25.svg";
    } else if (origem === "sala 14" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala14/Sala14_26.svg";
    } else if (origem === "sala 14" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala14/Sala14_27.svg";
    } else if (origem === "sala 14" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala14/Sala14_28.svg";
    } else if (origem === "sala 14" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala14/Sala14_29.svg";
    } else if (origem === "sala 14" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala14/Sala14_30.svg";
    } else if (origem === "sala 14" && destino === "museu") {
        imagem.src = "./imagens/salas/sala14/Sala14_museu.svg";
    } else if (origem === "sala 14" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala14/Sala14_WCf.svg";
    } else if (origem === "sala 14" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala14/Sala14_WCm.svg";


        
    } else if (origem === "sala 15" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala15/Sala15_12.svg";
    } else if (origem === "sala 15" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala15/Sala15_13.svg";
    } else if (origem === "sala 15" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala15/Sala15_14.svg";
    } else if (origem === "sala 15" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala15/Sala15_16.svg";
    } else if (origem === "sala 15" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala15/Sala15_17.svg";
    } else if (origem === "sala 15" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala15/Sala15_18.svg";
    } else if (origem === "sala 15" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala15/Sala15_19.svg";
    } else if (origem === "sala 15" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala15/Sala15_20.svg";
    } else if (origem === "sala 15" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala15/Sala15_21.svg";
    } else if (origem === "sala 15" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala15/Sala15_22.svg";
    } else if (origem === "sala 15" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala15/Sala15_23.svg";
    } else if (origem === "sala 15" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala15/Sala15_24.svg";
    } else if (origem === "sala 15" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala15/Sala15_25.svg";
    } else if (origem === "sala 15" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala15/Sala15_26.svg";
    } else if (origem === "sala 15" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala15/Sala15_27.svg";
    } else if (origem === "sala 15" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala15/Sala15_28.svg";
    } else if (origem === "sala 15" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala15/Sala15_29.svg";
    } else if (origem === "sala 15" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala15/Sala15_30.svg";
    } else if (origem === "sala 15" && destino === "museu") {
        imagem.src = "./imagens/salas/sala15/Sala15_museu.svg";
    } else if (origem === "sala 15" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala15/Sala15_WCf.svg";
    } else if (origem === "sala 15" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala15/Sala15_WCm.svg";


        } else if (origem === "sala 16" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala16/Sala16_12.svg";
    } else if (origem === "sala 16" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala16/Sala16_13.svg";
    } else if (origem === "sala 16" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala16/Sala16_14.svg";
    } else if (origem === "sala 16" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala16/Sala16_15.svg";
    } else if (origem === "sala 16" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala16/Sala16_17.svg";
    } else if (origem === "sala 16" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala16/Sala16_18.svg";
    } else if (origem === "sala 16" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala16/Sala16_19.svg";
    } else if (origem === "sala 16" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala16/Sala16_20.svg";
    } else if (origem === "sala 16" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala16/Sala16_21.svg";
    } else if (origem === "sala 16" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala16/Sala16_22.svg";
    } else if (origem === "sala 16" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala16/Sala16_23.svg";
    } else if (origem === "sala 16" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala16/Sala16_24.svg";
    } else if (origem === "sala 16" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala16/Sala16_25.svg";
    } else if (origem === "sala 16" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala16/Sala16_26.svg";
    } else if (origem === "sala 16" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala16/Sala16_27.svg";
    } else if (origem === "sala 16" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala16/Sala16_28.svg";
    } else if (origem === "sala 16" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala16/Sala16_29.svg";
    } else if (origem === "sala 16" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala16/Sala16_30.svg";
    } else if (origem === "sala 16" && destino === "museu") {
        imagem.src = "./imagens/salas/sala16/Sala16_museu.svg";
    } else if (origem === "sala 16" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala16/Sala16_WCf.svg";
    } else if (origem === "sala 16" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala16/Sala16_WCm.svg";


    } else if (origem === "sala 17" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala17/Sala17_12.svg";
    } else if (origem === "sala 17" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala17/Sala17_13.svg";
    } else if (origem === "sala 17" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala17/Sala17_14.svg";
    } else if (origem === "sala 17" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala17/Sala17_15.svg";
    } else if (origem === "sala 17" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala17/Sala17_16.svg";
    } else if (origem === "sala 17" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala17/Sala17_18.svg";
    } else if (origem === "sala 17" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala17/Sala17_19.svg";
    } else if (origem === "sala 17" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala17/Sala17_20.svg";
    } else if (origem === "sala 17" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala17/Sala17_21.svg";
    } else if (origem === "sala 17" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala17/Sala17_22.svg";
    } else if (origem === "sala 17" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala17/Sala17_23.svg";
    } else if (origem === "sala 17" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala17/Sala17_24.svg";
    } else if (origem === "sala 17" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala17/Sala17_25.svg";
    } else if (origem === "sala 17" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala17/Sala17_26.svg";
    } else if (origem === "sala 17" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala17/Sala17_27.svg";
    } else if (origem === "sala 17" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala17/Sala17_28.svg";
    } else if (origem === "sala 17" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala17/Sala17_29.svg";
    } else if (origem === "sala 17" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala17/Sala17_30.svg";
    } else if (origem === "sala 17" && destino === "museu") {
        imagem.src = "./imagens/salas/sala17/Sala17_museu.svg";
    } else if (origem === "sala 17" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala17/Sala17_WCf.svg";
    } else if (origem === "sala 17" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala17/Sala17_WCm.svg";
    

    } else if (origem === "sala 18" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala18/Sala18_12.svg";
    } else if (origem === "sala 18" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala18/Sala18_13.svg";
    } else if (origem === "sala 18" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala18/Sala18_14.svg";
    } else if (origem === "sala 18" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala18/Sala18_15.svg";
    } else if (origem === "sala 18" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala18/Sala18_16.svg";
    } else if (origem === "sala 18" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala18/Sala18_17.svg";
    } else if (origem === "sala 18" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala18/Sala18_19.svg";
    } else if (origem === "sala 18" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala18/Sala18_20.svg";
    } else if (origem === "sala 18" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala18/Sala18_21.svg";
    } else if (origem === "sala 18" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala18/Sala18_22.svg";
    } else if (origem === "sala 18" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala18/Sala18_23.svg";
    } else if (origem === "sala 18" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala18/Sala18_24.svg";
    } else if (origem === "sala 18" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala18/Sala18_25.svg";
    } else if (origem === "sala 18" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala18/Sala18_26.svg";
    } else if (origem === "sala 18" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala18/Sala18_27.svg";
    } else if (origem === "sala 18" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala18/Sala18_28.svg";
    } else if (origem === "sala 18" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala18/Sala18_29.svg";
    } else if (origem === "sala 18" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala18/Sala18_30.svg";
    } else if (origem === "sala 18" && destino === "museu") {
        imagem.src = "./imagens/salas/sala18/Sala18_museu.svg";
    } else if (origem === "sala 18" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala18/Sala18_WCf.svg";
    } else if (origem === "sala 18" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala18/Sala18_WCm.svg";

    } else if (origem === "sala 19" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala19/Sala19_12.svg";
    } else if (origem === "sala 19" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala19/Sala19_13.svg";
    } else if (origem === "sala 19" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala19/Sala19_14.svg";
    } else if (origem === "sala 19" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala19/Sala19_15.svg";
    } else if (origem === "sala 19" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala19/Sala19_16.svg";
    } else if (origem === "sala 19" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala19/Sala19_17.svg";
    } else if (origem === "sala 19" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala19/Sala19_18.svg";
    } else if (origem === "sala 19" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala19/Sala19_20.svg";
    } else if (origem === "sala 19" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala19/Sala19_21.svg";
    } else if (origem === "sala 19" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala19/Sala19_22.svg";
    } else if (origem === "sala 19" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala19/Sala19_23.svg";
    } else if (origem === "sala 19" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala19/Sala19_24.svg";
    } else if (origem === "sala 19" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala19/Sala19_25.svg";
    } else if (origem === "sala 19" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala19/Sala19_26.svg";
    } else if (origem === "sala 19" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala19/Sala19_27.svg";
    } else if (origem === "sala 19" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala19/Sala19_28.svg";
    } else if (origem === "sala 19" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala19/Sala19_29.svg";
    } else if (origem === "sala 19" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala19/Sala19_30.svg";
    } else if (origem === "sala 19" && destino === "museu") {
        imagem.src = "./imagens/salas/sala19/Sala19_museu.svg";
    } else if (origem === "sala 19" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala19/Sala19_WCf.svg";
    } else if (origem === "sala 19" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala19/Sala19_WCm.svg";
    
    
    } else if (origem === "sala 20" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala20/Sala20_12.svg";
    } else if (origem === "sala 20" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala20/Sala20_13.svg";
    } else if (origem === "sala 20" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala20/Sala20_14.svg";
    } else if (origem === "sala 20" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala20/Sala20_15.svg";
    } else if (origem === "sala 20" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala20/Sala20_16.svg";
    } else if (origem === "sala 20" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala20/Sala20_17.svg";
    } else if (origem === "sala 20" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala20/Sala20_18.svg";
    } else if (origem === "sala 20" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala20/Sala20_19.svg";
    } else if (origem === "sala 20" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala20/Sala20_21.svg";
    } else if (origem === "sala 20" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala20/Sala20_22.svg";
    } else if (origem === "sala 20" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala20/Sala20_23.svg";
    } else if (origem === "sala 20" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala20/Sala20_24.svg";
    } else if (origem === "sala 20" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala20/Sala20_25.svg";
    } else if (origem === "sala 20" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala20/Sala20_26.svg";
    } else if (origem === "sala 20" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala20/Sala20_27.svg";
    } else if (origem === "sala 20" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala20/Sala20_28.svg";
    } else if (origem === "sala 20" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala20/Sala20_29.svg";
    } else if (origem === "sala 20" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala20/Sala20_30.svg";
    } else if (origem === "sala 20" && destino === "museu") {
        imagem.src = "./imagens/salas/sala20/Sala20_museu.svg";
    } else if (origem === "sala 20" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala20/Sala20_WCf.svg";
    } else if (origem === "sala 20" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala20/Sala20_WCm.svg";

    } else if (origem === "sala 21" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala21/Sala21_12.svg";
    } else if (origem === "sala 21" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala21/Sala21_13.svg";
    } else if (origem === "sala 21" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala21/Sala21_14.svg";
    } else if (origem === "sala 21" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala21/Sala21_15.svg";
    } else if (origem === "sala 21" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala21/Sala21_16.svg";
    } else if (origem === "sala 21" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala21/Sala21_17.svg";
    } else if (origem === "sala 21" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala21/Sala21_18.svg";
    } else if (origem === "sala 21" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala21/Sala21_19.svg";
    } else if (origem === "sala 21" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala21/Sala21_20.svg";
    } else if (origem === "sala 21" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala21/Sala21_22.svg";
    } else if (origem === "sala 21" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala21/Sala21_23.svg";
    } else if (origem === "sala 21" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala21/Sala21_24.svg";
    } else if (origem === "sala 21" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala21/Sala21_25.svg";
    } else if (origem === "sala 21" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala21/Sala21_26.svg";
    } else if (origem === "sala 21" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala21/Sala21_27.svg";
    } else if (origem === "sala 21" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala21/Sala21_28.svg";
    } else if (origem === "sala 21" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala21/Sala21_29.svg";
    } else if (origem === "sala 21" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala21/Sala21_30.svg";
    } else if (origem === "sala 21" && destino === "museu") {
        imagem.src = "./imagens/salas/sala21/Sala21_museu.svg";
    } else if (origem === "sala 21" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala21/Sala21_WCf.svg";
    } else if (origem === "sala 21" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala21/Sala21_WCm.svg";
    

    } else if (origem === "sala 22" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala22/Sala22_12.svg";
    } else if (origem === "sala 22" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala22/Sala22_13.svg";
    } else if (origem === "sala 22" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala22/Sala22_14.svg";
    } else if (origem === "sala 22" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala22/Sala22_15.svg";
    } else if (origem === "sala 22" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala22/Sala22_16.svg";
    } else if (origem === "sala 22" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala22/Sala22_17.svg";
    } else if (origem === "sala 22" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala22/Sala22_18.svg";
    } else if (origem === "sala 22" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala22/Sala22_19.svg";
    } else if (origem === "sala 22" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala22/Sala22_20.svg";
    } else if (origem === "sala 22" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala22/Sala22_21.svg";
    } else if (origem === "sala 22" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala22/Sala22_23.svg";
    } else if (origem === "sala 22" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala22/Sala22_24.svg";
    } else if (origem === "sala 22" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala22/Sala22_25.svg";
    } else if (origem === "sala 22" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala22/Sala22_26.svg";
    } else if (origem === "sala 22" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala22/Sala22_27.svg";
    } else if (origem === "sala 22" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala22/Sala22_28.svg";
    } else if (origem === "sala 22" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala22/Sala22_29.svg";
    } else if (origem === "sala 22" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala22/Sala22_30.svg";
    } else if (origem === "sala 22" && destino === "museu") {
        imagem.src = "./imagens/salas/sala22/Sala22_museu.svg";
    } else if (origem === "sala 22" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala22/Sala22_WCf.svg";
    } else if (origem === "sala 22" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala22/Sala22_WCm.svg";


    } else if (origem === "sala 23" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala23/Sala23_12.svg";
    } else if (origem === "sala 23" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala23/Sala23_13.svg";
    } else if (origem === "sala 23" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala23/Sala23_14.svg";
    } else if (origem === "sala 23" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala23/Sala23_15.svg";
    } else if (origem === "sala 23" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala23/Sala23_16.svg";
    } else if (origem === "sala 23" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala23/Sala23_17.svg";
    } else if (origem === "sala 23" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala23/Sala23_18.svg";
    } else if (origem === "sala 23" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala23/Sala23_19.svg";
    } else if (origem === "sala 23" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala23/Sala23_20.svg";
    } else if (origem === "sala 23" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala23/Sala23_21.svg";
    } else if (origem === "sala 23" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala23/Sala23_22.svg";
    } else if (origem === "sala 23" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala23/Sala23_24.svg";
    } else if (origem === "sala 23" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala23/Sala23_25.svg";
    } else if (origem === "sala 23" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala23/Sala23_26.svg";
    } else if (origem === "sala 23" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala23/Sala23_27.svg";
    } else if (origem === "sala 23" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala23/Sala23_28.svg";
    } else if (origem === "sala 23" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala23/Sala23_29.svg";
    } else if (origem === "sala 23" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala23/Sala23_30.svg";
    } else if (origem === "sala 23" && destino === "museu") {
        imagem.src = "./imagens/salas/sala23/Sala23_museu.svg";
    } else if (origem === "sala 23" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala23/Sala23_WCf.svg";
    } else if (origem === "sala 23" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala23/Sala23_WCm.svg";

    } else if (origem === "sala 24" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala24/Sala24_12.svg";
    } else if (origem === "sala 24" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala24/Sala24_13.svg";
    } else if (origem === "sala 24" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala24/Sala24_14.svg";
    } else if (origem === "sala 24" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala24/Sala24_15.svg";
    } else if (origem === "sala 24" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala24/Sala24_16.svg";
    } else if (origem === "sala 24" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala24/Sala24_17.svg";
    } else if (origem === "sala 24" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala24/Sala24_18.svg";
    } else if (origem === "sala 24" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala24/Sala24_19.svg";
    } else if (origem === "sala 24" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala24/Sala24_20.svg";
    } else if (origem === "sala 24" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala24/Sala24_21.svg";
    } else if (origem === "sala 24" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala24/Sala24_22.svg";
    } else if (origem === "sala 24" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala24/Sala24_23.svg";
    } else if (origem === "sala 24" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala24/Sala24_25.svg";
    } else if (origem === "sala 24" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala24/Sala24_26.svg";
    } else if (origem === "sala 24" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala24/Sala24_27.svg";
    } else if (origem === "sala 24" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala24/Sala24_28.svg";
    } else if (origem === "sala 24" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala24/Sala24_29.svg";
    } else if (origem === "sala 24" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala24/Sala24_30.svg";
    } else if (origem === "sala 24" && destino === "museu") {
        imagem.src = "./imagens/salas/sala24/Sala24_museu.svg";
    } else if (origem === "sala 24" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala24/Sala24_WCf.svg";
    } else if (origem === "sala 24" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala24/Sala24_WCm.svg";

    
    } else if (origem === "sala 25" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala25/Sala25_12.svg";
    } else if (origem === "sala 25" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala25/Sala25_13.svg";
    } else if (origem === "sala 25" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala25/Sala25_14.svg";
    } else if (origem === "sala 25" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala25/Sala25_15.svg";
    } else if (origem === "sala 25" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala25/Sala25_16.svg";
    } else if (origem === "sala 25" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala25/Sala25_17.svg";
    } else if (origem === "sala 25" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala25/Sala25_18.svg";
    } else if (origem === "sala 25" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala25/Sala25_19.svg";
    } else if (origem === "sala 25" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala25/Sala25_20.svg";
    } else if (origem === "sala 25" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala25/Sala25_21.svg";
    } else if (origem === "sala 25" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala25/Sala25_22.svg";
    } else if (origem === "sala 25" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala25/Sala25_23.svg";
    } else if (origem === "sala 25" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala25/Sala25_24.svg";
    } else if (origem === "sala 25" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala25/Sala25_26.svg";
    } else if (origem === "sala 25" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala25/Sala25_27.svg";
    } else if (origem === "sala 25" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala25/Sala25_28.svg";
    } else if (origem === "sala 25" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala25/Sala25_29.svg";
    } else if (origem === "sala 25" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala25/Sala25_30.svg";
    } else if (origem === "sala 25" && destino === "museu") {
        imagem.src = "./imagens/salas/sala25/Sala25_museu.svg";
    } else if (origem === "sala 25" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala25/Sala25_WCf.svg";
    } else if (origem === "sala 25" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala25/Sala25_WCm.svg";


    } else if (origem === "sala 26" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala26/Sala26_12.svg";
    } else if (origem === "sala 26" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala26/Sala26_13.svg";
    } else if (origem === "sala 26" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala26/Sala26_14.svg";
    } else if (origem === "sala 26" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala26/Sala26_15.svg";
    } else if (origem === "sala 26" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala26/Sala26_16.svg";
    } else if (origem === "sala 26" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala26/Sala26_17.svg";
    } else if (origem === "sala 26" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala26/Sala26_18.svg";
    } else if (origem === "sala 26" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala26/Sala26_19.svg";
    } else if (origem === "sala 26" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala26/Sala26_20.svg";
    } else if (origem === "sala 26" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala26/Sala26_21.svg";
    } else if (origem === "sala 26" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala26/Sala26_22.svg";
    } else if (origem === "sala 26" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala26/Sala26_23.svg";
    } else if (origem === "sala 26" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala26/Sala26_24.svg";
    } else if (origem === "sala 26" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala26/Sala26_25.svg";
    } else if (origem === "sala 26" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala26/Sala26_27.svg";
    } else if (origem === "sala 26" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala26/Sala26_28.svg";
    } else if (origem === "sala 26" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala26/Sala26_29.svg";
    } else if (origem === "sala 26" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala26/Sala26_30.svg";
    } else if (origem === "sala 26" && destino === "museu") {
        imagem.src = "./imagens/salas/sala26/Sala26_museu.svg";
    } else if (origem === "sala 26" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala26/Sala26_WCf.svg";
    } else if (origem === "sala 26" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala26/Sala26_WCm.svg";
    

    } else if (origem === "sala 27" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala27/Sala27_12.svg";
    } else if (origem === "sala 27" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala27/Sala27_13.svg";
    } else if (origem === "sala 27" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala27/Sala27_14.svg";
    } else if (origem === "sala 27" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala27/Sala27_15.svg";
    } else if (origem === "sala 27" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala27/Sala27_16.svg";
    } else if (origem === "sala 27" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala27/Sala27_17.svg";
    } else if (origem === "sala 27" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala27/Sala27_18.svg";
    } else if (origem === "sala 27" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala27/Sala27_19.svg";
    } else if (origem === "sala 27" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala27/Sala27_20.svg";
    } else if (origem === "sala 27" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala27/Sala27_21.svg";
    } else if (origem === "sala 27" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala27/Sala27_22.svg";
    } else if (origem === "sala 27" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala27/Sala27_23.svg";
    } else if (origem === "sala 27" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala27/Sala27_24.svg";
    } else if (origem === "sala 27" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala27/Sala27_25.svg";
    } else if (origem === "sala 27" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala27/Sala27_26.svg";
    } else if (origem === "sala 27" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala27/Sala27_28.svg";
    } else if (origem === "sala 27" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala27/Sala27_29.svg";
    } else if (origem === "sala 27" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala27/Sala27_30.svg";
    } else if (origem === "sala 27" && destino === "museu") {
        imagem.src = "./imagens/salas/sala27/Sala27_museu.svg";
    } else if (origem === "sala 27" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala27/Sala27_WCf.svg";
    } else if (origem === "sala 27" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala27/Sala27_WCm.svg";
    

    } else if (origem === "sala 28" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala28/Sala28_12.svg";
    } else if (origem === "sala 28" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala28/Sala28_13.svg";
    } else if (origem === "sala 28" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala28/Sala28_14.svg";
    } else if (origem === "sala 28" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala28/Sala28_15.svg";
    } else if (origem === "sala 28" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala28/Sala28_16.svg";
    } else if (origem === "sala 28" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala28/Sala28_17.svg";
    } else if (origem === "sala 28" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala28/Sala28_18.svg";
    } else if (origem === "sala 28" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala28/Sala28_19.svg";
    } else if (origem === "sala 28" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala28/Sala28_20.svg";
    } else if (origem === "sala 28" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala28/Sala28_21.svg";
    } else if (origem === "sala 28" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala28/Sala28_22.svg";
    } else if (origem === "sala 28" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala28/Sala28_23.svg";
    } else if (origem === "sala 28" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala28/Sala28_24.svg";
    } else if (origem === "sala 28" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala28/Sala28_25.svg";
    } else if (origem === "sala 28" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala28/Sala28_26.svg";
    } else if (origem === "sala 28" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala28/Sala28_27.svg";
    } else if (origem === "sala 28" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala28/Sala28_29.svg";
    } else if (origem === "sala 28" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala28/Sala28_30.svg";
    } else if (origem === "sala 28" && destino === "museu") {
        imagem.src = "./imagens/salas/sala28/Sala28_museu.svg";
    } else if (origem === "sala 28" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala28/Sala28_WCf.svg";
    } else if (origem === "sala 28" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala28/Sala28_WCm.svg";
    


    } else if (origem === "sala 29" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala29/Sala29_12.svg";
    } else if (origem === "sala 29" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala29/Sala29_13.svg";
    } else if (origem === "sala 29" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala29/Sala29_14.svg";
    } else if (origem === "sala 29" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala29/Sala29_15.svg";
    } else if (origem === "sala 29" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala29/Sala29_16.svg";
    } else if (origem === "sala 29" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala29/Sala29_17.svg";
    } else if (origem === "sala 29" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala29/Sala29_18.svg";
    } else if (origem === "sala 29" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala29/Sala29_19.svg";
    } else if (origem === "sala 29" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala29/Sala29_20.svg";
    } else if (origem === "sala 29" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala29/Sala29_21.svg";
    } else if (origem === "sala 29" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala29/Sala29_22.svg";
    } else if (origem === "sala 29" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala29/Sala29_23.svg";
    } else if (origem === "sala 29" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala29/Sala29_24.svg";
    } else if (origem === "sala 29" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala29/Sala29_25.svg";
    } else if (origem === "sala 29" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala29/Sala29_26.svg";
    } else if (origem === "sala 29" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala29/Sala29_27.svg";
    } else if (origem === "sala 29" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala29/Sala29_28.svg";
    } else if (origem === "sala 29" && destino === "sala 30") {
        imagem.src = "./imagens/salas/sala29/Sala29_30.svg";
    } else if (origem === "sala 29" && destino === "museu") {
        imagem.src = "./imagens/salas/sala29/Sala29_museu.svg";
    } else if (origem === "sala 29" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala29/Sala29_WCf.svg";
    } else if (origem === "sala 29" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala29/Sala29_WCm.svg";
    

    } else if (origem === "sala 30" && destino === "sala 12") {
        imagem.src = "./imagens/salas/sala30/Sala30_12.svg";
    } else if (origem === "sala 30" && destino === "sala 13") {
        imagem.src = "./imagens/salas/sala30/Sala30_13.svg";
    } else if (origem === "sala 30" && destino === "sala 14") {
        imagem.src = "./imagens/salas/sala30/Sala30_14.svg";
    } else if (origem === "sala 30" && destino === "sala 15") {
        imagem.src = "./imagens/salas/sala30/Sala30_15.svg";
    } else if (origem === "sala 30" && destino === "sala 16") {
        imagem.src = "./imagens/salas/sala30/Sala30_16.svg";
    } else if (origem === "sala 30" && destino === "sala 17") {
        imagem.src = "./imagens/salas/sala30/Sala30_17.svg";
    } else if (origem === "sala 30" && destino === "sala 18") {
        imagem.src = "./imagens/salas/sala30/Sala30_18.svg";
    } else if (origem === "sala 30" && destino === "sala 19") {
        imagem.src = "./imagens/salas/sala30/Sala30_19.svg";
    } else if (origem === "sala 30" && destino === "sala 20") {
        imagem.src = "./imagens/salas/sala30/Sala30_20.svg";
    } else if (origem === "sala 30" && destino === "sala 21") {
        imagem.src = "./imagens/salas/sala30/Sala30_21.svg";
    } else if (origem === "sala 30" && destino === "sala 22") {
        imagem.src = "./imagens/salas/sala30/Sala30_22.svg";
    } else if (origem === "sala 30" && destino === "sala 23") {
        imagem.src = "./imagens/salas/sala30/Sala30_23.svg";
    } else if (origem === "sala 30" && destino === "sala 24") {
        imagem.src = "./imagens/salas/sala30/Sala30_24.svg";
    } else if (origem === "sala 30" && destino === "sala 25") {
        imagem.src = "./imagens/salas/sala30/Sala30_25.svg";
    } else if (origem === "sala 30" && destino === "sala 26") {
        imagem.src = "./imagens/salas/sala30/Sala30_26.svg";
    } else if (origem === "sala 30" && destino === "sala 27") {
        imagem.src = "./imagens/salas/sala30/Sala30_27.svg";
    } else if (origem === "sala 30" && destino === "sala 28") {
        imagem.src = "./imagens/salas/sala30/Sala30_28.svg";
    } else if (origem === "sala 30" && destino === "sala 29") {
        imagem.src = "./imagens/salas/sala30/Sala30_29.svg";
    } else if (origem === "sala 30" && destino === "museu") {
        imagem.src = "./imagens/salas/sala30/Sala30_museu.svg";
    } else if (origem === "sala 30" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/sala30/Sala30_WCf.svg";
    } else if (origem === "sala 30" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/sala30/Sala30_WCm.svg";


    } else if (origem === "museu" && destino === "sala 12") {
        imagem.src = "./imagens/salas/museu/Museu_12.svg";
    } else if (origem === "museu" && destino === "sala 13") {
        imagem.src = "./imagens/salas/museu/Museu_13.svg";
    } else if (origem === "museu" && destino === "sala 14") {
        imagem.src = "./imagens/salas/museu/Museu_14.svg";
    } else if (origem === "museu" && destino === "sala 15") {
        imagem.src = "./imagens/salas/museu/Museu_15.svg";
    } else if (origem === "museu" && destino === "sala 16") {
        imagem.src = "./imagens/salas/museu/Museu_16.svg";
    } else if (origem === "museu" && destino === "sala 17") {
        imagem.src = "./imagens/salas/museu/Museu_17.svg";
    } else if (origem === "museu" && destino === "sala 18") {
        imagem.src = "./imagens/salas/museu/Museu_18.svg";
    } else if (origem === "museu" && destino === "sala 19") {
        imagem.src = "./imagens/salas/museu/Museu_19.svg";
    } else if (origem === "museu" && destino === "sala 20") {
        imagem.src = "./imagens/salas/museu/Museu_20.svg";
    } else if (origem === "museu" && destino === "sala 21") {
        imagem.src = "./imagens/salas/museu/Museu_21.svg";
    } else if (origem === "museu" && destino === "sala 22") {
        imagem.src = "./imagens/salas/museu/Museu_22.svg";
    } else if (origem === "museu" && destino === "sala 23") {
        imagem.src = "./imagens/salas/museu/Museu_23.svg";
    } else if (origem === "museu" && destino === "sala 24") {
        imagem.src = "./imagens/salas/museu/Museu_24.svg";
    } else if (origem === "museu" && destino === "sala 25") {
        imagem.src = "./imagens/salas/museu/Museu_25.svg";
    } else if (origem === "museu" && destino === "sala 26") {
        imagem.src = "./imagens/salas/museu/Museu_26.svg";
    } else if (origem === "museu" && destino === "sala 27") {
        imagem.src = "./imagens/salas/museu/Museu_27.svg";
    } else if (origem === "museu" && destino === "sala 28") {
        imagem.src = "./imagens/salas/museu/Museu_28.svg";
    } else if (origem === "museu" && destino === "sala 29") {
        imagem.src = "./imagens/salas/museu/Museu_29.svg";
    } else if (origem === "museu" && destino === "sala 30") {
        imagem.src = "./imagens/salas/museu/Museu_30.svg";
    } else if (origem === "museu" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/museu/Museu_WCf.svg";
    } else if (origem === "museu" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/museu/Museu_WCm.svg";


    } else if (origem === "casa de banho f" && destino === "sala 12") {
        imagem.src = "./imagens/salas/wcf/WCf_12.svg";
    } else if (origem === "casa de banho f" && destino === "sala 13") {
        imagem.src = "./imagens/salas/wcf/WCf_13.svg";
    } else if (origem === "casa de banho f" && destino === "sala 14") {
        imagem.src = "./imagens/salas/wcf/WCf_14.svg";
    } else if (origem === "casa de banho f" && destino === "sala 15") {
        imagem.src = "./imagens/salas/wcf/WCf_15.svg";
    } else if (origem === "casa de banho f" && destino === "sala 16") {
        imagem.src = "./imagens/salas/wcf/WCf_16.svg";
    } else if (origem === "casa de banho f" && destino === "sala 17") {
        imagem.src = "./imagens/salas/wcf/WCf_17.svg";
    } else if (origem === "casa de banho f" && destino === "sala 18") {
        imagem.src = "./imagens/salas/wcf/WCf_18.svg";
    } else if (origem === "casa de banho f" && destino === "sala 19") {
        imagem.src = "./imagens/salas/wcf/WCf_19.svg";
    } else if (origem === "casa de banho f" && destino === "sala 20") {
        imagem.src = "./imagens/salas/wcf/WCf_20.svg";
    } else if (origem === "casa de banho f" && destino === "sala 21") {
        imagem.src = "./imagens/salas/wcf/WCf_21.svg";
    } else if (origem === "casa de banho f" && destino === "sala 22") {
        imagem.src = "./imagens/salas/wcf/WCf_22.svg";
    } else if (origem === "casa de banho f" && destino === "sala 23") {
        imagem.src = "./imagens/salas/wcf/WCf_23.svg";
    } else if (origem === "casa de banho f" && destino === "sala 24") {
        imagem.src = "./imagens/salas/wcf/WCf_24.svg";
    } else if (origem === "casa de banho f" && destino === "sala 25") {
        imagem.src = "./imagens/salas/wcf/WCf_25.svg";
    } else if (origem === "casa de banho f" && destino === "sala 26") {
        imagem.src = "./imagens/salas/wcf/WCf_26.svg";
    } else if (origem === "casa de banho f" && destino === "sala 27") {
        imagem.src = "./imagens/salas/wcf/WCf_27.svg";
    } else if (origem === "casa de banho f" && destino === "sala 28") {
        imagem.src = "./imagens/salas/wcf/WCf_28.svg";
    } else if (origem === "casa de banho f" && destino === "sala 29") {
        imagem.src = "./imagens/salas/wcf/WCf_29.svg";
    } else if (origem === "casa de banho f" && destino === "sala 30") {
        imagem.src = "./imagens/salas/wcf/WCf_30.svg";
    } else if (origem === "casa de banho f" && destino === "museu") {
        imagem.src = "./imagens/salas/wcf/WCf_Museu.svg";
    } else if (origem === "casa de banho f" && destino === "casa de banho m") {
        imagem.src = "./imagens/salas/wcf/WCf_WCm.svg";


    } else if (origem === "casa de banho m" && destino === "sala 12") {
        imagem.src = "./imagens/salas/wcm/WCm_12.svg";
    } else if (origem === "casa de banho m" && destino === "sala 13") {
        imagem.src = "./imagens/salas/wcm/WCm_13.svg";
    } else if (origem === "casa de banho m" && destino === "sala 14") {
        imagem.src = "./imagens/salas/wcm/WCm_14.svg";
    } else if (origem === "casa de banho m" && destino === "sala 15") {
        imagem.src = "./imagens/salas/wcm/WCm_15.svg";
    } else if (origem === "casa de banho m" && destino === "sala 16") {
        imagem.src = "./imagens/salas/wcm/WCm_16.svg";
    } else if (origem === "casa de banho m" && destino === "sala 17") {
        imagem.src = "./imagens/salas/wcm/WCm_17.svg";
    } else if (origem === "casa de banho m" && destino === "sala 18") {
        imagem.src = "./imagens/salas/wcm/WCm_18.svg";
    } else if (origem === "casa de banho m" && destino === "sala 19") {
        imagem.src = "./imagens/salas/wcm/WCm_19.svg";
    } else if (origem === "casa de banho m" && destino === "sala 20") {
        imagem.src = "./imagens/salas/wcm/WCm_20.svg";
    } else if (origem === "casa de banho m" && destino === "sala 21") {
        imagem.src = "./imagens/salas/wcm/WCm_21.svg";
    } else if (origem === "casa de banho m" && destino === "sala 22") {
        imagem.src = "./imagens/salas/wcm/WCm_22.svg";
    } else if (origem === "casa de banho m" && destino === "sala 23") {
        imagem.src = "./imagens/salas/wcm/WCm_23.svg";
    } else if (origem === "casa de banho m" && destino === "sala 24") {
        imagem.src = "./imagens/salas/wcm/WCm_24.svg";
    } else if (origem === "casa de banho m" && destino === "sala 25") {
        imagem.src = "./imagens/salas/wcm/WCm_25.svg";
    } else if (origem === "casa de banho m" && destino === "sala 26") {
        imagem.src = "./imagens/salas/wcm/WCm_26.svg";
    } else if (origem === "casa de banho m" && destino === "sala 27") {
        imagem.src = "./imagens/salas/wcm/WCm_27.svg";
    } else if (origem === "casa de banho m" && destino === "sala 28") {
        imagem.src = "./imagens/salas/wcm/WCm_28.svg";
    } else if (origem === "casa de banho m" && destino === "sala 29") {
        imagem.src = "./imagens/salas/wcm/WCm_29.svg";
    } else if (origem === "casa de banho m" && destino === "sala 30") {
        imagem.src = "./imagens/salas/wcm/WCm_30.svg";
    } else if (origem === "casa de banho m" && destino === "museu") {
        imagem.src = "./imagens/salas/wcm/WCm_Museu.svg";
    } else if (origem === "casa de banho m" && destino === "casa de banho f") {
        imagem.src = "./imagens/salas/wcm/WCm_WCf.svg";

    
    } else {
        imagem.src = "imagens/salas/sala_errada.svg";
        alert("Rota não encontrada. Verifique os locais digitados.");
    }

    // Exibe a imagem ap�s definir a fonte (ou erro)
    imagem.style.display = "block";
}
