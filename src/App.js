import './App.css';
import CatalystChat from "catalyst-vc-react";

function App() {
  return (
	<CatalystChat
			room="Test Room"
			appId="YOUR_CATALYST_PROJECT_ID"
			theme={{
				primary: "#50c878",
				primaryDark: "#50c878",
      }}
		/>
	);
}

export default App;
