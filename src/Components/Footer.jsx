import React from "react";

function Footer() {
	return (
		<footer>
			<div>
				<p>Email: braimahaboy@gmail.com</p>
				<p>
					{" "}
					All rights reserved. &copy; Copywright{" "}
					{new Date().getFullYear().toString()}
				</p>
				{/* <span></span> */}
			</div>
		</footer>
	);
}

export default Footer;
