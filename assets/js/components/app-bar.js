class AppBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot= this.attachShadow({mode:'open'});
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
        .header,
        .header-top {
            display: flex;
            align-items: center;
            font-family: "Poppins", sans-serif;
        }
        .header-top {
            width: 100%;
            justify-content: center;
            padding-top: 30px;
            padding-inline: 15px;
        }

        .header-top > img {
            width: 50px;
        }

        .header-top h2 {
        position: relative;
        font-size: 20px;
        font-weight: 700;
        left:10px;
        }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._updateStyle();
        
        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <header class="header">
            <div class="header-top">
                <img src="./assets/images/logo.png" alt="logo noteapps" />
                <h2>Notes Apps</h2>
            </div>
            </div>
        </header>
        `;
    }
}

customElements.define('app-bar', AppBar);

