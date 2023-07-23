import '../styles/global.css'
import Nav from '@components/Nav'
import {Provider} from '@app/Provider'

export const metadata = {
  title: 'Promptia',
  description: 'Discover & Share AI Prompts',
}
const RootLayout = ({ children }) => {
  return (
    <html>
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
  )
}
export default RootLayout
