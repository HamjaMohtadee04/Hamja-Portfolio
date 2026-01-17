import "./globals.css";

export const metadata = {
  title: "Hamja Mohtadee | QA Engineer",
  description: "Portfolio of Hamja Mohtadee. Specializing in Manual & Automation Testing for AI, Healthcare, and Fintech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}