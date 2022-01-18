import '../styles/globals.css'
// pages/_app.js
import { SessionProvider } from "next-auth/react"
import {RecoilRoot} from 'recoil'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

