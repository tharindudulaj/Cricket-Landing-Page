import React from 'react'
import Img1 from '../../assets/test2.jpg'
import Img2 from '../../assets/odi.jpg'
import Img3 from '../../assets/t20t.jpg'
const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "ODI",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis error ea molestiae esse."

    },
    {
        id: 2,
        img: Img1,
        name: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis error ea molestiae esse."

    },
    {
        id: 1,
        img: Img3,
        name: "T20",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis error ea molestiae esse."

    },
];


const Services = () => {
  return (
    <div className='py-10'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                <h1 className='text-3xl font-bold'>Services</h1>
                <p className='text-sm text-gray-400'>
                    {/*  */}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis error ea molestiae esse, facere minus consectetur sed perferendis tempore, doloribus suscipit vitae debitis odio pariatur atque aperiam, amet quidem. Unde.
                </p>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
                {
                    ServicesData.map(({id, img, name, description})=>{
                        return(
                            <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white
                            duration-300 p-3 shadow-xl'>
                                <div className='h-[100px]'>
                                    <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                                </div>
                                <div className='p-4 text-center'>
                                    <h1 className='text-xl font-bold'>{name}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services
