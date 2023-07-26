import { Inter } from 'next/font/google'
import { Card } from '@/components/card'
import SwitchThemeButton from '@/components/switch-theme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-white dark:bg-slate-800`}
    >
      <header className="flex items-center gap-2">
        <h1 className="uppercase tracking-normal text-slate-700 dark:text-white">manually switch theme app</h1>
        <SwitchThemeButton />
      </header>
      <Card.Container>
          <Card.Title title='Lorem ipsum' />
          <Card.Content>
             Fusce iaculis nisi magna, id placerat urna commodo a. Fusce dignissim vitae ex eu placerat. Nulla vehicula odio et dapibus placerat. Quisque a tincidunt nibh. Suspendisse purus leo, volutpat non pulvinar id, porta in ante. Fusce tincidunt tortor lorem, vitae tempor massa dictum quis. Nam pretium urna ultrices, facilisis ante vitae, pulvinar nibh.
          </Card.Content>
      </Card.Container>
    </main>
  )
}
