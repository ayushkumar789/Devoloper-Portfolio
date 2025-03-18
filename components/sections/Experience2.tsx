import Link from 'next/link';

export default function Experience2() {
	return (
		<section id="experience" className="section-experience pt-5">
			<div className="container">
				<div className="rounded-3 border border-1 position-relative overflow-hidden">
					<div className="box-linear-animation position-relative z-1">
						<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
							<div className="d-flex align-items-center">
								<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
									<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
								</svg>
								<span className="text-linear-4 d-flex align-items-center">Experience</span>
							</div>
							<h3>
								+3 <span className="text-300">years of</span> <span className="text-highlight">hands-on</span>
								<span className="text-300"> experience in tech, development & esports</span>
							</h3>
							<div className="row mt-5">
								{/* Experience Cards */}
								<div className="col-lg-5 d-flex flex-column gap-3">
									{[
										{ title: "Chief Editor", company: "Noobsverse Pvt. Ltd.", period: "Aug 2022 – Present", img: "noobsverse.png" },
										{ title: "Front-End Developer", company: "CoffeeCodes", period: "Oct 2023 – Present", img: "cc.png" },
										{ title: "Co-Founder", company: "Noobs E-sports", period: "Oct 2023 – Dec 2024", img: "NoobsEsports.png" },
										{ title: "Co-Founder", company: "Learn-X", period: "May 2024 – Present", img: "learnx.png" },
										{ title: "Full Stack Developer", company: "Learn-X", period: "May 2024 – Present", img: "learnx.png" },
									].map((exp, index) => (
										<Link key={index} href="#" className="technology border border-1 rounded-3 p-3 d-flex align-items-center gap-3">
											<img
												src={`assets/imgs/home-page-2/experience/${exp.img}`}
												alt={exp.title}
												style={{ width: "70px", height: "70px", objectFit: "contain" }}
											/>
											<div className="d-flex flex-column">
												<h5 className="mb-1">{exp.title}</h5>
												<span className="text-300">{exp.period}</span>
												<span className="text-300">{exp.company}</span>
											</div>
										</Link>
									))}
								</div>
								{/* Projects & Contributions */}
								<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
									<h6 className="text-linear-4">Projects & Contributions</h6>
									<ul className="mt-4">
										<li className="text-dark mb-3">Edited & created multiple VFX, EFX video projects for <span className="text-secondary-2">Noobsverse Pvt. Ltd.</span></li>
										<li className="text-dark mb-3">Organized Hackathons and Workshops, enhancing tech education & engagement.</li>
										<li className="text-dark mb-3">Built web solutions for NGOs and Esports organizations under <span className="text-secondary-2">CoffeeCodes</span>.</li>
										<li className="text-dark mb-3">Founded <span className="text-secondary-2">Learn-X</span>, an AI-powered coding assistant for students.</li>
										<li className="text-dark mb-3">Designed UI/UX for various applications, including <span className="text-secondary-2">Way2Tech</span>, a tech news app.</li>
									</ul>
									<div className="d-flex flex-wrap align-items-center gap-3 mt-4">
										{["Adobe After Effects", "Photoshop", "React", "Node.js", "Figma", "Flutter", "MongoDB"].map((tech, index) => (
											<Link key={index} href="#" className="text-300 border border-1 px-3 py-1">
												{tech}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
						<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
					</div>
				</div>
			</div>
		</section>
	);
}
