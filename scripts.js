function clearError(){
    document.getElementById('cepError').innerText = ''
}

function render_data(data){
    clearError()
    document.getElementById('street').value = data.logradouro
    document.getElementById('neighborhood').value = data.bairro
    document.getElementById('state').value = data.estado
    document.getElementById('city').value = data.localidade
}

document.getElementById('cep').addEventListener('focus', () => {clearError()})

document.getElementById('cep').addEventListener('blur', () => {
    let CEP = document.getElementById('cep').value;
    let cep_value = `https://viacep.com.br/ws/${CEP}/json/`;
    
    document.getElementById('cepError').innerText = 'carregando...';
    fetch(cep_value)
        .then(response =>response.json())
        .then(data => render_data(data))
        .catch(() => {
            console.error('houve um erro');
            document.getElementById('cepError').innerText = 'O CEP informado é invalido.';
        })
})