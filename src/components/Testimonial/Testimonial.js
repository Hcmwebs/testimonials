import './index.scss'
import React, {useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonial = ({ reviews }) => {

	return (
		<>
			<h1 className='title'>Testimonials UI</h1>
			<div className='reviews'>
				{reviews.map((review, index) => {
					const { id, avatar, name, message, designation } = review;
					
					return (
						<article key={id} className='card'>
							<div className='card-body'>
								<section className='section section-content'>
									<div className='icon-logo'>
										<img src={avatar} alt={name} className='img' />
									</div>
									<q>{message}</q>
								</section>
								<section className='section section-loader'>
									<span>....</span>
									<div className='profile-info'>
										<h4>{name}</h4>
										<p>{designation}</p>
									</div>
								</section>
								<section className='section section-underline'></section>
								<section className='section section-footer'>
									<div className='btns'>
										<button className='btn btn-left'>
											<FaChevronLeft />
										</button>
										<button className='btn btn-right'>
											<FaChevronRight />
										</button>
									</div>
								</section>
							</div>
						</article>
					)
				})}
			</div>
		</>
	)
}

export default Testimonial
