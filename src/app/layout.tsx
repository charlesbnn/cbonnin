import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Charles Bonnin - Développeur Web",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="FR-fr">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
