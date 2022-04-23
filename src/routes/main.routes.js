const { Router } = require('express')
const getInfoVideo = require('../controllers/getInfoVideo.controller')
const ytdl = require('ytdl-core')

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

router.get('/download', async (req, res) => {
  const URL = req.query.URL
  res.header('Content-Disposition', 'attachment; filename="video.mp4"')
  ytdl(URL, {
    format: 'mp4'
  }).pipe(res)
})

module.exports = router
