import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
	title: "iFerry- Rakib",
	description: "An website for ferry service",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{children}
				<ToastContainer position='bottom-right' autoClose={1200} theme='dark' />
			</body>
		</html>
	);
}
