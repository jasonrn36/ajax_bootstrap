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
        $('#Cep').mask('00000-000');

        $("#btn-buscar-cep").click(function(){ //#btn-buscar-cep com # porque ele é um ID
            const cep = $("#Cep").val();
            const endpoint = `https://viacep.com.br/ws/${cep}/json`;
            const botao = $(this);

                $(botao).find('i').addClass('d-none');
                $(botao).find('span').removeClass('d-none');

            $.ajax(endpoint).done(function(resposta){
                const logradouro = resposta.logradouro;
                const bairro = resposta.bairro;
                const cidade = resposta.localidade;
                const estado = resposta.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);



                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');

                    

            })

        })
    
})