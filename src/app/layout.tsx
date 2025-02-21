import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import ButtonR from "@/components/buttonr";
import Map from "@/components/map";
import Footer from "@/components/footer";
import Stats from "@/components/stats";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Gersa",
  description: "Tu aliado en seguridad contra incendios. En Grupo Gersa nos especializamos en la venta, instalación y mantenimiento de extintores y equipos de seguridad contra incendios. Con años de experiencia y un compromiso inquebrantable con la protección, ofrecemos soluciones integrales y personalizadas para garantizar la seguridad de hogares, empresas y comunidades. Navega por nuestro sitio para descubrir nuestros servicios, conocer nuestro equipo de expertos y acceder a asesoría especializada que te ayudará a prevenir y actuar de manera efectiva en situaciones de emergencia. Confía en Grupo Gersa para transformar la seguridad en una prioridad accesible y de calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <ButtonR/>
        {children}
        <Stats/>
        <Map/>
        <Footer/>
      </body>
    </html>
  );
}
