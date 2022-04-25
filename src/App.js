import './App.scss'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const url = 'https://testimonialapi.toolcarton.com/api'
const App = () => {
	return (
		<main>
			<h1 className='title'>Testimonials UI</h1>

			<article className='card'>
				<div className='card-body'>
					<section className='section section-content'>
						<div className='icon-logo'>Logo goes here</div>
						<q>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							dignissimos culpa maxime iste deleniti ipsa.
						</q>
					</section>
					<section className='section section-loader'>
						<span>....</span>
						<div className='profile-info'>
							<h4>Name goes here</h4>
							<p>Job title goes here</p>
						</div>
					</section>
				<section className='section section-underline'></section>
				<section className='section section-footer'>
					<div className='btns'>
						<button className='btn btn-left'> <FaChevronLeft/> </button>
						<button className='btn btn-right'> <FaChevronRight/> </button>
					</div>
				</section>
				</div>
			</article>
		</main>
	)
}

export default App
