!(function (window) {
    // Definimos la URL del host y la URL completa del iframe
    const host = "https://labs.heygen.com",
      url =
        host +
        "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJlYjBhOGNjODA0NmY0NzZkYTU1MWE1NTU5%0D%0AZmJiNWM4MiIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0AL2ViMGE4Y2M4MDQ2ZjQ3NmRhNTUxYTU1NTlmYmI1YzgyL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjAy%0D%0AMDA3YWRjYmM3ODQ4ZWViNDU4MzA3MWU0OTQ0YWViIiwidXNlcm5hbWUiOiIyYjQwNGQyMTQwZDU0%0D%0AM2VhOTc1Y2E3MDQzNGQ4OTdjMyJ9&inIFrame=1",
      // Obtenemos el ancho del cliente
      clientWidth = document.body.clientWidth,
      // Creamos un div para envolver el widget
      wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";
  
    // Creamos un div para contener el iframe
    const container = document.createElement("div");
    container.id = "heygen-streaming-container";
  
    // Creamos un elemento style para definir los estilos CSS del widget
    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        left: 40px;
        bottom: 40px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
        transition: all linear 0.1s;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${
          clientWidth < 540
            ? "height: 266px; width: 96%; left: 50%; transform: translateX(-50%);"
            : "height: 366px; width: calc(366px * 16 / 9);"
        }
        border: 0;
        border-radius: 8px;
      }
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
      }
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;
  
    // Creamos el iframe y configuramos sus propiedades
    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = !1;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;
  
    // Variables para controlar la visibilidad y el estado inicial del widget
    let visible = !1,
      initial = !1;
  
    // Añadimos un event listener para escuchar mensajes del host
    window.addEventListener("message", (e) => {
      if (e.origin === host && e.data && e.data.type && e.data.type === "streaming-embed") {
        if (e.data.action === "init") {
          initial = !0;
          wrapDiv.classList.toggle("show", initial);
        } else if (e.data.action === "show") {
          visible = !0;
          wrapDiv.classList.toggle("expand", visible);
        } else if (e.data.action === "hide") {
          visible = !1;
          wrapDiv.classList.toggle("expand", visible);
        }
      }
    });
  
    // Añadimos el iframe al contenedor
    container.appendChild(iframe);
    // Añadimos el stylesheet y el contenedor al div de envoltura
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    // Añadimos el div de envoltura al body del documento
    document.body.appendChild(wrapDiv);
  })(globalThis);
  