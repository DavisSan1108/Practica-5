function hanoi(n, origen, destino, auxiliar, resultado) {
    if (n === 1) {
        resultado.push(`Mueve el disco 1 de ${origen} a ${destino}`);
        return;
    }
    hanoi(n - 1, origen, auxiliar, destino, resultado);
    resultado.push(`Mueve el disco ${n} de ${origen} a ${destino}`);
    hanoi(n - 1, auxiliar, destino, origen, resultado);
}

function resolverHanoi() {
    const numDiscos = parseInt(document.getElementById('numDiscos').value);
    const resultado = [];
    
    hanoi(numDiscos, 'origen', 'destino', 'auxiliar', resultado);
    
    let movimientos = `<h2>Movimientos para ${numDiscos} discos:</h2>`;
    movimientos += '<ul>';
    resultado.forEach(movimiento => {
        movimientos += `<li>${movimiento}</li>`;
    });
    movimientos += '</ul>';
    
    document.getElementById('resultado').innerHTML = movimientos;
}
