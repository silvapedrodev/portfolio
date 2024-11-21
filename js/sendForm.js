// ---- Simula o envio do formulário ---- 

export function sendingMessage() {
    const form = document.querySelector("form")
    const sendingText = document.getElementById('sendingText');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        submitButton.style.display = 'none'
        sendingText.style.display = 'inline-block'

        // ---- limpa o formulário ----- 
        form.reset();

        setTimeout(() => {
            // Esconde a mensagem "Enviando..."
            sendingText.style.display = 'none';

            // Exibe o botão novamente
            submitButton.style.display = 'block';
          }, 1000); // 3 segundos

    })
}