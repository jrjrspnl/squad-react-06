import React, {useEffect} from 'react'
import {getEvents} from '../../sevices/events.service.js'

const ArticlesLayout = () => {
  const articleList = async() => {
    const data = await getEvents();
    console.log('datas',data)
  }
  useEffect(() => {
    articleList()
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default ArticlesLayout
