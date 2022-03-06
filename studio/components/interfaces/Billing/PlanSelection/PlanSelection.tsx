import Link from 'next/link'
import { FC } from 'react'
import { Transition } from '@headlessui/react'

import Plans from './Plans/Plans'
import { BillingPlan } from './Plans/Plans.types'
import { StripeProduct } from '..'

interface Props {
  visible: boolean
  billingPlans: BillingPlan[]
  currentPlan?: StripeProduct
  onSelectPlan: (plan: BillingPlan) => void
}

const PlanSelection: FC<Props> = ({ visible, billingPlans, currentPlan, onSelectPlan }) => {
  return (
    <Transition
      show={visible}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 -translate-x-10"
      enterTo="transform opacity-100 translate-x-0"
    >
      <div className="space-y-8">
        <h4 className="text-lg">Change your project's subscription</h4>
        {/* FE will make a call to fetch all plans first at the page level */}
        <Plans plans={billingPlans} currentPlan={currentPlan} onSelectPlan={onSelectPlan} />
        <div className="flex justify-center items-center">
          <Link href="https://supabase.com/pricing">
            <a target="_blank" className="text-sm text-scale-1100 hover:text-scale-1200 transition">
              See detailed comparisons across plans
            </a>
          </Link>
        </div>
      </div>
    </Transition>
  )
}

export default PlanSelection
