import './App.css';
import CatalystChat from "catalyst-vc-react";

function App() {
	if(process.env.REACT_APP_APP_ID)
  return (
		<CatalystChat
			room="catalyst-demo"
			appId={process.env.REACT_APP_APP_ID}
			// 		theme={{
			// 			primary: "#50c878",
			// 			primaryDark: "#50c878",
			//   }}
		/>
  );
	else return null
}

export default App;
