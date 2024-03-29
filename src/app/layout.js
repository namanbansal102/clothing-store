import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavDataComponent from "./components/NavDataComponent";
config.autoAddCss = false;
import NextTopLoader from 'nextjs-toploader';
import Scroll from "./Scroll";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WestSide",
  description: "An Online Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      
    <html lang="en">
    <Scroll />

      <Head>
        {/* <title>WestSide</title> */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <body id="modal" className={inter.className} >
        <div  className=" overflow-x-hidden">

      <NextTopLoader
      color="#F62B00"
      initialPosition={0.08}
      crawlSpeed={100}
      height={2}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={100}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      template='<div class="bar" role="bar"><div class="peg"></div></div> 
      <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false} />
        <NavDataComponent></NavDataComponent>{children}<Footer></Footer>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    
    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
        </body>
    </html>
    </GoogleOAuthProvider>
  );
}
