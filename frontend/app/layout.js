import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Your Project Title",
  description: "Your Project Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="p-8">{children}</main>

        {/* Footer */}
        <footer className="text-center py-4 text-sm text-gray-500">
          © 2025 Product Catalog
        </footer>
      </body>
    </html>
  );
}

// import Navbar from "./components/Navbar";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 font-sans">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="p-8">{children}</main>

//         {/* Footer */}
//         <footer className="text-center py-4 text-sm text-gray-500">
//           © 2025 Product Catalog
//         </footer>
//       </body>
//     </html>
//   );
// }
