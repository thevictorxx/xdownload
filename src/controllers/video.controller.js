const ytdl = require('ytdl-core')
const getInfoVideo = require('../utils/getVideoInfo')

const getInfo = async (req, res) => {
  try {
    const { formats, videoDetails } = await getInfoVideo(req.query.url)
    const filteredFormarts = formats.filter((format) => {
      return format.audioQuality !== undefined
    })
    const mutedFormats = formats.filter((format) => {
      return format.audioQuality === undefined
    })
    const videoData = {
      title: videoDetails.title,
      urlImg: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
      thumbnail: videoDetails.thumbnail,
      filteredFormarts,
      mutedFormats,
      url: req.query.url
    }
    res.render('videoInfo', { videoData })
  } catch (error) {
    if (error) {
      res.redirect('/?format')
    }
  }
}

const getDownload = async (req, res) => {
  const URL = req.query.URL
  const ITAG = req.query.ITAG
  const EXT = req.query.EXT
  const { videoDetails } = await getInfoVideo(URL)
  const nombreArchivo = videoDetails.title + '.' + EXT.split(';')[0].split('/')[1]
  res.header('Content-Disposition', `attachment; filename="${nombreArchivo}"`)
  ytdl(URL, {
    quality: ITAG
  }).pipe(res)
}
module.exports = {
  getInfo,
  getDownload
}
