function FusoHorario() {
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");
    var horaBrasil = Number(inHoraBrasil.value);

    if (inHoraBrasil == "" || isNaN(horaBrasil)) {
        outHoraFranca.textContent = "Digite um hora válida no formato h.m";
        return;
    }
    var horaFranca = horaBrasil + 5;
    horaFranca > 24 ? horaFranca = horaFranca - 24 : horaFranca;
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", FusoHorario);


var texto = document.getElementById('outHoraFranca');
texto.style.color = '#FF0000';
body.style.backgroundColor = 'red';
