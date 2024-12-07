import Header from './header'
import '@coinbase/onchainkit/styles.css';

import { Providers } from '../utils/providers';
// import Footer from './footer'
 
export default function Layout({ children }: any) {
  return (
    <>
    <Providers>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Providers>
    </>
  )
}
