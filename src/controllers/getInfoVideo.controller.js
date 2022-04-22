const ytdl = require('ytdl-core')

module.exports = async (url) => {
  const data = ytdl.getBasicInfo(url).then((info) => {
    return info
  })

  return data
}
