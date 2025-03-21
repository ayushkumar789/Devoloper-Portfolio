export default function Education2() {
	return (
		<>
			<section id="resume" className="section-education">
				<div className="container">
					<div className="row">

						{/* ✅ Education Box (Unchanged but with perfect alignment) */}
						<div className="col-lg-6 pt-3">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation position-relative z-1">
									<div className="p-md-6 p-3">
										<div className="d-flex align-items-center" style={{ marginBottom: "10px" }}>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 24 28" fill="none">
												<path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z" fill="#62A92B" />
											</svg>
											<h2 className="mb-0 ms-2">Education</h2>
										</div>
										<div className="d-flex flex-column h-100 position-relative mt-3">
											<ul className="ps-3">
												<li className="position-relative z-1 mb-3">
													<div className="d-flex gap-2">
														<p style={{ color: "#A0A0A0", fontSize: "14px", margin: "0" }}>Aug 2007 – May 2020:</p>
														<div>
															<span style={{ color: "#A8FF53", fontWeight: "bold" }}>Nava Bharat Public School</span>
															<p style={{ color: "#C0C0C0", margin: "0" }}>High School / Secondary Education (C.B.S.E Affiliated) - Palwancha, Telangana</p>
														</div>
													</div>
												</li>
												<li className="position-relative z-1 mb-3">
													<div className="d-flex gap-2">
														<p style={{ color: "#A0A0A0", fontSize: "14px", margin: "0" }}>Aug 2020 – May 2022:</p>
														<div>
															<span style={{ color: "#A8FF53", fontWeight: "bold" }}>Sri Chaitanya Junior College</span>
															<p style={{ color: "#C0C0C0", margin: "0" }}>Intermediate in MPC (Mathematics, Physics, Chemistry) - Hyderabad, Telangana</p>
														</div>
													</div>
												</li>
												<li className="position-relative z-1 mb-3">
													<div className="d-flex gap-2">
														<p style={{ color: "#A0A0A0", fontSize: "14px", margin: "0" }}>Aug 2022 – May 2026:</p>
														<div>
															<span style={{ color: "#A8FF53", fontWeight: "bold" }}>Anurag University</span>
															<p style={{ color: "#C0C0C0", margin: "0" }}>B.Tech in Computer Science & Engineering (Data Science Specialization) - Hyderabad, Telangana</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* ✅ Certifications Box (Fixed Alignment & Scroll + Added Linear Animation) */}
						<div className="col-lg-6 pt-3">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation position-relative z-1">
									<div className="p-md-6 p-3">
										<div className="d-flex align-items-center" style={{ marginBottom: "10px" }}>
											<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
												<path className="fill-primary-2" d="M16 2L20 10L30 12L22 19L24 28L16 23L8 28L10 19L2 12L12 10L16 2Z" fill="#A8FF53" />
											</svg>
											<h2 className="mb-0 ms-2">Certifications</h2>
										</div>
										<div
											style={{
												height: "250px",
												overflowY: "auto",
												paddingRight: "10px",
												marginTop: "10px"
											}}>
											<ul style={{ paddingLeft: "15px", listStylePosition: "inside" }}>
												{/* ✅ Cisco Certifications */}
												<li style={{ color: "#C0C0C0", fontWeight: "bold" }}>CISCO:</li>
												<li style={{ color: "#A8FF53" }}>CCNA - Enterprise Networking, Security & Automation</li>
												<li style={{ color: "#A8FF53" }}>CCNA - Introduction to Networks</li>
												<li style={{ color: "#A8FF53" }}>CCNA - Switching, Routing & Wireless Essentials</li>
												<li style={{ color: "#A8FF53" }}>Cyber Threat Management</li>
												<li style={{ color: "#A8FF53" }}>Introduction to Cybersecurity</li>
												<li style={{ color: "#A8FF53" }}>JavaScript Essentials 1</li>
												<li style={{ color: "#A8FF53" }}>Junior Cybersecurity Analyst Career Path</li>
												<li style={{ color: "#A8FF53" }}>Networking Basics</li>

												{/* ✅ Credly Badges */}
												<li style={{ color: "#C0C0C0", fontWeight: "bold", marginTop: "10px" }}>Credly:</li>
												<li style={{ color: "#A8FF53" }}>Cyber Threat Management Badge</li>
												<li style={{ color: "#A8FF53" }}>Introduction to Cybersecurity Badge</li>
												<li style={{ color: "#A8FF53" }}>Junior Cybersecurity Analyst Career Path Badge</li>
												<li style={{ color: "#A8FF53" }}>Networking Basics Badge</li>

												{/* ✅ GreatLearning Certifications */}
												<li style={{ color: "#C0C0C0", fontWeight: "bold", marginTop: "10px" }}>GreatLearning:</li>
												<li style={{ color: "#A8FF53" }}>Probability for Data Science</li>

												{/* ✅ HackerRank Certifications */}
												<li style={{ color: "#C0C0C0", fontWeight: "bold", marginTop: "10px" }}>HackerRank:</li>
												<li style={{ color: "#A8FF53" }}>AWS Certified</li>
												<li style={{ color: "#A8FF53" }}>CSS Certificate</li>
												<li style={{ color: "#A8FF53" }}>Java (Basic)</li>
												<li style={{ color: "#A8FF53" }}>JavaScript (Basic)</li>
												<li style={{ color: "#A8FF53" }}>Python (Basic)</li>
												<li style={{ color: "#A8FF53" }}>SQL (Basic)</li>

												{/* ✅ Infosys Spring Board Certifications */}
												<li style={{ color: "#C0C0C0", fontWeight: "bold", marginTop: "10px" }}>Infosys Spring Board:</li>
												<li style={{ color: "#A8FF53" }}>AI & ML</li>
												<li style={{ color: "#A8FF53" }}>AWS Fundamentals</li>
												<li style={{ color: "#A8FF53" }}>CSS</li>
												<li style={{ color: "#A8FF53" }}>Data Science</li>
												<li style={{ color: "#A8FF53" }}>Data Structures</li>
												<li style={{ color: "#A8FF53" }}>HTML5</li>
												<li style={{ color: "#A8FF53" }}>Java Programming for Beginners</li>
												<li style={{ color: "#A8FF53" }}>JavaScript Essentials</li>
												<li style={{ color: "#A8FF53" }}>Programming in C</li>
												<li style={{ color: "#A8FF53" }}>Python 3</li>
											</ul>

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
