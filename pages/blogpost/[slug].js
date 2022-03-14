import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json()
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])

   
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-100 mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 py-2">{blog && blog.title}</h1>
                        <p className="leading-relaxed text-base py-2">{blog && blog.content}</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default slug;


// i update this page on 11 march and it worked 