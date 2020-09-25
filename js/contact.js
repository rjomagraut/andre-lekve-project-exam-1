const form = document.querySelector('#contactForm');

form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log('The form was submitted');

  const name = document.querySelector('#name');
  const nameError = document.querySelector('#nameError');
  const nameValue = name.value;

  if (checkInputLength(nameValue) === true) {
    nameError.style.display = 'none';
  } else {
    nameError.style.display = 'block';
  }

  const address = document.querySelector('#address');
  const addressError = document.querySelector('#addressError');
  const addressValue = address.value;

  if (checkInputLengthAddress(addressValue) === true) {
    addressError.style.display = 'none';
  } else {
    addressError.style.display = 'block';
  }

  const postalcode = document.querySelector('#postalcode');
  const postalcodeError = document.querySelector('#postalcodeError');
  const postalcodeValue = postalcode.value;

  if (checkInputLengthPostalcode(postalcodeValue) === true) {
    postalcodeError.style.display = 'none';
  } else {
    postalcodeError.style.display = 'block';
  }

  const email = document.querySelector('#email');
  const emailError = document.querySelector('#emailError');
  const invalidEmailError = document.querySelector('#invalidEmailError');

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = 'none';
  } else {
    invalidEmailError.style.display = 'block';
  }

  const question = document.querySelector('#question');
  const questionError = document.querySelector('#questionError');
  const questionValue = question.value;

  if (checkInputLengthQuestion(questionValue) === true) {
    questionError.style.display = 'none';
  } else {
    questionError.style.display = 'block';
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 1) {
    return true;
  } else {
    return false;
  }
}

function checkInputLengthAddress(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 1) {
    return true;
  } else {
    return false;
  }
}

function checkInputLengthPostalcode(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 5) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function checkInputLengthQuestion(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 10) {
    return true;
  } else {
    return false;
  }
}
