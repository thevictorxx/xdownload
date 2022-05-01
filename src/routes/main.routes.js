const { Router } = require('express')
const { getInfo, getDownload } = require('../controllers/video.controller')

const router = Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/url/:url', getInfo)

router.get('/download', getDownload)

module.exports = router
