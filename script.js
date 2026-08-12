const publicar = document.getElementById("publicar");

const feed = document.getElementById("feed");


publicar.addEventListener("click", () => {


    const titulo = document.getElementById("titulo").value.trim();

    const texto = document.getElementById("texto").value.trim();

    const arquivo = document.getElementById("imagem").files[0];


    if (!titulo && !texto) {

        alert("Digite um título ou um texto.");

        return;

    }


    if (arquivo) {


        const leitor = new FileReader();


        leitor.onload = function (e) {

            criarPost(titulo, texto, e.target.result);

        };


        leitor.readAsDataURL(arquivo);


    } else {


        criarPost(titulo, texto, "");


    }


    document.getElementById("titulo").value = "";

    document.getElementById("texto").value = "";

    document.getElementById("imagem").value = "";


});


function criarPost(titulo, texto, imagem) {


    const post = document.createElement("div");


    post.className = "post";


    post.innerHTML = `

        ${imagem ? `<img src="${imagem}">` : ""}


        <div class="post-conteudo">

            <h3>${titulo}</h3>

            <p>${texto}</p>

        </div>


        <div class="acoes">

            <button onclick="curtir(this)">❤️ Curtir</button>

            <button onclick="comentar()">💬 Comentar</button>

            <button onclick="compartilhar()">📤 Compartilhar</button>

        </div>

    `;


    feed.prepend(post);

}


function curtir(botao){


    if(botao.innerHTML==="❤️ Curtir"){

        botao.innerHTML="💚 Curtido";

    }else{

        botao.innerHTML="❤️ Curtir";

    }


}


function comentar(){


    const texto = prompt("Digite seu comentário:");


    if(texto){

        alert("Comentário enviado!");

    }


}


function compartilhar(){


    if(navigator.share){


        navigator.share({

            title:"SAGC",

            text:"Veja esta publicação no SAGC",

            url:location.href

        });


    }else{


        alert("Seu navegador não suporta compartilhamento.");


    }


}

