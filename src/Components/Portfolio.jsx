import React from "react";

function Portfolio() {
	return (
		<div className="prtf" id="portfolio">
			<p style={{ fontSize: "26px", opacity: "0.5", margin: "0" }}>
				{"<Portfolio />"}
			</p>
			<p style={{ opacity: "0.5" }}>Selected projects</p>
			<div className="pts">
				<div className="dts">
					<div>
						<img src="./Screenshot (149).png" alt="" />
					</div>
					<div className="txts">
						<h4>Bigstore</h4>
						<p>
							Bigstore is an ecommerce store which has all functionality of a
							ready to use ecommerce site. Functionalities like: payments, sign
							in / out and sign up, cart, secure payment, etc.
						</p>
						<a href="https://bigstore-70bec.web.app/">Live link</a>
					</div>
				</div>
				<div className="dts">
					<div className="txts">
						<h4>My Google clone</h4>
						<p>
							This is a fully functional google clone I built. I has the ability
							to show search results which are similar to google search results.
							Built with google's own api.
						</p>
						<a href="https://mig-google-clone.herokuapp.com/">Live link</a>
					</div>
					<div>
						<img src="./Screenshot (155).png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
