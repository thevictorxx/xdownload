const { Router } = require('express')
const getInfoVideo = require('../controllers/getInfoVideo.controller')

const router = Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/url/:url', async (req, res) => {
  const { formats, videoDetails } = await getInfoVideo(req.query.url)
  const videoData = {
    title: videoDetails.title,
    urlImg: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
    thumbnail: videoDetails.thumbnail,
    formats
  }
  res.render('videoInfo', { videoData })
})

module.exports = router
