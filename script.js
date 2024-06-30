const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const submitButton = document.getElementById("botaoEnvio");

const form = document.querySelector(".formcontato__form");

document.addEventListener( 'input', () => {
    form.addEventListener("input", function() {
        validateForm();
    });

    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let valid = true;
        clearErrors();

        if (nome.value.trim() === "") {
            showError(nome, "Por favor, preencha o nome.");
            valid = false;
        } else if (nome.value.trim().length > 50) {
            showError(nome, "O nome deve conter no máximo 50 caracteres.");
            valid = false;
        }

        if (email.value.trim() === "") {
            showError(email, "Por favor, preencha o e-mail.");
            valid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, "Por favor, insira um e-mail válido.");
            valid = false;
        }

        if (assunto.value.trim() === "") {
            showError(assunto, "Por favor, preencha o assunto.");
            valid = false;
        } else if (assunto.value.trim().length > 50) {
            showError(assunto, "O assunto deve conter no máximo 50 caracteres.");
            valid = false;
        }

        if (mensagem.value.trim() === "") {
            showError(mensagem, "Por favor, preencha a mensagem.");
            valid = false;
        } else if (mensagem.value.trim().length > 300) {
            showError(mensagem, "A mensagem deve conter no máximo 300 caracteres.");
            valid = false;
        }

        submitButton.disabled = !valid;
        return valid;
    }

    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = message;
        element.parentNode.insertBefore(error, element.nextSibling);
        element.classList.add("input-error");
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function(error) {
            error.remove();
        });
        const inputs = document.querySelectorAll(".input-error");
        inputs.forEach(function(input) {
            input.classList.remove("input-error");
        });
    }

    function isValidEmail(email) {
        // Simples regex para validação de e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
