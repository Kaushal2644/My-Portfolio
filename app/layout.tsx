import "./globals.css";
import LayoutComponent from "@/components/Layout";

export const metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LayoutComponent>
          {children}
        </LayoutComponent>
      </body>
    </html>
  );
}
