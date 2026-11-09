"use client";
import React, { useState } from 'react';
import { translate } from '@/libs/utils/i18n';
import { useTransitionRouter } from '@/providers/TransitionRouterProvider';
import AnimatedButton from '@/features/animations/components/AnimatedButton';
import AnimatedSubtext from '@/features/animations/components/AnimatedSubtext';
import RevealHeadline from '@/features/animations/shared/RevealHeadline';
import PricingToggle from '@/features/pricing/utils/PricingToggle';
import PricingCard from '@/features/pricing/PricingCard';
import PricingFeatures from '@/features/pricing/PricingFeatures';
import ServerData from '@/libs/data/ServerData';

const LANDING_PLANS = ServerData.stripe.landingPlans;

export default function PricingSection({ shippedRecently = 0 }) {
  let [cycle, setCycle] = useState('quarterly');
  let router = useTransitionRouter();
  
  let handleCheckout = (planId) => {
    router.push(`/checkout?plan=${planId}&cycle=${cycle}`);
  };

  return (
    <section id="pricing" data-theme="light" className="pricing relative bg-background text-foreground">
      <div className="v2-container py-96 lg:py-128">
        <div className="grid grid-cols-12 gap-x-24 gap-y-32">
          
          <div className="col-span-12 flex flex-col items-center gap-32 text-center lg:col-span-8 lg:col-start-3">
            <RevealHeadline as="h2" trigger="scroll">
              {translate('landing.pricingSection.headline')}
            </RevealHeadline>
            <AnimatedSubtext
              tag="p"
              className="text-body max-w-[58ch] text-foreground-muted"
              type="lines"
              mask="lines"
              duration={0.6}
              stagger={0.03}
              ease="power2.out"
              animationProps={{ yPercent: 100 }}
              triggerMode="scroll"
            >
              {translate('landing.pricingSection.subhead')}
            </AnimatedSubtext>
            <PricingToggle cycle={cycle} onChange={setCycle} />
          </div>
          
          <div className="col-span-12 grid grid-cols-1 gap-x-24 gap-y-24 lg:col-span-10 lg:col-start-2 lg:grid-cols-3">
            {LANDING_PLANS.map((plan) => (
              <PricingCard
                key={plan.key}
                plan={plan}
                cycle={cycle}
                onCheckout={handleCheckout}
                shippedRecently={shippedRecently}
              />
            ))}
            <PricingFeatures className="lg:col-span-3" />
          </div>
          
          <div className="col-span-12 mt-16 flex justify-center">
            <AnimatedButton href="/pricing" theme="brand" size="sm">
              {translate('landing.pricingSection.bottomCta')}
            </AnimatedButton>
          </div>
          
        </div>
      </div>
    </section>
  );
}
