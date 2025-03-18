import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function Coporation2() {
	return (
		<>

			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className="p-lg-8 p-md-6 p-3">
										<div className="d-flex align-items-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Connections & Collaboration </span>
										</div>
										<h3 className="fw-medium">
											Working with <span className="text-300">Tech & Gaming <br /></span> Partners <span className="text-300">Across Domains_</span>
										</h3>
										<div className="my-5 border border-1 rounded-2 p-3">
											{/* Custom Logo Animation */}
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												<ul className="carouselTicker__list m-0">
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/Mak_transparent.png" alt="Makluan Esports" width={80} height={60} />
													</li>
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/learntext.png" alt="LearnX" width={180} height={60} />
													</li>
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/GiveIndiaHOPE.png" alt="GiveIndiaHope" width={80} height={60} />
													</li>
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/Noobsverse.png" alt="noobsVerse" width={80} height={60} />
													</li>
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/noobslearning.png" alt="noobs Learning" width={80} height={60} />
													</li>
													<li className="carouselTicker__item">
														<img src="assets/imgs/logos/cc.png" alt="CoffeeCodes" width={80} height={60} />
													</li>
												</ul>
											</Marquee>

										</div>
										<div className="d-flex flex-column flex-md-row align-items-center gap-3">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="assets/imgs/coporation/avatar.png" alt="Ayush Kumar Panigrahi" />
															<svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 5 6" fill="none">
																<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2">
												<Link href="https://linkedin.com/in/ayush.dev">
													<i className="ri-linkedin-box-fill" />
													<span className="text-300">[LinkedIn] <span className="text-secondary-2">Ayush Kumar Panigrahi</span></span>
												</Link>
												<Link href="tel:+917815929654">
													<i className="ri-phone-fill" />
													<span className="text-300">[phone] <span className="text-secondary-2">+91 7815929654</span></span>
												</Link>
												<Link href="mailto:contact@Ayush.dev">
													<i className="ri-mail-fill" />
													<span className="text-300">[email] <span className="text-secondary-2">ayushkumarpanigrahi@gmail.com</span></span>
												</Link>
											</div>
										</div>
									</div>
									<div className="position-absolute d-none d-md-block decorate">
										<div className="rotateme">
											<div className="circle-1-1" />
											<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
												<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
											<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
												<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="box-linear-animation2">

							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">

									<div className="d-flex align-items-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Gaming & Esports Journey </span>
									</div>
									<div className="h-100 position-relative">
										<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
											<li className="position-relative z-1">
												<div className="d-flex align-items-center gap-2">
													<p className="text-300 text-nowrap">2016:</p>
													<span className="text-dark">Started playing GTA V, exploring open-world gaming.</span>
												</div>
											</li>
											<li className="position-relative z-1">
												<div className="d-flex align-items-center gap-2">
													<p className="text-300 text-nowrap">2018:</p>
													<span className="text-dark">Stepped into Battle Royale gaming with PUBG.</span>
												</div>
											</li>
											<li className="position-relative z-1">
												<div className="d-flex align-items-center gap-2">
													<p className="text-300 text-nowrap">2021:</p>
													<span className="text-dark">Since PUBG ban, switched to BGMI and continued competitive gaming.</span>
												</div>
											</li>
											<li className="position-relative z-1">
												<div className="d-flex align-items-center gap-2">
													<p className="text-300 text-nowrap">2023:</p>
													<span className="text-dark">Founded Noobs Esports, my first gaming organization.</span>
												</div>
											</li>
											<li className="position-relative z-1">
												<div className="d-flex align-items-center gap-2">
													<p className="text-300 text-nowrap">2024:</p>
													<span className="text-dark">Created and became the Leader of Makluan Esports, an elite gaming clan.</span>
												</div>
											</li>
										</ul>
										<div className="line-left position-absolute border-start z-0" />
									</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
						</div>

					</div>
				</div>
			</section>

		</>

	)
}
