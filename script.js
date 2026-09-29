/*
    MUDA ESTE NÚMERO PARA O TEU
    antes de publicares o portfólio.
*/

const numeroWhatsApp = "351926022274";


/* HEADER */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* MENU MOBILE */

const botaoMenu =
    document.getElementById("menu-mobile");

const nav =
    document.getElementById("nav");

botaoMenu.addEventListener("click", () => {

    nav.classList.toggle("aberto");

});

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("aberto");

    });

});


/* CONTACTO WHATSAPP */

const form =
    document.getElementById("form-contacto");

form.addEventListener("submit", event => {

    event.preventDefault();


    const nome =
        document.getElementById("nome")
            .value.trim();

    const negocio =
        document.getElementById("negocio")
            .value.trim();

    const mensagem =
        document.getElementById("mensagem")
            .value.trim();


    if (!nome || !negocio) {

        alert(
            "Preenche o teu nome e o tipo de negócio."
        );

        return;

    }


    let texto =
`Olá Gonçalo! Vi o teu portfólio e gostaria de falar contigo sobre um website.

Nome: ${nome}
Negócio: ${negocio}`;


    if (mensagem) {

        texto +=
            `\n\nO que procuro:\n${mensagem}`;

    }


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;


    window.open(
        url,
        "_blank"
    );

});


/* ANO */

document.getElementById("ano")
    .textContent =
    new Date().getFullYear();