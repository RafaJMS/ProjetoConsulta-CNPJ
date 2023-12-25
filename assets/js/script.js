function validarCNPJ(CNPJ)
{
    $.ajax({
        'url':'https://receitaws.com.br/v1/cnpj/' + CNPJ.replace(/[^0-9]/g,''),
        'type':'GET',
        'dataType':'jsonp',
        'success':function(dado)
        {
            if(dado.nome == undefined){
                alert(dado.status + " " +dado.message)
            }else{
            document.getElementById('razao-social').value = dado.nome;
            document.getElementById('nome-fantasia').value = dado.fantasia
            document.getElementById('data-abertura').value = dado.abertura
            document.getElementById('status-empresa').value = dado.status
            document.getElementById('endereco').value = dado.logradouro
            document.getElementById('cidade-estado').value = `${dado.municipio} - ${dado.uf}`
            document.getElementById('telefone').value = dado.telefone
            console.log(dado)
        }
    }


    })
}
//