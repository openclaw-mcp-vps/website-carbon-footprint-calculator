import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Carbon Footprint Calculator",
  description: "Calculate and reduce website carbon emissions. Analyze your site's environmental impact and get actionable optimization suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="97913a4d-3cc0-406d-82c2-a394dab5c079"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
