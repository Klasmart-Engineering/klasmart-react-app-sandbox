import {
  DownloadMediaHookInput,
  useDownloadMedia,
} from '@kl-engineering/kidsloop-media-hooks'
import React from 'react'

export const AudioPlayer = ({
  mediaId,
  roomId,
  mimeType,
  client,
}: DownloadMediaHookInput) => {
  const { loading, error, src } = useDownloadMedia({
    mediaId,
    roomId,
    mimeType,
    client,
  })

  const mediaSource = new MediaSource()
  mediaSource.addEventListener('sourceopen', function () {
    var sourceBuffer = mediaSource.addSourceBuffer('audio/webm; codecs="opus"')
    fetchAB(src!, function (buf: BufferSource) {
      sourceBuffer.addEventListener('updateend', function (_) {
        mediaSource.endOfStream()
        //video.play();
        //console.log(mediaSource.readyState); // ended
      })
      sourceBuffer.appendBuffer(buf)
    })
  })

  function fetchAB(
    url: string | URL,
    cb: { (buf: BufferSource): void; (arg0: any): void },
  ) {
    console.log(url)
    var xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.responseType = 'arraybuffer'
    xhr.onload = function () {
      cb(xhr.response)
    }
    xhr.send()
  }

  //audio.src = URL.createObjectURL(mediaSource);

  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>
  }
  return (
    <div>
      <audio
        src={URL.createObjectURL(mediaSource)}
        controls
        controlsList="nodownload"
      />
    </div>
  )
}

export default AudioPlayer
