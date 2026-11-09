'use client';

import LenisProvider from '@/providers/LenisProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PreloaderWrapper from '@/components/ui/PageLoader';
import PageReady from '@/providers/context/PageReady';
import CookieBanner from '@/features/cookies/CookieBanner';

function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent('annnimate:open-cookie-preferences'));
}

export default function MarketingChrome({ children, latestAnimation }) {
  return (
    <LenisProvider>
      <PageReady />
      <PreloaderWrapper />
      <Header latestAnimation={latestAnimation} />
      <main className="flex-1 relative z-[2] bg-background" data-transition-content="">
        {children}
      </main>
      <Footer latestAnimation={latestAnimation} />
      <CookieBanner onOpenPreferences={openCookiePreferences} />
    </LenisProvider>
  );
}
