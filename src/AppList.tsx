import React, { useEffect, useState } from "react";
import axios from "axios";
export const AppList = () => {
	const [appData, setAppData] = useState([]);
	useEffect(() => {
		getAppData();
	}, []);

	function getAppData() {
		return axios
			.get("http://localhost:8080/api")
			.then((response) => setAppData(response.data));
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
					</tr>
					{appData.length
						? appData.map((data, index) => (
								<tr key={index}>
									<td>{data.company}</td>
									<td>{data.dateApplied}</td>
									<td>{data.personContacted}</td>
									<td>{data.responseDate}</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</div>
	);
};
