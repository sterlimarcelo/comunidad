function mostrar(id) {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.classList.add("oculto");
  });
  document.getElementById(id).classList.remove("oculto");
}

// Registrar el service worker para la PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Error:", err));
}
