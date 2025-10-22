import { Jost } from "next/font/google";
import "./globals.css";


const jostFont = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jostFont.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
