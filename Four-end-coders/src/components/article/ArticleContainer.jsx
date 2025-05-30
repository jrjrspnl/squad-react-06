import React,{useEffect,useState} from 'react'
import Article from './Article'
import { getEvents } from "../../sevices/events.service.js";

const ArticleContainer = () => {
    const [articleList,setArticleList] = useState([])
    const [filter, setFilter] = useState('all');

    const ListArticleData = async () => {
        const data = await getEvents();
        setArticleList(data)
    }

    useEffect(() => {
        ListArticleData()
    },[])
    const handleCategory = (e) => {
        setFilter(e.target.value)
    }

    const filteredArticles = filter === 'all' ? articleList : articleList.filter(article => article.category === filter)
    console.log('hehe', filteredArticles)
  return (
    <div style={{backgroundColor: "#000000"}}>
        <Article filteredArticles={filteredArticles} handleCategory={handleCategory}/>

    </div>
  )
}

export default ArticleContainer
