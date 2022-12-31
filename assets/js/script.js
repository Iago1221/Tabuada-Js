function calculo(){
    let tabela = document.querySelector('#tabela tbody');

    let valorA = parseInt(document.querySelector('#valorA').value);

    tabela.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        let template = `                
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabela.append(tr);

    }

};

calculo();

document.querySelector('#valorA').addEventListener('change', calculo);