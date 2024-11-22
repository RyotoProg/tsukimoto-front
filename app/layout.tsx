import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tsukimoto Editorial"
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className='scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent scrollbar-thumb-rounded-xl'
      >
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
