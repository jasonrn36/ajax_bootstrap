/* document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btn-buscar-cep").addEventListener('click',function(){
        const xhttp = new XMLHttpRequest(); //Isso é uma xhttpRequisição
        const cep = document.getElementById('Cep').value; //este cep é o input "cep no formulário
        const endpoint = `https://viacep.com.br/ws/${cep}/json`; // ponto final é onde irá buscar o cep

        xhttp.open("GET", endpoint, true); // Aqui temos a chamada para clicar pegar o número do cep
        xhttp.send(cep); // Aqui temos a chamada para devolver o número que foi capturado
    }); */

   // https://viacep.com.br/ws/0123456789/json

    $(document).ready(function(){
        $("#btn-buscar-cep").click(function(){ //#btn-buscar-cep com # porque ele é um ID
            const cep = $("#Cep").val();
            const endpoint = `https://viacep.com.br/ws/${cep}/json`;

            $.ajax(endpoint).done(function(resposta){
                console.log(resposta);
            })
    })
})