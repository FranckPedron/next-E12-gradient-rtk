'use client'
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";


// export const metadata = {
//   title: "Gradient App",
//   description: "Generate linear or radial gradients",
// };

export default function RootLayout({ children }) {
  return (

        <html lang="en">
          <body>
          <StoreProvider>{children}</StoreProvider>
          </body>
        </html>

  );
}
