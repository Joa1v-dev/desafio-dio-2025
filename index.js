let heroi = "Joao";
let nivel = 10000;
let rank = ""; // Variável para armazenar o nível

if (nivel <= 1000) {
    rank = "Ferro";
} 
else if (nivel >= 1001 && nivel <= 2000) {
    rank = "Bronze";
}
else if (nivel >= 2001 && nivel <= 5000) {
    rank = "Prata";
}
else if (nivel >= 5001 && nivel <= 7000) {
    rank = "Ouro";
}
else if (nivel >= 7001 && nivel <= 8000) {
    rank = "Platina";
}
else if (nivel >= 8001 && nivel <= 9000) {
    rank = "Ascendente";
}
else if (nivel >= 9001 && nivel <= 10000) {
    rank = "Imortal";
}
else {
    rank = "Radiante";
}

// Exibe o resultado corretamente
console.log("O herói de nome " + heroi + " está no nível de " + rank);
