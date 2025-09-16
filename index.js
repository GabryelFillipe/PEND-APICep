'use strict'
async function buscarCep(cep) {
    const url = `https://cdn.apicep.com/file/apicep/${cep}.json`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}



async function preencherCampos({ target }) {
    const informacoesCep = await buscarCep(target.value)
    console.log(informacoesCep)
    
    document.getElementById('endereco').value = informacoesCep.address
    document.getElementById('bairro').value = informacoesCep.district
    document.getElementById('cidade').value = informacoesCep.city
    document.getElementById('estado').value = informacoesCep.state
}




document.getElementById('cep')
    .addEventListener('focusout', preencherCampos)