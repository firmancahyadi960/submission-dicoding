class AppItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot= this.attachShadow({mode:'open'});
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
        .wrapper {
        margin: 15px 0;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fill, 270px);
        padding: -5px;
        }

        .wrapper li{
        height: 250px;
        list-style: none;
        background: #e8f2f2;
        border-radius: 5px;
        padding: 10px 20px 20px;
        }
        .wrapper .add-box{
        width: 3rem;
        height: 3rem;
        display: flex;
        margin-top: 5px;
        align-items: center;
        justify-content: center;
        border-radius: .875rem;
        background: #e8f2f2;
        position: fixed;
        border: none;
        bottom: 1rem;
        right: 1rem;
        box-shadow: 0 1px 3px 0 rgb(60, 64, 67 / 30%);
        }
        .wrapper .add-box:hover{
        background: #f5f83e;
        cursor: pointer;
        }

        .wrapper .add-box img{
        justify-content: center;
        font-size: 40px;
        height: 20px;
        width: 20px;
        margin-top: 10px;
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
        <div class="wrapper">
            <li class="add-box">
                <img src="./assets/images/button-add.png" alt="">
            </li>
        </div>
        `;
    }
}

customElements.define('app-item', AppItem);

