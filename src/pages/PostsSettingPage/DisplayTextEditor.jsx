import React from 'react'
import SharedTextEditor from './SharedTextEditor'

const DisplayTextEditor = () => {
  return (
    <SharedTextEditor>
      <div className="empty-box f-center f-1">
          <p>現在、この投稿のコンテンツはありません</p>
      </div>
    </SharedTextEditor>
  )
}

export default DisplayTextEditor