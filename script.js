function calcularIdade() {
            const M = parseInt(document.getElementById('idadeMonica').value);
            const A = parseInt(document.getElementById('idadeFilhoA').value);
            const B = parseInt(document.getElementById('idadeFilhoB').value);

            const C = M - (A + B);

            const maisVelho = Math.max(A, B, C);

            document.getElementById('resultado').innerHTML = 
             `A idade do outro filho é: ${C} anos.<br>` +
                `A idade do filho mais velho é: ${maisVelho} anos.`;        
}