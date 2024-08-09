import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={`${poppins.className}`}>
        <Navbar />
       <main>{children}</main> 
        </body>
    </html>
  );
}
