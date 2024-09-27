import './style.css'

// Obtener el formulario de inicio de sesión
const registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit', async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault()

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData(registerForm)

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries())

  // Realizar una solicitud POST a la API de registro de usuarios
  fetch('http://localhost:4321/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(entries),
  }).then((response) => {
    if (response.ok) {
      window.location.href = '/'
    } else {
      return
    }
  })
})
