import './globals.css';
import { fontMontserrat, fontRighteous } from '@/fonts';
import { pageName } from '@/data';
import { getInitialData } from '@/services/firebaseService';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: pageName,
  description:
    'La misión Guanare 63 te invita a nuestro gran evento para que disfrutes de la presencia de Jehová y de las nominaciones a los Premios Juventud 2024, no te lo puedes perder',
};
export default async function RootLayout({ children }: { children: any }) {
  const initialData = await getInitialData();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontMontserrat.variable} ${fontRighteous.variable} font-montserrat bg-slate-900 text-white`}
      >
        <StoreProvider initialState={initialData}>{children}</StoreProvider>
      </body>
    </html>
  );
}

