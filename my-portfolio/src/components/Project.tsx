
import React from 'react'

import Heading from './Heading'
import Card from './Card'
const deta = [
    {
        id: 0,
        title: "Simple Calculator",
        desc: "A react & Typescript based app for managing and organizing your task efficently",
        img: "/project1.jpeg",
        tags: ["React","Node","Css","Typescript"],
   },
   {
    id: 1,
    title: "Todo List",
    desc: "A react & Typescript based app for managing and organizing your task efficently",
    img: "/project2.jpeg",
    tags: ["React","Node","Css","Typescript"],
},
{
    id: 2,
    title: "Number Guessing",
    desc: "A react & Typescript based app for managing and organizing your task efficently",
    img: "/project3.jpeg",
    tags: ["React","Node","Css","Typescript"],
},
]
const Project =() => {
  return (
    <div id='project' className=' container pb-32'>
        <Heading title='My Project'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 plase-item-center'>
            {deta.map((el) => (<Card
                key={el.id}
                //title={el.title}//
                desc={el.desc}
                img={el.img}
                tags={el.tags} title={''}            />))}
        </div>

    </div>
  )
}
export default Project