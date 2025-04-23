function submitHandler(event) {
  event.preventDefault(); // не перезавантажуємо сторінку

  const form = event.target;

  const userName = form.userName.value;
  const phone = form.phone.value;
  const birthday = form.birthday.value;
  const email = form.email.value;

  console.log("Ім'я користувача:", userName);
  console.log("Номер телефону:", phone);
  console.log("Дата народження:", birthday);
  console.log("Електронна пошта:", email);
}

// Прив'язуємо обробник події
document.getElementById('userForm').addEventListener('submit', submitHandler);
