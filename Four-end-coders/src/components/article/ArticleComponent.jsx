import React, { useState, useEffect } from 'react'
import { getEvents } from "../../sevices/events.service.js";
import LeftArrow from '../../assets/icon/Group 3510.svg'
import RightArrow from '../../assets/icon/Group 3543.svg'

const checkScreen = () => {
  const width = window.innerWidth
  const mobileWith = 640;
   return width < mobileWith
}

alert(checkScreen())
const Broadway = ({broadway}) => {
  return(
const Broadway = ({ broadway }) => {
  return (
    <>
      <div className="flex flex-row items-cente justify-between m-5 pt-10">
         <h2 className='text-white text-[24px] font-bold'>Broadway</h2>
         <div className="flex gap-2">
           <span ><img className="h-[48px] w-[48px]" src={LeftArrow} alt="" /></span>
           <span><img className="h-[48px] w-[48px]" src={RightArrow} alt="" /></span>
         </div>
      <div className="flex flex-row items-cente justify-between m-5 px-25">
        <h2 className='text-white'>Broadway</h2>
        <div className="flex gap-2">
          <span><img src={LeftArrow} alt="" /></span>
          <span><img src={RightArrow} alt="" /></span>
        </div>
      </div>
      <div className="mt-2 md:flex">
            {broadway.map((broadway)=> (
              <div style={{backgroundColor: "#1E1F22"}} className=" m-5 p-5 flex flex-col md:flex-row rounded-[16px] cursor-pointer hover:opacity-70">
                <img alt={broadway.title} src={broadway.imageUrl}  className="h-[219.09px] w-[311px] md:h-[251px] md:w-[251px]" />
                    <div className="text-white  flex flex-col mt-5 md:ml-[16px]">
                        <span className="md:h-[81px] md:w-[271px] md:text-[20px] font-medium">{broadway.title}</span>
                        <span className="text-[14px] font-normal mt-[8px]">{broadway.description}</span>
                        <div className="text-[14px] font-normal flex flex-col mt-[52px]">
                          <span className="">Publish:</span>
                          <span className="">{broadway.published}</span>
                        </div>
                    </div>
            </div>
            ))}
      <div className="md:flex px-25">
        {broadway.map((broadway) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex rounded-xl">
            <img alt={broadway.title} src={broadway.imageUrl} className="h-64 w-64" />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{broadway.title}</span>
              <span className="">{broadway.description}</span>
              <span className="">{broadway.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}
const Musical = ({ musical }) => {
  return (
    <>
   <div className="flex flex-row items-cente justify-between m-5  pt-10">
         <h2 className='text-white text-[24px] font-bold'>Broadway</h2>
         <div className="flex gap-2">
           <span ><img className="h-[48px] w-[48px]" src={LeftArrow} alt="" /></span>
           <span><img className="h-[48px] w-[48px]" src={RightArrow} alt="" /></span>
         </div>
      <div className="flex flex-row items-cente justify-between m-5 px-25">
        <h2 className='text-white'>Musical</h2>
        <div className="flex gap-2">
          <span><img src={LeftArrow} alt="" /></span>
          <span><img src={RightArrow} alt="" /></span>
        </div>
      </div>
      <div className="">
            {musical.map((musical)=> (
              <div style={{backgroundColor: "#1E1F22"}} className=" m-5 p-5 flex flex rounded-[16px] cursor-pointer hover:opacity-70">
                <img alt={musical.title} src={musical.imageUrl}  className="h-[15.688rem] w-[15.688rem]" />
                    <div className="text-white  flex flex-col  ml-[16px]">
                        <span className="h-[81px] w-[271px] text-[20px] font-medium">{musical.title}</span>
                        <span className="text-[14px] font-normal mt-[8px]">{musical.description}</span>
                        <div className="text-[14px] font-normal flex flex-col mt-[52px]">
                          <span className="">Publish:</span>
                          <span className="">{musical.published}</span>
                        </div>
                    </div>
            </div>
            ))}
      <div className="md:flex px-25">
        {musical.map((musical) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex rounded-xl">
            <img alt={musical.title} src={musical.imageUrl} className="h-64 w-64" />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{musical.title}</span>
              <span className="">{musical.description}</span>
              <span className="">{musical.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}
const Ballet = ({ballet}) => {
  return(
   <>
    <div className="flex flex-row items-cente justify-between m-5  pt-10">
         <h2 className='text-white text-[24px] font-bold'>Broadway</h2>
         <div className="flex gap-2">
           <span ><img className="h-[48px] w-[48px]" src={LeftArrow} alt="" /></span>
           <span><img className="h-[48px] w-[48px]" src={RightArrow} alt="" /></span>
         </div>
    </div>
    <div className="">
            {ballet.map((ballet)=> (
              <div style={{backgroundColor: "#1E1F22"}} className=" m-5 p-5 flex  rounded-[16px] cursor-pointer hover:opacity-70">
                <img alt={ballet.title} src={ballet.imageUrl}  className="h-[15.688rem] w-[15.688rem]" />
                    <div className="text-white  flex flex-col  ml-[16px]">
                        <span className="h-[81px] w-[271px] text-[20px] font-medium">{ballet.title}</span>
                        <span className="text-[14px] font-normal mt-[8px]">{ballet.description}</span>
                        <div className="text-[14px] font-normal flex flex-col mt-[52px]">
                          <span className="">Publish:</span>
                          <span className="">{ballet.published}</span>
                        </div>
                    </div>
            </div>
            ))}
    </div>
   </>
const Ballet = ({ ballet }) => {
  return (
    <>
      <div className="flex flex-row items-cente justify-between m-5 px-25">
        <h2 className='text-white'>Ballet</h2>
        <div className="flex gap-2">
          <span><img src={LeftArrow} alt="" /></span>
          <span><img src={RightArrow} alt="" /></span>
        </div>
      </div>
      <div className="md:flex px-25">
        {ballet.map((ballet) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex rounded-xl">
            <img alt={ballet.title} src={ballet.imageUrl} className="h-64 w-64" />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{ballet.title}</span>
              <span className="">{ballet.description}</span>
              <span className="">{ballet.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const ArticleComponent = () => {

  const [filter, setFilter] = useState('all');
  const [broadway, setBroadWay] = useState([]);
  const [musical, setMusical] = useState([]);
  const [ballet, setBallet] = useState([]);

  const ListArticleData = async () => {
    const data = await getEvents();

    setBroadWay(data.filter((broadway) => broadway.category === 'broadway'))
    setMusical(data.filter((musical) => musical.category === 'musical'))
    setBallet(data.filter((ballet) => ballet.category === 'ballet'))

  }

  useEffect(() => {
    ListArticleData()
  }, [])

  const handleCategory = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div style={{backgroundColor: "#000000"}}>

        <div className='md:mx-[120px]' >
    <div style={{ backgroundColor: "#000000" }}>
      <div>
         <div className="flex justify-between items-center mx-5 pt-5">
                <h2 className="text-white md:text-red-500 text-[24px] md:text-[32px] font-bold ">Articles</h2>
                 <select
                    className="text-white bg-slate-900 w-[143px] p-[16px] border-0 h-[56px] md:w-[180px] "
                    id="cars"
                    onChange={handleCategory}
                    style={{borderRadius: "16px"}}
                >
                    <option className="text-white" value="all">
                    All
                    </option>
                    <option className="text-white" value="broadway">
                    broadway
                    </option>
                    <option className="text-white" value="musical">
                    musical
                    </option>
                    <option className="text-white" value="ballet">
                    ballets
                    </option>
                 </select>
       </div>
        <div className="flex justify-between items-center mx-5 px-25">
          <h2 className="text-white">Article</h2>
          <select
            className="text-white bg-slate-900 py-2 px-2 border-0"
            id="cars"
            onChange={handleCategory}
          >
            <option className="text-white" value="all">
              All
            </option>
            <option className="text-white" value="broadway">
              broadway
            </option>
            <option className="text-white" value="musical">
              musical
            </option>
            <option className="text-white" value="ballet">
              ballets
            </option>
          </select>
        </div>
      </div>
        <div className="flex flex-col">
          {(filter === 'all' || filter === 'broadway') && <Broadway broadway={broadway}/>}
          {(filter === 'all' || filter === 'musical') && <Musical musical={musical}/>}
          {(filter === 'all' || filter === 'ballet') && <Ballet ballet={ballet}/>}
        </div>
    </div>

    </div>
  )
}

export default ArticleComponent;
