import { useState } from "react";
import { AppForm } from "./AppForm";
import { AppList } from "./AppList";
function App() {
	return (
		<div className="App">
			<AppForm />
			<AppList />
		</div>
	);
}

export default App;
