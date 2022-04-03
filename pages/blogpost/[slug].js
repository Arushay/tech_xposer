import React, { useState } from 'react'
import * as fs from 'fs'

const slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
    const [blog, setBlog] = useState(props.myblog)
   
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-100 mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 py-2">{blog && blog.title}</h1>
                       {blog &&  <p dangerouslySetInnerHTML={createMarkup(blog.content)} className="leading-relaxed text-base py-2"></p> }
                    </div>
                </div>
            </section>

        </div>
    )
}



export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: "CSS Cheatsheet" } },
        { params: { slug: "CSS Javascript" } },
      ],
      fallback: true // false or 'blocking'
    };
  }

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
    
    return {
      props: { myblog: JSON.parse(myblog) }, // will be passed to the page component as props
    }
  }

export default slug;


 