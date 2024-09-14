function calcularCambio() {
    const total = parseFloat(document.getElementById('total').value);
    const pagado = parseFloat(document.getElementById('pagado').value);

    if (isNaN(total) || isNaN(pagado) || pagado < total) {
        alert('Por favor, introduce valores válidos y asegúrate de que la cantidad pagada es mayor o igual al total.');
        return;
    }

    let cambio = (pagado - total).toFixed(2);
    let cambioRestante = Math.round(cambio * 100); // Convertir a centavos

    const monedas = [
        { valor: 10000, nombre: 'moneda de 100 pesos' },
        { valor: 5000, nombre: 'moneda de 50 pesos' },
        { valor: 2000, nombre: 'moneda de 20 pesos' },
        { valor: 1000, nombre: 'moneda de 10 pesos' },
        { valor: 500, nombre: 'moneda de 5 pesos' },
        { valor: 100, nombre: 'moneda de 1 peso' },
        { valor: 50, nombre: 'moneda de 50 centavos' },
        { valor: 20, nombre: 'moneda de 20 centavos' },
        { valor: 1, nombre: 'moneda de 1 centavo' }
    ];

    let resultado = `<h2>Cambio: $${cambio}</h2>`;
    resultado += '<ul>';

    monedas.forEach(moneda => {
        const cantidad = Math.floor(cambioRestante / moneda.valor);
        cambioRestante -= cantidad * moneda.valor;
        resultado += `<li>${cantidad} ${cantidad === 1 ? moneda.nombre : moneda.nombre + 's'}</li>`;
    });

    resultado += '</ul>';

    document.getElementById('resultado').innerHTML = resultado;
}
