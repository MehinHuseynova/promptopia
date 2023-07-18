'use client'

import React, { useState, useEffect } from 'react'

const Feed = () => {
  const [prompts, setPrompts] = useState()
  useEffect(() => {
    const feedData = async () => {
      const response = await fetch('/api/prompt/feed')
      if (response.ok) {
        const promptsData = await response.json()
        setPrompts(promptsData)
      }
    }
    feedData()
  }, [])
  if (!prompts?.length) {
    return <div>Looading...</div>
  }
  return (
    <div>
      {prompts.map(({ prompt }) => (
        <li>{prompt}</li>
      ))}
    </div>
  )
}

export default Feed
