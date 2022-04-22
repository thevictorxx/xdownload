const $url = document.getElementById('url')
const $btnBuscar = document.getElementById('btn-buscar')
const $btnLimpiar = document.getElementById('btn-limpiar')

$btnLimpiar.addEventListener('click', (e) => {
  e.preventDefault()
  $url.value = ''
})

$btnBuscar.addEventListener('click', (e) => {
  e.preventDefault()
  const url = $url.value
  if (url) {
    window.location.href = `/url/yt?url=${url}`
  }
})
