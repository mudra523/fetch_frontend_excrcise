import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Row, Col } from "antd";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <Header />
          <Row justify="center" className=" bg-base-500">
            <Col xs={24} sm={24} md={22} lg={22}>
              <main>{children}</main>
            </Col>
          </Row>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
