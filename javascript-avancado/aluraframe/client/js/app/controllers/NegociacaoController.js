class NegociacaoController {

    constructor() {

        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);  
        this._limpaForm()

        console.log(this._listaNegociacoes.getNegociacoes());


    }
    

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
