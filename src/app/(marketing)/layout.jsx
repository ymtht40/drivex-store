import MarketingChrome from '@/components/layout/MarketingChrome';
import { getLatestAnimation } from '@/libs/supabase/latestAnimation';

export default async function MarketingLayout({ children }) {
  const latestAnimation = await getLatestAnimation();
  return <MarketingChrome latestAnimation={latestAnimation}>{children}</MarketingChrome>;
}
