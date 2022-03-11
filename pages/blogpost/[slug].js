import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 py-2">Title {slug}</h1>
                       
                        <p className="leading-relaxed text-base py-2">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default slug;


// i update this page on 11 march and it worked 