function HR() {
	return (
		<div className="hrd">
			<div className="hrd__tx">
				<p style={{ fontSize: "26px", opacity: "0.5", margin: "0" }}>
					{"<Hello />"}
				</p>
				<h1>Braimah Destiny</h1>
				<h2>Frontend Web Developer</h2>
				<p className="hrd__p">
					I use programming and knowledge about design to provide solutions to
					clients and help increase their return on investment by building
					software that converts prospects into loyal customers.
				</p>
				<span>
					<a href="#hire" className="hrd__linkC">
						Hire me
					</a>
					<a
						href="./Web Developer Resume.pdf"
						download="my resume.pdf"
						className="hrd__link"
					>
						Download Resume
					</a>
				</span>
			</div>
			<div>
				<img src="./pngwing.com (5).png" alt="" />
			</div>
		</div>
	);
}

export default HR;
