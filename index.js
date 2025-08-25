function sendMessage() {
  const isMobile = /iPhone|Android|iPad|iPod|Mobile/i.test(navigator.userAgent);

  const message = encodeURIComponent("Olá, gostaria de mais informações");

  const link = isMobile
  ? `https://api.whatsapp.com/send?phone=+5521987623685&text=${message}`
  : `https://web.whatsapp.com/send?phone=+5521987623685&text=${message}`

  window.open(link, '_blank');
}

function formatPhone(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, '');

  if(value.length > 11) value = value.slice(0, 11);

  let formatted = value;

  if (value.length > 2 && value.length <= 6) {
    formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length > 6 && value.length <= 10) {
    formatted = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
  } else if (value.length === 11) {
    formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  }

  input.value = formatted;
}

document.getElementById('phone').addEventListener('input', formatPhone);

function sendEmail(ev) {
  ev.preventDefault();

   const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
    recipient: "rebecagarcia.ribeiro@gmail.com"
  };

  emailjs.send('service_1uoiiwn', 'template_125056w', templateParams)
    .then(function(response) {
      console.log('Email enviado!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contactForm').reset();
    }, function(error) {
      console.error('Erro ao enviar email', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    });
}

function redirectEmail(ev) {
  ev.preventDefault();
  window.location.href = "#form"
}

function closeMenu () {
  const menu = document.querySelector(".menu-modal");

  menu.style.display = "none";
}

function openMenu() {
  const menu = document.querySelector(".menu-modal");

  menu.style.display = "flex"
}

function toggleCertifications() {
  const list = document.querySelector(".cert-list");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (list.classList.contains("expanded")) {
    list.style.maxHeight = "120px";
    list.classList.remove("expanded");
    toggleBtn.textContent = "Ver mais";
  } else {
    list.style.maxHeight = list.scrollHeight + "px";
    list.classList.add("expanded");
    toggleBtn.textContent = "Ver menos";
  }
}


