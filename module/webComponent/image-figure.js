class ImageFigure extends HTMLElement { //? inheritance HTMLElement
    constructor() {
      super();
      console.log('constructed!');
    }
    render() {
        //? create objectDOM
        this.innerHTML = `
            <figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
            </figure>
        `;
    }

    //? function callback to get a data/ set attribute
    connectedCallback() {
        this.src = this.getAttribute('src') || null; //? get value by src attribute
        this.alt = this.getAttribute('alt') || null;
        this.caption = this.getAttribute('caption') || null;
        this.render();
    }

    //? callback remove data DOM (event,state,obj)
    // disconnectedCallback() {
    //   console.log('disconnected!');
    // }
    
    //? callback func every element move to new docuement
    // adoptedCallback() {
    //   console.log('adopted!');
    // }
    
    //? callback refresh element
    attributeChangedCallback(name, oldValue, newValue) { //? att values
        this[name] = newValue; //? set new value by attr name
        this.render(); //? render elemet
    }
   
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ['caption', 'title', 'src', ...]

    //? function getter static
    //? if any changed, it will call funct attributChangedCallback
    static get observedAttributes() {
    //   return ['caption'];
    return ['caption', 'src', 'alt'];
    }
}

customElements.define('image-figure', ImageFigure); //? need dash for define custom element