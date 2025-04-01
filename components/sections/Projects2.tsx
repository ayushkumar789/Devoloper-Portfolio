'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper config
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	autoplay: { delay: 4000 },
	pagination: { el: '.swiper-pagination' },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

// Project List with All Categories
const allProjects =
	[
		{
			title: 'AcademicHarbour',
			description: 'Developed a full-stack web app with JS backend and MongoDB...',
			image: 'assets/imgs/home-page-2/projects/AcademicHarbour.png',
			github: 'https://github.com/ayushkumar789/AcademicHarbour',
			apk: null,
			category: 'Web Development',
			technologies: 'HTML, CSS, JavaScript, MongoDB',
			status: 'Ongoing',
			live: null,
			designPage: null
		},
		{
			title: 'CodeAstra LLM Model',
			description: 'A coding assistant using fine-tuned LLM via Ollama and LangChain...',
			image: 'assets/imgs/home-page-2/projects/CodeAstra.jpg',
			github: null,
			apk: null,
			category: 'App Development',
			technologies: 'Python, LangChain, Ollama, Docker',
			status: 'Ongoing',
			live: null,
			designPage: null
		},
		{
			title: 'Nirbhaya',
			description: 'An AI-based women safety app that listens 24/7 for distress words...',
			image: 'assets/imgs/home-page-2/projects/Nirbhaya.jpg',
			github: 'https://github.com/ayushkumar789/nirbhaya_app',
			apk: 'assets/Nirbhaya.apk',
			category: 'App Development',
			technologies: 'Kotlin, Flutter, Firebase, NLP',
			status: 'Ongoing',
			live: null,
			designPage: null
		},
		{
			title: 'Anurag Nexus',
			description: 'Student & Faculty Management System for college...',
			image: 'assets/imgs/home-page-2/projects/AuNexus.png',
			github: 'https://github.com/ayushkumar789/AnuragNexus',
			apk: null,
			category: 'Web Development',
			technologies: 'Java, Spring Boot, Maven, MySQL',
			status: 'In Progress',
			live: null,
			designPage: null
		},
		{
			title: 'HR Analytic Dashboard',
			description: 'Dynamic employee analytics dashboard using R, Shiny & MySQL...',
			image: 'assets/imgs/home-page-2/projects/HrDash.png',
			github: 'https://github.com/ayushkumar789/Hr-Dashboard',
			apk: null,
			category: 'Web Development',
			technologies: 'R, Shiny, MySQL',
			status: 'Completed',
			live: null,
			designPage: null
		},
		{
			title: 'Smart Home Automation',
			description: 'Built an IoT-based smart home project...',
			image: 'assets/imgs/home-page-2/projects/SmartHome.jpg',
			github: 'https://github.com/ayushkumar789/Au-Smart',
			apk: 'assets/Smart Light.apk',
			category: 'App Development',
			technologies: 'Arduino Uno, Android Studio, Bluetooth',
			status: 'Completed',
			live: null,
			designPage: null
		},
		{
			title: 'LearnX',
			description: 'A React + Tailwind-based educational site...',
			image: 'assets/imgs/home-page-2/projects/learnx.png',
			github: null,
			apk: null,
			category: 'Web Development',
			technologies: 'React, Tailwind CSS',
			status: 'Completed',
			live: 'https://learn-x.tech/',
			designPage: null
		},
		{
			title: 'Gamio',
			description: 'Game aggregator platform using Node.js & MongoDB...',
			image: 'assets/imgs/home-page-2/projects/gamio.png',
			github: 'https://github.com/ayushkumar789/Ayush-Esports',
			apk: null,
			category: 'Web Development',
			technologies: 'Node.js, Express, MongoDB, EJS',
			status: 'Completed',
			live: null,
			designPage: null
		},
		{
			title: 'Taxi PBL',
			description: 'Cross-platform ride-booking app built using Java...',
			image: 'assets/imgs/home-page-2/projects/taxi-pbl.png',
			github: 'https://github.com/ayushkumar789/Ridek-Taxi-Booking',
			apk: 'assets/apks/taxi-pbl.apk',
			category: 'App Development',
			technologies: 'Java, Android SDK',
			status: 'Completed',
			live: null,
			designPage: null
		},
		{
			title: 'Vehicle Parking System',
			description: 'Desktop parking app using Python and MySQL...',
			image: 'assets/imgs/home-page-2/projects/vps.png',
			github: 'https://github.com/ayushkumar789/vehicle-parking-system',
			apk: null,
			category: 'App Development',
			technologies: 'Python, Tkinter, MySQL',
			status: 'Completed',
			live: null,
			designPage: null

		},
		{
			title: 'Logo Designs',
			description: 'Custom logos designed using Adobe Illustrator...',
			image: 'assets/imgs/home-page-2/projects/logos.png',
			github: null,
			apk: null,
			category: 'Graphic Design',
			technologies: 'Adobe Illustrator, Figma',
			status: 'Completed',
			live: null,
			designPage: '/designs/logos'

		},
		{
			title: 'Logo Animations',
			description: 'Animated intros created using After Effects...',
			image: 'assets/imgs/home-page-2/projects/logo-animation.png',
			github: null,
			apk: null,
			category: 'Graphic Design',
			technologies: 'After Effects',
			status: 'Completed',
			live: null,
			designPage: '/designs/logo-animations'

		},
		{
			title: 'Event Posters',
			description: 'Posters crafted in Photoshop for events...',
			image: 'assets/imgs/home-page-2/projects/event-posters.png',
			github: null,
			apk: null,
			category: 'Graphic Design',
			technologies: 'Photoshop, Illustrator',
			status: 'Completed',
			live: null,
			designPage: '/designs/event-posters'

		},
		{
			title: 'Promo Videos',
			description: 'Promo videos built in After Effects...',
			image: 'assets/imgs/home-page-2/projects/event-promos.png',
			github: null,
			apk: null,
			category: 'Graphic Design',
			technologies: 'After Effects',
			status: 'Completed',
			live: null,
			designPage: '/designs/event-promos'

		},
		{
		title: 'AI Video Summarizer',
		description: 'Flask web app that summarizes long videos using Whisper (GPU), Cohere AI, OpenCV, and MongoDB. Includes transcript, keyframes, export to PDF/Word, lottie animations, waveform visualizer, and more.',
		image: 'assets/imgs/home-page-2/projects/video-summarizer.png',
		github: 'https://github.com/ayushkumar789/video_summarizer',
		apk: null,
		category: 'Web Development',
		technologies: 'Python, Flask, Whisper, Cohere AI, OpenCV, MongoDB, Tailwind CSS, JS',
		status: 'Completed',
		live: null,
		designPage: null
	}




	]

export default function Projects2() {
	const [category, setCategory] = useState('All')

	const filteredProjects = category === 'All'
		? allProjects
		: allProjects.filter(p => p.category === category)

	const categories = ['All', 'Web Development', 'App Development', 'Graphic Design']

	return (
		<section id="projects" className="section-projects">
			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center mb-3">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3 className="mb-4">My Recent Works</h3>

								<div className="d-flex flex-wrap gap-2 mb-4">
									{categories.map((cat) => (
										<button key={cat} onClick={() => setCategory(cat)} className={`btn btn-sm ${category === cat ? 'btn-primary' : 'btn-outline-secondary'}`}>{cat}</button>
									))}
								</div>

								<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
									{filteredProjects.map((proj, index) => (
										<SwiperSlide key={index}>
											<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3" style={{ minHeight: '460px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
												<div className="row">
													<div className="col-lg-5">
														<img className="w-100" src={proj.image} alt={proj.title} />
													</div>
													<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
														<h4 className="text-linear-4">{proj.title}</h4>
														<p>{proj.description}</p>
														<ul className="mt-4 list-unstyled">
															<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="text-dark mb-0 text-end">Category</p>
																	<p className="text-300 mb-0 text-end">{proj.category}</p>
																</div>
															</li>
															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="text-dark mb-0 text-end">Technologies</p>
																	<p className="text-300 mb-0 text-end">{proj.technologies}</p>
																</div>
															</li>
															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="text-dark mb-0 text-end">Status</p>
																	<p className="text-300 mb-0 text-end">{proj.status}</p>
																</div>
															</li>
														</ul>
														<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
															{proj.github && (
																<Link href={proj.github} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View on Github
																</Link>
															)}
															{proj.apk && (
																<a href={proj.apk} download className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Download App
																</a>
															)}
															{proj.live && (
																<a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	Live Preview
																</a>
															)}
															{proj.designPage && (
																<Link href={proj.designPage} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																	View All Designs
																</Link>
															)}

														</div>

													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>

								<div className="d-none d-md-flex gap-2" style={{ position: 'absolute', right: '2rem', bottom: '1rem', zIndex: 2 }}>
									<div className="swiper-button-prev shadow position-relative" style={{ cursor: 'pointer', userSelect: 'none' }} onMouseDown={e => e.preventDefault()}>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
										</svg>
									</div>
									<div className="swiper-button-next shadow position-relative" style={{ cursor: 'pointer', userSelect: 'none' }} onMouseDown={e => e.preventDefault()}>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
										</svg>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="Ayush" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}