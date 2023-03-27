import { useEffect, useState } from "react";
import { AppForm } from "./AppForm";
import { AppList } from "./AppList";
function App() {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
	  setLoading(false)
	}, [loading])
	
	return (
		<div className="App">
			<AppForm setLoading={(status)=> setLoading(status)}/>
			<AppList mainPageLoading={loading}/>
		</div>
	);
}

export default App;
