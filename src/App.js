import './App.scss'

const App = () => {
	return (
		<main>
			<h1 className='title'>Testimonials UI</h1>
			<article className='card'>
				<div className='card-body'>
					<div className='section-content'>
						<div className='icon-logo'>Logo goes here</div>
						<q>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
							dignissimos culpa maxime iste deleniti ipsa.
						</q>
					</div>
					<div className='section-loader'>
						<span>...</span>
						<div className='profile-info'>
							<h4>Name goes here</h4>
							<p>Job title goes here</p>
						</div>
					</div>
				</div>
				<div className='underline'></div>
				<footer className='footer'>
					<div className='btns'>
						<button> chevron left </button>
						<button> chevron right </button>
					</div>
				</footer>
			</article>
		</main>
	)
}

export default App
