class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" }); //? open shadow DOM
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
    }
    :host {
        display: block;
        width: 100%;
    }
    .text-center {
        text-align: center;
    }
    .p-4 {
        padding: 1rem;
    }
    .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity));
    }
    .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .text-transparent {
        color: transparent;
    }
    .bg-clip-text {
        -webkit-background-clip: text;
        background-clip: text;
    }
    .bg-gradient-to-r {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    
    .bg-lime-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(163 230 53 / var(--tw-bg-opacity));
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    </style>
    <footer class="p-4 text-center">
        <span class="text-base text-gray-500 dark:text-gray-400">© 2022 Copyright:</span>
        <a class="bg-lime-400 bg-gradient-to-r from-lime-300 bg-clip-text text-transparent"
        href="ogisetiawn.github.io">@ogisetiawan</a>
    </footer>
      `;
  }
}

customElements.define("footer-bar", Footer);
