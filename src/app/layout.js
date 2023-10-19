import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "mobx-react";
import CartStore from "@/stores/cartStore";

export const metadata = {
	title: "iFerry- Rakib",
	description: "An website for ferry service",
};

export default function RootLayout({ children }) {
	return (
		// <Provider cartStore={CartStore}>
		<html lang='en'>
			<body>
				{children}
				<ToastContainer position='bottom-right' autoClose={1200} theme='dark' />
			</body>
		</html>
		// </Provider>
	);
}
