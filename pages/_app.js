import 'react-perfect-scrollbar/dist/css/styles.css';
import "swiper/css";
import "swiper/css/navigation";
import '../public/css/style.css';
import { Fira_Code } from '@next/font/google';

export const font = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
    {/* <> */}
      <Component {...pageProps} />
    {/* </> */}
    </main>
  )
}

export default MyApp
