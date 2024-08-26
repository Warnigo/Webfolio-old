import { getI18n } from '@/locales/server'
import { About } from '@/pages/About'
import { getMetadata } from '@/utils'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('about'))
}

export default function AboutPage() {
  return <About />
}
