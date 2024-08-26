import { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren) => (
  <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
    <Header />
    <div className="relative">{children}</div>
    <Footer />
  </main>
)
