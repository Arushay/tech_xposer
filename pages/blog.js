import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import * as fs from 'fs'

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
 

  return (
    <div>
     
        <div className="flex flex-col text-center w-full mb-20 pt-2 mt-3"> 
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      </div>
      {blogs.map((blogItem)=>{
        return <section className="text-gray-600 body-font">
          <div className="flex flex-col text-center w-full mb-20"> 
           <div className="container px-5 py-24 ">
            <div className="flex flex-wrap -m-4" key={blogItem.slug}>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <h2 className="text-gray-900 text-lg title-font font-medium cursor-pointer">{blogItem.title}</h2></Link>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{blogItem.metadesc.substr(0, 270)}...</p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

      })}
         
    </div>
  )
}



export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), "utf-8")
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default blog;