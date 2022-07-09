//Utilizar o fetch para recuperar as notícias;
//Aplicar conceitos POO;
//Tratar os dados e utilizar o DOM para contruir a cada template de cada notícia;

function card(object) {

    const divMain      = document.createElement("li");
    const div          = document.createElement("div");
    const pTag         = document.createElement("p");
    const h3           = document.createElement("h3");
    const pDescription = document.createElement("p");
    const pSource      = document.createElement("p");
    const figure       = document.createElement("figure");
    const img          = document.createElement("img");

    img.className          = "img-card";
    figure.className       = "fig-card";
    div.className          = "div-info-card";
    pTag.className         = "p-tag-card";
    pDescription.className = "pDescription";
    pSource.className      = "pSource";

    pTag.innerText         = object.categoria;
    h3.innerText           = object.titulo;
    pDescription.innerText = object.resumo;
    pSource.innerText      = `Fonte: ${object.fonte}`;
    img.src                = object.imagem;

    div.append(pTag, h3, pDescription, pSource);
    figure.appendChild(img);
    divMain.append(figure, div);

    return divMain;
}

function cardMain(object) {

    const divMain      = document.querySelector(".div-news");
    const div          = document.createElement("div");
    const pTag         = document.createElement("p");
    const h1           = document.createElement("h1");
    const pSource      = document.createElement("p");
    const figure       = document.querySelector(".fig-news");
    const img          = document.createElement("img");

    div.className          = "div-info";
    pTag.className         = "tag-info-main";
    h1.className           = "titule-info-main";
    pSource.className      = "source-info-main";
    img.className          = "img-cardMain";

    pTag.innerText         = object.categoria;
    h1.innerText           = object.titulo;
    pSource.innerText      = `Fonte: ${object.fonte}`;
    img.src                = object.imagem;

    div.append(pTag, h1, pSource);
    figure.appendChild(img);
    divMain.append(div, figure);

    return divMain;
}

async function requisicao() {
    const url = 'https://kenzie-news-api.herokuapp.com/api/news';
    
    const result = await fetch(url)
    .then((res) => res.json());

    document.querySelector(".main-news").appendChild(cardMain(result[0]));
    result.forEach(news => {
        document.querySelector("ul").appendChild(card(news));
    });
}

requisicao() 
