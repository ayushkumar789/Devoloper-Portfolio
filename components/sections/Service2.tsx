
import Link from 'next/link'

export default function Service2() {
	return (
		<>

			<section id="services" className="section-service-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> My Skills </span>
									</div>
									<h3>
										Expertise in
										<span className="text-300">
                                diverse fields<br />
                                for creative and technical solutions
                            </span>
									</h3>
								</div>
								<div className="container mt-5">
									<div className="row g-4">
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M3 2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM19 11V4H5V11H19ZM19 13H5V20H19V13ZM9 6H15V8H9V6ZM9 15H15V17H9V15Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">UI/UX Design</h6>
												<p className="fs-7 text-300 fw-regular">Creating engaging user interfaces and experiences using <span className="text-secondary-2">Figma</span>, <span className="text-secondary-2">Adobe XD</span>, and wireframing techniques.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">Web Development</h6>
												<p className="fs-7 text-300 fw-regular">Building dynamic and responsive websites with <span className="text-secondary-2">HTML</span>, <span className="text-secondary-2">CSS</span>, <span className="text-secondary-2">JavaScript</span>, <span className="text-secondary-2">React</span>, and <span className="text-secondary-2">Node.js</span>.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z" fill="#1F1F24" />
												</svg>
												<h6 className="my-3 fw-medium">Mobile App Development</h6>
												<p className="fs-7 text-300 fw-regular">Developing cross-platform mobile apps with <span className="text-secondary-2">React Native</span> and <span className="text-secondary-2">Flutter</span>.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<h6 className="my-3 fw-medium">Graphic Design</h6>
												<p className="fs-7 text-300 fw-regular">Designing stunning visuals, logos, and graphics with <span className="text-secondary-2">Adobe Photoshop</span> and <span className="text-secondary-2">Illustrator</span>.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<h6 className="my-3 fw-medium">Video Editing</h6>
												<p className="fs-7 text-300 fw-regular">Creating high-quality motion intros, logo animations, and video edits.</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="card-servies-2 rounded-2 h-100 hover-up">
												<h6 className="my-3 fw-medium">Database Management</h6>
												<p className="fs-7 text-300 fw-regular">Managing databases with <span className="text-secondary-2">MySQL</span>, <span className="text-secondary-2">Firebase</span>, and beginner experience in <span className="text-secondary-2">MongoDB</span>.</p>
											</div>
										</div>
									</div>
									<div className="text-center pt-60">
										<p className="text-300">Always looking to improve and learn new skills! <Link href="#" className="text-primary-2">Let's Connect!</Link></p>
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
