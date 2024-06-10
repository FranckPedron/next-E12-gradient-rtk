import "./globals.css";

export const metadata = {
  title: "Gradient App",
  description: "Generate linear or radial gradients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
