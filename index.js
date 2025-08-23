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

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const recipient = "gabriel.sogames01@gmail.com";
  
  const subject = encodeURIComponent("Contato via site");
  const emailBody =
    `Nome: ${name}%0D%0AEmail: ${email}%0D%0ATelefone: ${phone}%0D%0AMensagem: ${message}`;

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${emailBody}`,
    "_blank"
  );
}

function redirectEmail(ev) {
  ev.preventDefault();
  const recipient = "gabriel.sogames01@gmail.com";
  window.open(`http://mail.google.com/mail/?view=cm&fm=1&to=${recipient}`);
}

function closeMenu () {
  const menu = document.querySelector(".menu-modal");

  menu.style.display = "none";
}

function openMenu() {
  const menu = document.querySelector(".menu-modal");

  menu.style.display = "flex"
}