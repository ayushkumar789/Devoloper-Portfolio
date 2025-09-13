
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/home-page-2/hero-1/people.png" alt="Ayush" />
										<div
											className="position-absolute end-0 icon-decorate"
											style={{
												top: '85%',  // Adjust this value to move it up/down
												transform: 'translateY(-50%)',
												zIndex: 10
											}}
										>
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="Ayush" />
										</div>

									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m Ayush</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">Junior <span className="text-linear-4">{'{'}Full Stack{'}'}</span>Web &amp; App developer<span className="flicker">_</span></h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">With expertise in cutting-edge technologies such as</span> <span className="text-secondary-2">Java</span>, <span className="text-secondary-2">React</span>, <span className="text-secondary-2">HTML</span>, <span className="text-secondary-2">Python</span>, <span className="text-secondary-2">Js,..etc.</span><span className="text-dark"> I deliver web solutions that are both innovative and robust.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* ✅ Carousel Scroll with Fixed Image Sizes */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list">
														{[
															{ src: "bootstrap.png", name: "Bootstrap" },
															{ src: "css.png", name: "CSS" },
															{ src: "firebase.png", name: "Firebase" },
															{ src: "html.png", name: "HTML" },
															{ src: "js.png", name: "JavaScript" },
															{ src: "MongoDB.png", name: "MongoDB" },
															{ src: "mysql.png", name: "MySQL" },
															{ src: "nodejs.png", name: "Node.js" },
															{ src: "php.png", name: "PHP" },
															{ src: "python.png", name: "Python" },
															{ src: "react.png", name: "React" },
															{ src: "visual-basic.png", name: "Visual Basic" }
														].map((tech, index) => (
															<li key={index} className="carouselTicker__item">
																<Link href="#" className="brand-logo icon_60 icon-shape rounded-3">
																	<img
																		src={`assets/imgs/home-page-2/programming/${tech.src}`}
																		alt={tech.name}
																		style={{ width: "50px", height: "50px", objectFit: "contain" }}
																	/>
																</Link>
															</li>
														))}
													</ul>
												</Marquee>
											</div>

											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>

										<Link
											href="/Ayush-Kumar.pdf"
											className="btn me-2 text-300 ps-0 mt-4"
											target="_blank"
										>
											<i className="ri-download-line text-primary-2" />
											[ Download my Resume ]
										</Link>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="Ayush" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="Ayush" />
				</div>
			</section>

		</>
	)
}
