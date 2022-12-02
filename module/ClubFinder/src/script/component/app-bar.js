class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" }); //? open shadow DOM
  }
  connectedCallback() {
    this.render();
  }

  render() {
    // this.innerHTML = `<h2>Club Finder</h2>`;
    //? set style kusus untuk element app-bar
    /// merupakan selector untuk menunjuk element host 
    this.shadowDOM.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        width: 100%;
        background-color: cornflowerblue;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
      h2 {
        padding: 16px;
      }
    </style>
    
    <h2>Club Finder</h2>
  `;
  }
}

customElements.define("app-bar", AppBar);
