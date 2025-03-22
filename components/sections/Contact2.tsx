'use client';

import { useState } from "react";

export default function Contact2() {
	const [showPopup, setShowPopup] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);

		const response = await fetch("/api/contact", {
			method: "POST",
			body: formData,
		});

		if (response.ok) {
			form.reset();
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
		}
	};

	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<br />
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form onSubmit={handleSubmit}>
										<div className="row g-3">
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" required />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" />
											</div>
											<div className="col-md-6">
												<input type="email" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Email" required />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" />
											</div>
											<div className="col-12">
												<textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" required />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>

						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+91 7815929654</h6>
								</div>
								<a href="tel:+91 7815929654" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>

							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">ayushkumarpanigrahi@gmail.com</h6>
								</div>
								<a href="mailto:ayushkumarpanigrahi@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>

							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-linkedin-box-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">LinkedIn</span>
									<h6 className="mb-0">Ayush Kumar Panigrahi</h6>
								</div>
								<a href="https://linkedin.com/in/your-link" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>

							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Sai Sri Enclave, Narapally, Hyderabad, Telangana</h6>
								</div>
								<a href="https://maps.google.com/maps?q=Sai+Sri+Enclave+Narapally" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ✅ Success Tick Popup */}
			{showPopup && (
				<div className="fixed top-0 left-0 w-full h-full bg-[#0f0f0f]/90 flex items-center justify-center z-[9999] animate-fadeIn">
					<div className="flex flex-col items-center justify-center text-center">
						<div className="text-[#5eff00] text-8xl animate-bounce">✔</div>
						<h2 className="text-[#5eff00] mt-4 text-3xl font-bold tracking-wide">
							Message Sent Successfully!
						</h2>
					</div>
				</div>
			)}

		</>
	);
}
