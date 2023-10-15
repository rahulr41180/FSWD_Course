
import "./Testimonial.css";

import Avtar from "../../Assets/IMG_4260.jpg"

//  npm i swiper

// import Swiper core and required modules

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';

import 'swiper/css/pagination';

const data = [
    {
        id : 1,
        avatar : Avtar,
        name : "Rahul Rathor",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem ab temporibus quaerat sed ratione tenetur, commodi labore. Praesentium distinctio corporis odio eveniet amet velit."
    },
    {
        id : 2,
        avatar : Avtar,
        name : "Rahul Rathor",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem ab temporibus quaerat sed ratione tenetur, commodi labore. Praesentium distinctio corporis odio eveniet amet velit."
    },
    {
        id : 3,
        avatar : Avtar,
        name : "Rahul Rathor",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem ab temporibus quaerat sed ratione tenetur, commodi labore. Praesentium distinctio corporis odio eveniet amet velit."
    },
    {
        id : 4,
        avatar : Avtar,
        name : "Rahul Rathor",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem ab temporibus quaerat sed ratione tenetur, commodi labore. Praesentium distinctio corporis odio eveniet amet velit."
    },
    {
        id : 5,
        avatar : Avtar,
        name : "Rahul Rathor",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem ab temporibus quaerat sed ratione tenetur, commodi labore. Praesentium distinctio corporis odio eveniet amet velit."
    },
]

export const Testimonial = () =>{

    return (
        <section id = "testimonial">
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                 modules={[Pagination]}
                 spaceBetween={40}
                 slidesPerView={1}
                 pagination={{ clickable: true }}
            >
                {data.map((element) =>{
                    
                    return (
                        <SwiperSlide key={element.id} className="textimonial">
                            <div className="client__avatar">
                                <img src={element.avatar} alt="" />
                            </div>
                            <h5 className="client__name">{element.name}</h5>
                            <small className="client__review">
                                {element.review}
                            </small>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    )
}