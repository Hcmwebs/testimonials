import React, { useState, useEffect } from 'react'
import './App.scss'
import Loading from './components/Loading/Loading'

import Testimonial from './components/Testimonial/Testimonial'
const url = 'https://testimonialapi.toolcarton.com/api'
const App = () => {
	const [loading, setLoading] = useState(true)
	const [reviews, setReviews] = useState([])

	const fetchReviews = async () => {
		try {
			setLoading(true)
			const response = await fetch(url)
			const reviews = await response.json()
			setLoading(false);
			setReviews(reviews);
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}
	useEffect(() => {
		fetchReviews()
	}, [])

	if(loading){
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
			<Testimonial reviews={reviews} />
		</main>
	)
}

export default App
