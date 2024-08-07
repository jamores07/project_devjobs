import './globals.css'
import Providers from './Providers'
import GitHubCorner from '@/app/GitHubCorner'

import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
    subsets: ['latin'],
    variable: '--font-kumbh',
})

export const metadata = {
    title: 'Dev Jobs Web App',
    description: 'A NextJS web application created for a Frontend Mentor challenge',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={kumbh.variable} suppressHydrationWarning>
            <body className="overflow-y-scroll dark:bg-blue-200">
                <div className="flex flex-col items-center">
                    <Providers>
                        <main>{children}</main>
                    </Providers>
                </div>
                <GitHubCorner />
            </body>
        </html>
    )
}
