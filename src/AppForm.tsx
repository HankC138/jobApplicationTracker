import { useEffect, useState } from "react";
import axios from "axios";

export function AppForm() {
	const [jobApplicationInfo, setJobApplicationInfo] = useState({
		company: "",
		dateApplied: "",
		personContacted: "",
		responseDate: "",
	});
	const updateJobApplicationInfo = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const target = event.target as typeof event.target & {
			company: { value: string };
			dateApplied: { value: string };
			personContacted: { value: string };
			responseDate: { value: string };
		};
		const keyToUpdate = target.name;
		setJobApplicationInfo((currentInfo) => ({
			...currentInfo,
			[keyToUpdate]: target.value,
		}));
	};
	const handleApplication = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        axios.post('http://localhost:8080/api',jobApplicationInfo)
		setJobApplicationInfo({
			company: "",
			dateApplied: "",
			personContacted: "",
			responseDate: "",
		});
		setSubmission(true)
	};
	return (
		<form onSubmit={handleApplication}>
			<label htmlFor="company">
				Company:
				<input
					name="company"
					onChange={updateJobApplicationInfo}
					placeholder="company"
					type="text"
					value={jobApplicationInfo.company}
				/>
			</label>
			<br />
			<label htmlFor="dateApplied">
				Date Applied:
				<input
					name="dateApplied"
					onChange={updateJobApplicationInfo}
					placeholder="date applied"
					type="date"
					value={jobApplicationInfo.dateApplied}
				/>
			</label>
			<br />
			<label htmlFor="personContacted">
				Person Contacted:
				<input
					name="personContacted"
					onChange={updateJobApplicationInfo}
					placeholder="person contacted"
					type="text"
					value={jobApplicationInfo.personContacted}
				/>
			</label>
			<br />
			<label htmlFor="responseDate">
				Response Date:
				<input
					name="responseDate"
					onChange={updateJobApplicationInfo}
					placeholder="response date"
					type="date"
					value={jobApplicationInfo.responseDate}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}
