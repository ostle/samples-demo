import { Roboto } from "next/font/google";

import Footer from "@/components/footer";

import "./globals.css";

const font = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Samples-Demo",
	description: "Samples-Demo",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
