class Footer extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "closed" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                footer {
                    box-sizing: border-box;
                    text-align: center;
                    color: #f5f83e;
                    font-weight: bold;
                    margin-bottom: 0.5rem
                }
            </style>
            <footer>
                <p>Firman Cahyadi</p>
            </footer>
        `;
    }
}

customElements.define("app-footer", Footer);
