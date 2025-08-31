function ativar(elemento) {
    let itens = document.getElementsByClassName("page-item");
    for (i = 0; i < itens.length; i++) {
        itens[i].classList.remove("active");
    }
    elemento.classList.add("active");
}

    $(document).ready(function (e) {
        $("#divConteudo").hide();

        $("#btnMostrarEsconder").click(function (e) {
            $("#divConteudo").toggle();
        });
    });
