class MensagemView extends View {

    constructor(elemento) {
        
        super(elemento);
    }

    template(model) {

        return model.texto ? `<p class="alert alet-info">${model.texto}</p>` : `<p></p>`;
    }
}