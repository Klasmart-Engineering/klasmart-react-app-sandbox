import React from 'react'
import { DownloadMediaHookInput, useDownloadMedia } from 'kidsloop-media-ui'

export const KidsLoopImage = ({
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
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>
  }
  if (loading) return <p>Loading ...</p>
  return (
    <div>
      <img alt="" src={src} />
    </div>
  )
}

export default KidsLoopImage
