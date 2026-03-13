
const $ = document.querySelector.bind(document);

$('#email').addEventListener('focus', () => {
    validacao.limparAvisoErro('#email', '#erroEmail');
});

$('#senha').addEventListener('focus', () => {
    validacao.limparAvisoErro('#senha', '#erroSenha');
});

document.querySelector('form')
.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');

    const temValorEmail = validacao.temValor(
        '#email',
        '#erroEmail',
        'Insira o E-mail corretamente'
    );

    if (!temValorEmail) {
        return;
    }

    const temValorSenha = validacao.temValor(
        '#senha',
        '#erroSenha',
        'Insira a Senha corretamente'
    );

    if (!temValorSenha) {
        return;
    }

    console.log("Login válido");
});

const validacao = {
    temValor: function (el, elExibirMsg, msg) {

        if (!$(el).value) {
            $(elExibirMsg).innerText = msg;
            $(elExibirMsg).classList.add('exibir');
            return false;
        }

        return true;
    },

    limparAvisoErro: function (el, elExibirMsg) {
        $(el).classList.remove('erro');
        $(elExibirMsg).classList.remove('exibir');
    }
};
