import { useEffect, useState } from "react";
import axios from "axios";
export const AppList = ({mainPageLoading}) => {
	const [appData, setAppData] = useState([]);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		getAppData();
		setLoading(false)
	}, [loading, mainPageLoading]);

	function getAppData() {
		return axios
			.get("http://localhost:8080/api")
			.then((response) => setAppData(response.data));
	}
	function handleRejection(applicationId) {
		axios.put(`http://localhost:8080/api/${applicationId}`, applicationId, {
			headers: { rejected: "true" },
		});
		setLoading(true)
	}
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Company</th>
						<th>Date Applied</th>
						<th>Person Contacted</th>
						<th>Response Date</th>
						<th>Rejected</th>
					</tr>
					{appData.length
						? appData.map((data, index) => (
								<tr key={index} className={data.rejected ? "rejected" : ""}>
									<td>{data.company}</td>
									<td>{data.dateApplied}</td>
									<td>{data.personContacted}</td>
									<td>{data.responseDate ? data.responseDate : "N/A"}</td>
									<td>
										<button
											disabled={data.rejected}
											onClick={() => handleRejection(data)}
										>
											Rejected
										</button>
									</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	);
};
