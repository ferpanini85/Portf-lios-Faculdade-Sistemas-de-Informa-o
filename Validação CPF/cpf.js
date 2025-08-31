document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cpfInput = document.getElementById('cpf').value;
    const messageElement = document.getElementById('message');
    
    if (validarCPF(cpfInput)) {
        messageElement.textContent = 'CPF Válido!';
        messageElement.className = 'message success';
    } else {
        messageElement.textContent = 'CPF Inválido!';
        messageElement.className = 'message error';
    }
});

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // CPF deve ter 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;

    // Validação do segundo dígito
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}
