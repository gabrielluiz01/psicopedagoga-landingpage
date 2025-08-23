function myFunc() {
  console.log("TESTE");
  window.alert('teste')
}

function sendMessage() {
  const isMobile = /iPhone|Android|iPad|iPod|Mobile/i.test(navigator.userAgent);

  const message = encodeURIComponent("Olá, gostaria de mais informações");

  const link = isMobile
  ? `https://api.whatsapp.com/send?phone=+5521987623685&text=${message}`
  : `https://web.whatsapp.com/send?phone=+5521987623685&text=${message}`

  window.open(link, '_blank');
}

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