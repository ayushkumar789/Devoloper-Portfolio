import Link from 'next/link'
import Marquee from 'react-fast-marquee'


export default function Skills2() {
	return (
		<>

			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="position-relative z-1 py-60">
								<div className="position-relative z-1">
									<div className="text-center">
										<div className="d-flex align-items-center justify-content-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Projects </span>
										</div>
										<h3>My Skills</h3>
									</div>
									<div className="container mt-8">
										<div className="row">
											<div className="col-lg-6">
												<div className="row">
													<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
														{/* ✅ First Marquee (Frontend & Web Technologies) */}
														<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
															<ul className="carouselTicker__list m-0">
																{[
																	{ src: "html.png", name: "HTML" },
																	{ src: "css.png", name: "CSS" },
																	{ src: "js.png", name: "JavaScript" },
																	{ src: "react.png", name: "React" },
																	{ src: "bootstrap.png", name: "Bootstrap" }
																].map((tech, index) => (
																	<li key={index} className="carouselTicker__item mt-6">
																		<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																			<img src={`assets/imgs/home-page-2/programming/${tech.src}`} alt={tech.name}
																				 style={{ width: "60px", height: "60px", objectFit: "contain" }} />
																		</Link>
																		<span className="tool-tip">{tech.name}</span>
																	</li>
																))}
															</ul>
														</Marquee>
													</div>

													<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
														{/* ✅ Second Marquee (Backend, Databases, and Tools) */}
														<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
															<ul className="carouselTicker__list m-0 ">
																{[
																	{ src: "python.png", name: "Python" },
																	{ src: "java.png", name: "Java" },
																	{ src: "mysql.png", name: "MySQL" },
																	{ src: "nodejs.png", name: "Node.js" },
																	{ src: "MongoDB.png", name: "MongoDB" },
																	{ src: "firebase.png", name: "Firebase" },
																	{ src: "visual-basic.png", name: "Visual Studio" }
																].map((tech, index) => (
																	<li key={index} className="carouselTicker__item mt-6">
																		<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																			<img src={`assets/imgs/home-page-2/programming/${tech.src}`} alt={tech.name}
																				 style={{ width: "60px", height: "60px", objectFit: "contain" }} />
																		</Link>
																		<span className="tool-tip">{tech.name}</span>
																	</li>
																))}
															</ul>
														</Marquee>
													</div>
												</div>
											</div>

											{/* ✅ Skills List (Unchanged) */}
											<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
												<div className="row">
													<div className="col-md-10 mx-auto">
														<div className="h-100 position-relative">
															<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Languages:</p>
																		<span className="text-300">Java, Python, C, SQL (MySQL), JavaScript, HTML/CSS, PHP</span>
																	</div>
																</li>
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Frameworks:</p>
																		<span className="text-300">Node.js (Beginner), Flutter, React, Bootstrap, Laravel</span>
																	</div>
																</li>
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Databases:</p>
																		<span className="text-300">MySQL, MongoDB, Firebase</span>
																	</div>
																</li>
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Developer Tools:</p>
																		<span className="text-300">Git, Docker, VS Code, IntelliJ, WebStorm, Eclipse</span>
																	</div>
																</li>
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Design Tools:</p>
																		<span className="text-300">Photoshop, Figma, Illustrator, After Effects</span>
																	</div>
																</li>
																<li className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">Other Skills:</p>
																		<span className="text-300">REST APIs, GraphQL, Agile Development</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}
