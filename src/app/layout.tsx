import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({ weight: 'variable', subsets: ['latin']})
const title = 'Iliana\'s Site';
const description = 'This my freaking site';
const links = [
  {title: 'Wordle', href: 'https://www.nytimes.com/games/wordle/index.html'},
  {title: 'Batman', href: 'https://www.dailymotion.com/video/x89h1wp'}
];
const SocialLinks = {
  tiktok: '#tiktok',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:your-email@gmail.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
