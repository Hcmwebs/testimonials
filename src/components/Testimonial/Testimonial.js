import './index.scss'
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonial = ({ reviews }) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const lastIndex = reviews.length - 1

		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index, reviews])

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 10000)
		return () => clearInterval(slider)
	}, [index])

	return (
		<>
			<h1 className='title'>Testimonials UI</h1>
			<div className='reviews'>
				{reviews.map((review, reviewIndex) => {
					const { id, avatar, name, message, designation, rating } = review

					let position = 'nextSlide'
					if (reviewIndex === index) {
						position = 'activeSlide'
					}

					if (
						reviewIndex === index - 1 ||
						(index === 0 && reviewIndex === reviews.length - 1)
					) {
						position = 'lastSlide'
					}

					return (
						<article key={id} className={position}>
							<div className='body'>
								<section className='section section-content'>
									<div className='icon-logo'>
										<img src={avatar} alt={name} className='img' />
									</div>
									<q>{message}</q>
								</section>
								<section className='section section-loader'>
									<span>
										{rating}
										<FaStar className='icon-star' />
									</span>
									<div className='profile-info'>
										<h4>{name}</h4>
										<p>{designation}</p>
									</div>
								</section>
								<section className='section section-underline'></section>
								<section className='section section-footer'>
									<div className='btns'>
										<button
											className='btn btn-left'
											onClick={() => setIndex(index - 1)}>
											<FaChevronLeft />
										</button>
										<button
											className='btn btn-right'
											onClick={() => setIndex(index + 1)}>
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
