import { useEffect } from "react";
import "./BotpressChat.css";

function BotpressChat() {
  useEffect(() => {
    // Cargar el inject.js
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    injectScript.onload = () => {
      // Cuando inject.js esté listo, cargar tu configuración
      const configScript = document.createElement("script");
      configScript.src =
        "https://files.bpcontent.cloud/2025/04/27/17/20250427173358-JB9J4DDC.js";
      configScript.async = true;
      document.body.appendChild(configScript);
    };

    // Limpieza si el componente se desmonta
    return () => {
      document.body.removeChild(injectScript);
    };
  }, []);

  return null; // No renderiza nada
}

export default BotpressChat;

// import { useEffect } from "react";
// import "./BotpressChat.css";

// function BotpressChat() {
//   useEffect(() => {
//     // Agregar el estilo para centrar el chat
//     const style = document.createElement("style");
//     style.innerHTML = `
//         #bp-web-widget {
//           position: fixed !important;
//           top: 50% !important;
//           left: 50% !important;
//           transform: translate(-50%, -50%) !important;
//           z-index: 9999 !important;
//         }
//       `;
//     document.head.appendChild(style);

//     // Cargar el inject.js
//     const injectScript = document.createElement("script");
//     injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
//     injectScript.async = true;
//     document.body.appendChild(injectScript);

//     injectScript.onload = () => {
//       // Cuando inject.js esté listo, cargar tu configuración
//       const configScript = document.createElement("script");
//       configScript.src =
//         "https://files.bpcontent.cloud/2025/04/27/17/20250427173358-JB9J4DDC.js";
//       configScript.async = true;
//       document.body.appendChild(configScript);

//       // Asegurarse de que el iframe esté presente antes de manipularlo
//       const checkIframeInterval = setInterval(() => {
//         const iframe = document.querySelector('iframe[name="webchat"]');
//         if (iframe instanceof HTMLIFrameElement) {
//           // Comprobamos que sea un iframe
//           clearInterval(checkIframeInterval); // Detener la comprobación

//           // Reemplazar la clase 'bpClose' por 'bpOpen' si es necesario
//           if (iframe.classList.contains("bpClose")) {
//             iframe.classList.remove("bpClose");
//             iframe.classList.add("bpOpen");
//           }

//           // Eliminar el segundo SVG
//           const svgElements = iframe.contentWindow?.document.querySelectorAll(
//             "div.bpReset.bpHeaderContentActionsContainer svg.bpHeaderContentActionsIcons"
//           );
//           if (svgElements && svgElements.length > 1) {
//             svgElements[1].remove(); // Eliminar el segundo SVG
//           }

//           // Modificar el texto y el href de "⚡ by Botpress"
//           const botpressLink = iframe.contentWindow?.document.querySelector(
//             ".bpComposerPoweredBy"
//           );
//           if (botpressLink) {
//             botpressLink.textContent = "Sobre mi"; // Reemplazar el texto
//             botpressLink.setAttribute(
//               "href",
//               "https://frandepe.vercel.app/about"
//             ); // Reemplazar el href
//           }
//         }
//       }, 100); // Comprobar cada 100ms si el iframe está disponible
//     };

//     // Limpieza si el componente se desmonta
//     return () => {
//       document.body.removeChild(injectScript);
//       document.head.removeChild(style); // Eliminar el estilo cuando se desmonte el componente
//     };
//   }, []);

//   return null; // No renderiza nada
// }

// export default BotpressChat;
