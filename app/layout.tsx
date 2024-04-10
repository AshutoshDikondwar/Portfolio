import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContectProvider from '@/context/theme-context-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ashutosh | Portfolio',
  description: 'Ashutosh Dikondwar is a Software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute top-[40rem] h-4/5  w-full rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#454263]'></div>

        <ThemeContectProvider>

          <ActiveSectionContextProvider>

            <Header />
            {children}
            <Toaster position='top-right' />
            <Footer />
            <ThemeSwitch />

          </ActiveSectionContextProvider>

        </ThemeContectProvider>
      </body>
    </html>
  )
}
