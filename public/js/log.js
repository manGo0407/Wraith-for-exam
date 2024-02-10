const form = document.querySelector("#loginForm");
const message = document.querySelector(".msg");
const msgAlert = document.querySelector(".msgAlert");
console.log("hi");
console.log(form);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    msgAlert.innerText = "Введите свои данные!";
    msgAlert.style.color = "red";
    // setTimeout(() => {
    //   msgAlert.style.display = 'none'
    // }, 1500)
  } else {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      console.log("Это результат ------->", result);
      if (result.msg) {
        form.style.display = "none";
        message.style.display = "block";
        msgAlert.style.display = "none";
        setTimeout(() => {
          window.location.href = "/";
        }, 2500);
      } else {
        msgAlert.innerText = "'Неверный пароль'";
        msgAlert.style.color = "red";
      }
      if (result.err) {
        msgAlert.innerText = "Такой пользователь не найден";
        msgAlert.style.color = "red";
        // setTimeout(() => {
        //   msgAlert.style.display = 'none'
        // }, 1500)
      }
    } catch (error) {
      //   console.log('Ошибка авторизации ==>', error)
      msgAlert.innerText = "Такого пользователя не существует!";
      msgAlert.style.color = "red";
      // setTimeout(() => {
      //   msgAlert.style.display = 'none'
      // }, 1500)
    }
  }
});
