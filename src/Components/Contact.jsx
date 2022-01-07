import Airform from "react-airform";

function Contact() {
	return (
		<div className="cnt" id="hire">
			<p style={{ fontSize: "26px", opacity: "0.5", margin: "0" }}>
				{"<Contact />"}
			</p>
			<p style={{ opacity: "0.5" }}>Got a job, let's talk.</p>
			<Airform
				email="braimahaboy@gmail.com"
				onSubmit={() => {
					document.getElementById("nm").value = "";
					document.getElementById("em").value = "";
					document.getElementById("tp").value = "";
					document.getElementById("dt").value = "";
				}}
			>
				<div className="form__glt">
					<div>
						<label htmlFor="nm">
							Name
							<input type="text" name="name" id="nm" required />
						</label>
						<label htmlFor="em">
							Email
							<input type="email" name="email" id="em" required />
						</label>
						<label htmlFor="tp">
							Project type
							<select name="project-type" id="tp" required>
								<option value="personal">Personal</option>
								<option value="voluntary">Voluntary</option>
								<option value="company | organisational">
									Company | Organisational
								</option>
							</select>
						</label>
					</div>
					<div>
						Project Details
						<label htmlFor="dt">
							<textarea
								name="project-details"
								id="dt"
								cols="30"
								rows="10"
								required
							></textarea>
						</label>
					</div>
				</div>
				<button>Send</button>
			</Airform>
		</div>
	);
}

export default Contact;
