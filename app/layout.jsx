
import "../styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

const themeScript = `
  try {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  } catch (e) {}
`;

export const metadata = {
  title: "Promptia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            shshj
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
