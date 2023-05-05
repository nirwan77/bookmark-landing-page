const email = document.getElementById('email');
const emailError = document.querySelector('.email__error');
const submitBtn = document.querySelector('.submit-btn');
const exclamation = document.querySelector('.exclamation-hidden');

function checkEmail(e) {
     e.preventDefault();
     let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
     if(regExpEmail.test(email.value)) {
          emailError.classList.remove('email__error--active');
          email.classList.remove("email__error--active");
          exclamation.classList.remove("fa-circle-exclamation--active");
     } else {
          emailError.classList.add('email__error--active');
          email.classList.add("email__error--active");
          exclamation.classList.add("fa-circle-exclamation--active");
     }
}

submitBtn.addEventListener('click', checkEmail);
email.addEventListener('input', checkEmail);