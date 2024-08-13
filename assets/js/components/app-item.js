
class AppItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _notes = {
        id: "NEED_ID",
        title: "NEED_TITLE",
        body: "NEED_BODY",
        createdAt: "NEED_CREATED_AT",
        
    };

    constructor() {
        super();

        this._shadowRoot =this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
        
        this.render();
    }

    set notes(value) {
        this._notes =value;

        this.render();
    }

    get notes() {
        return this._notes;
    }

    _updateStyle() {
        this._style.textContent = `
        .bottom, .setting .menu li , header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        }

        .wrapper{
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
        .note p{
        font-size: 20px;
        font-weight: 500;
        }

        .note span{
        color: #575757;
        font-size: 15px;
        }

        .wrapper .note{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }

        .note .bottom{
        padding-top: 10px;
        border-top: 1px solid #2e4374;
        }
        .bottom .setting i{
        color: #2e4374;
        font-size: 14px;
        cursor: pointer;
        }
        .setting{
        position: relative;
        }
        .setting .menu{
        position: absolute;
        bottom: 0;
        right: -5px;
        padding: 5px 5px;
        background: #ffffff;
        border-radius: 5px;
        transform: scale(0);
        transform-origin: bottom right;
        transition: transporm 0.25s ease;
        box-shadow: 0 0 6px rgba(0,0,0,0.15);
        }
        .setting.show .menu{
        transform: scale(1);
        }

        .setting .menu li{
        height: 30px;
        font-size: 15px;
        border-radius: 0;
        cursor: pointer;
        justify-content: flex-start;
        padding: 17px 20px;
        background: #f5f5f5;
        }
        .menu li:hover{
        background: #e8f2f2;
        }
        .menu li i{
        padding-right: 5px;
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

    render(){
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
       <div class="wrapper">
            <li class="add-box">
                <img src="./assets/images/button-add.png" alt="">
            </li>
          </div>`
    }
}

customElements.define('app-item', AppItem);
