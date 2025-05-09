
import { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    absolute: "If we define this then this will only show the title of child page",
    default: "Next.js default title if child page does not have title",
    template: "%s | %s will add the title of child and this explain contain as well"
  },
  description: "Generated by next.js"
}
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
