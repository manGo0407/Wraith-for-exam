const form = document.querySelector('#regForm')
const message = document.querySelector('.msg')
const msgAlert = document.querySelector('.msgAlert')
console.log(form)
console.log(message)
console.log('hi');

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const res = Object.fromEntries(data)
  if (!res.login || !res.password || !res.email) {
    msgAlert.innerText = "Введите свои данные!"
    msgAlert.style.color = 'red'
    // setTimeout(() => {
    //   msgAlert.style.display = 'none'
    // }, 1500)
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      })
      const result = await response.json()
      if (result.msg) {
        form.style.display = 'none'
        msgAlert.style.display = 'none'
        message.style.display = 'block'
        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
      }
      if (result.err) {
        // const msg = document.querySelector('.regMsg')
        msgAlert.innerText = result.err
        msgAlert.style.color = 'red'
        // setTimeout(() => {
        //   msg.style.display = 'none'
        // }, 1500)
      }
    } catch (error) {
      console.log('Ошибка регистрации ==>', error)
      msgAlert.innerText = "Такой пользователь уже существует!"
      msgAlert.style.color = 'red'
    //   setTimeout(() => {
    //     msgAlert.style.display = 'none'
    //   }, 1500)
    }
  }
})
