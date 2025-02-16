'use client'

import { motion } from 'framer-motion'
import { WidgetCard } from '@/components'
import { useIntersectionObserver } from '@/helpers/hooks'
import { useI18n } from '@/locales/client'

const WorkTogether = () => {
  const t = useI18n()
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="flex items-center justify-center" ref={ref}>
      <WidgetCard
        isVisible={isVisible}
        className="flex flex-col items-center justify-center gap-5 p-10"
      >
        <h2 className="text-center text-4xl font-black uppercase">{t('workTogether')}</h2>

        <motion.div className="rounded-md border p-5">form</motion.div>
      </WidgetCard>
    </section>
  )
}

WorkTogether.displayName = 'Work Together'
export default WorkTogether
