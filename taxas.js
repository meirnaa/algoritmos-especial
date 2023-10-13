function converter_mensais_anuais(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_mensal = Number(cx_taxa.value)

    //Processamento
    const periodo = 12
    const taxa_anual = converter_taxa(taxa_mensal, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_anual * 100).toFixed(2) + '%'
}

function converter_taxa(taxa, periodo){
    return Math.pow(1 + (taxa / 100), periodo) - 1
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.item-navegacao2');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const ancora = this.getAttribute('data-ancora');
            if (ancora) {
                window.location.href = ancora; // Redireciona para a âncora especificada
            }
        });
        
        function handleInteraction(event) {
            buttons.forEach(b => b.classList.remove('active'));
            
            if (isTouchDevice() || event.type === 'mouseenter') {
                // Se for um dispositivo de toque ou evento de mouse (mouseenter), aplique a classe "active"
                button.classList.add('active');
            }
        }
        
        button.addEventListener('mouseenter', handleInteraction); // Evento de mouse
        button.addEventListener('touchstart', handleInteraction); // Evento de toque
    });
});

function converter_anuais_mensais(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_anual = Number(cx_taxa.value)

    //Processamento
    const periodo = 1/12
    const taxa_mensal = converter_taxa(taxa_anual, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_mensal * 100).toFixed(4) + '%'
}

function converter_mensais_diarias(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_mensal = Number(cx_taxa.value)

    //Processamento
    const periodo = 1/30
    const taxa_diaria = converter_taxa(taxa_mensal, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_diaria * 100).toFixed(4) + '%'
}

function converter_anuais_diarias(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_anual = Number(cx_taxa.value)

    //Processamento
    const periodo = 1/365
    const taxa_diaria = converter_taxa(taxa_anual, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_diaria * 100).toFixed(4) + '%'
}

function converter_diarias_mensais(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_diaria = Number(cx_taxa.value)

    //Processamento
    const periodo = 30
    const taxa_mensal = converter_taxa(taxa_diaria, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_mensal * 100).toFixed(2) + '%'
}

function converter_diarias_anuais(){
    //Entrada
    const cx_taxa = document.getElementById('cx-taxa')

    const taxa_diaria = Number(cx_taxa.value)

    //Processamento
    const periodo = 365
    const taxa_anual = converter_taxa(taxa_diaria, periodo)

    //Saída
    const elemento_resultado = document.getElementById('taxa')
        elemento_resultado.innerText = (taxa_anual * 100).toFixed(4) + '%'
}

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.href; // Obtém a URL da página atual
    const links = document.querySelectorAll('ul li a');
  
    links.forEach(function (link) {
      if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active'); // Adiciona a classe "active" ao link da página atual
      }
    });
  });
  
  