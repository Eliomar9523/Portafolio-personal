const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});


document.querySelectorAll("#menu a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("mostrar");
  });
});



document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    
    menu.classList.remove("mostrar");
  });
});



function abrirWhatsApp() {
  var numero = "524821054583"; 
  var mensaje = "Hola!";       
  var urlMovil = "whatsapp://send?phone=" + numero + "&text=" + mensaje;
  var urlWeb = "https://wa.me/" + numero + "?text=" + mensaje;

  
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = urlMovil; 
  } else {
    window.open(urlWeb, "_blank");   
  }
}



function abrirFacebook() {
  var urlApp = "fb://profile/eliomar.reyes.7587"; 
  var urlWeb = "https://www.facebook.com/eliomar.reyes.7587";

  
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    
    window.location.href = urlApp;

   
    setTimeout(function() {
      window.location.href = urlWeb;
    }, 1000);
  } else {
    
    window.open(urlWeb, "_blank");
  }
}


function abrirInstagram() {
  var urlApp = "instagram://user?username=eliomar.reyes.75873"; 
  var urlWeb = "https://www.instagram.com/eliomar.reyes.75873/";

  
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    
    window.location.href = urlApp;

    
    setTimeout(function() {
      window.location.href = urlWeb;
    }, 1000);
  } else {
   
    window.open(urlWeb, "_blank");
  }
}


const modal = document.getElementById("miModal");
const btn = document.getElementById("btnAbrir");
const span = document.querySelector(".close-btn");


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
