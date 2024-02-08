var sectionButtons = document.getElementsByClassName("juwGPd OCzgxd");
var sectionButtons2 = document.getElementsByClassName(
  "iGVLpd kGQAp BqKtob lNHeqe"
);

// Adiciona um evento de clique a cada botão de download
for (var i = 0; i < sectionButtons.length; i++) {
  var buttonDownload = document.createElement("button");
  buttonDownload.textContent = "Fazer Download";
  buttonDownload.setAttribute(
    "style",
    "height: 25px; width: 90px; top: 28px; right: 22px; position: absolute; font-size: 10px; font-weight: 400; color: aqua;"
  );

  // Adiciona um evento de clique ao botão de download
  buttonDownload.addEventListener("click", function (event) {
    // Encontra o elemento pai (container) do botão clicado
    var containerElement = event.target.closest(".eA0Zlc");

    // Verifica se o containerElement foi encontrado
    if (containerElement) {
      // Encontra a imagem dentro do container
      var imageUrl = containerElement.querySelector("img");

      // Verifica se a imagem foi encontrada
      if (imageUrl) {
        // Chama a função downloadImage para baixar a imagem
        downloadImage(imageUrl.src, "download-image.jpg");
      } else {
        alert("Imagem não encontrada!");
      }
    } else {
      alert("Container do botão não encontrado!");
    }
  });

  // Adiciona o botão de download ao elemento pai correspondente
  sectionButtons[i].appendChild(buttonDownload);
}

for (var i = 0; i < sectionButtons2.length; i++) {
  var buttonDownload2 = document.createElement("button");
  buttonDownload2.textContent = "🡇";
  buttonDownload2.setAttribute(
    "style",
    "height: 20px; width: 30px; top: -175px; right: 10px; position: absolute; font-size: 10px; font-weight: 400; color: aqua;"
  );

  // Adiciona um evento de clique ao botão de download
  buttonDownload2.addEventListener("click", function (event) {
    // Evita o comportamento padrão do clique no botão (que é redirecionar se estiver dentro de um link)
    event.preventDefault();

    // Encontra o elemento pai (container) do botão clicado
    var containerElement = event.target.closest(".isv-r");

    // Verifica se o containerElement foi encontrado
    if (containerElement) {
      // Encontra a imagem dentro do container
      var imageUrl = containerElement.querySelector("img");

      // Verifica se a imagem foi encontrada
      if (imageUrl) {
        // Cria um objeto XMLHttpRequest para buscar a imagem como um blob
        var xhr = new XMLHttpRequest();
        xhr.open("GET", imageUrl.src, true);
        xhr.responseType = "blob";

        xhr.onload = function () {
          // Converte a resposta em um blob
          var blob = xhr.response;

          // Cria um link temporário para fazer o download
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "download-image.jpg";

          // Clica no link para iniciar o download
          link.click();
        };

        // Envia a solicitação para buscar a imagem
        xhr.send();
      } else {
        alert("Imagem não encontrada!");
      }
    } else {
      alert("Container do botão não encontrado!");
    }
  });

  // Adiciona o botão de download ao elemento pai correspondente
  sectionButtons2[i].appendChild(buttonDownload2);
}

// Adiciona um manipulador de eventos ao link com a classe FRuiCf islib nfEiy para prevenir o redirecionamento
var linkElement = document.querySelector(".FRuiCf.islib.nfEiy");
if (linkElement) {
  linkElement.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
  });
}

function downloadImage(url, filename) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";

  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement("a");
    tag.href = imageUrl;
    tag.download = filename;
    tag.click();
  };

  xhr.send();
}
