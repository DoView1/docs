import type { AppProps } from 'next/app';
import { UmamiAnalytics } from '../components/UmamiAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <UmamiAnalytics />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
