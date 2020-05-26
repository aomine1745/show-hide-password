const toggle = document.getElementById('toggle')
const eye = document.querySelector('.fa-eye')
const password = document.getElementById('password')

toggle.addEventListener('click', () => {
	password.type = password.type === 'password' ? 'text' : 'password'
	eye.classList.toggle('hide')
})