"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import "./layout.css"

import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>

				<link rel="icon" type="image/png" href="favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
				/>
			</head>
			<meta name="viewport" content="width=device-width" />
			<title>DashCord</title>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div className="dashboard-layout" >
					<Sidebar />
					<main className="dashboard-main">
						{children}
					</main>
				</div >
			</body>
		</html >
	);
}



