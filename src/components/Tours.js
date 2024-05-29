import React from 'react'
import tour1 from '../Assests/tour-1.jpeg'
import tour2 from '../Assests/tour-2.jpeg'
import tour3 from '../Assests/tour-3.jpeg'
import tour4 from '../Assests/tour-4.jpeg'
import tour5 from '../Assests/tour-5.jpeg'
import tour6 from '../Assests/tour-6.jpeg'
import Title from './Title'
import { tours } from '../data.js'
import Tour from './Tour.js'



const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title={"featured"} subTitle={"tours"} />
            {/* <div className="section-title">
                <h2>featured <span>tours</span></h2>
            </div> */}

            <div className="section-center featured-center">
                {
                    tours.map((tour) => (
                        <Tour key={tour.id} {...tour} />
                        // <article className="tour-card" key={tour.id}>
                        //     <div className="tour-img-container">
                        //         <img src={tour.image} className="tour-img" alt="" />
                        //         <p className="tour-date">{tour.date}</p>
                        //     </div>
                        //     <div className="tour-info">
                        //         <div className="tour-title">
                        //             <h4>{tour.title}</h4>
                        //         </div>
                        //         <p>
                        //             {tour.info}
                        //         </p>
                        //         <div className="tour-footer">
                        //             <p>
                        //                 <span><i className="fas fa-map"></i></span> {tour.location}
                        //             </p>
                        //             <p>{tour.duration}</p>
                        //             <p>from ${tour.cost}</p>
                        //         </div>
                        //     </div>
                        // </article>
                    ))
                }
                {/* <article className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour1} className="tour-img" alt="" />
                        <p className="tour-date">august 26th, 2020</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>Tibet Adventure</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                            vitae tempore voluptatum maxime reprehenderit eum quod
                            exercitationem fugit, qui corporis.
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span> china
                            </p>
                            <p>6 days</p>
                            <p>from $2100</p>
                        </div>
                    </div>
                </article> */}

                {/* <article className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour2} className="tour-img" alt="" />
                        <p className="tour-date">october 1th, 2020</p>
                    </div>
                    <div className="tour-info">
                        <h4>best of java</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                            vitae tempore voluptatum maxime reprehenderit eum quod
                            exercitationem fugit, qui corporis.
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span> indonesia
                            </p>
                            <p>11 days</p>
                            <p>from $1400</p>
                        </div>
                    </div>
                </article> */}

                {/* <article className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour3} className="tour-img" alt="" />
                        <p className="tour-date">september 15th, 2020</p>
                    </div>
                    <div className="tour-info">
                        <h4>explore hong kong</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                            vitae tempore voluptatum maxime reprehenderit eum quod
                            exercitationem fugit, qui corporis.
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span> hong kong
                            </p>
                            <p>8 days</p>
                            <p>from $5000</p>
                        </div>
                    </div>
                </article> */}

                {/* <article className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour4} className="tour-img" alt="" />
                        <p className="tour-date">december 5th, 2019</p>
                    </div>
                    <div className="tour-info">
                        <h4>kenya highlights</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                            vitae tempore voluptatum maxime reprehenderit eum quod
                            exercitationem fugit, qui corporis.
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span> kenya
                            </p>
                            <p>20 days</p>
                            <p>from $3300</p>
                        </div>
                    </div>
                </article> */}
            </div>
        </section>

    )
}

export default Tours