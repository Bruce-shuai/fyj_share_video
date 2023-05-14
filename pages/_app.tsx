import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  const router = useRouter();

  function clearPreviousPageContent() {
    const pageContainer = document.getElementById('page-container');
    if (pageContainer && pageContainer.firstChild) {
      pageContainer.removeChild(pageContainer.firstChild);
    }
  }
  useEffect(() => {
    const handleRouteChange = () => {
      // 清除上一个页面的内容
      clearPreviousPageContent();
    };

    // 添加路由切换事件监听
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // 移除路由切换事件监听
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (isSSR) return null;
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="bg-[url(../utils/background.jpg)] bg-no-repeat bg-cover">
        <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh] backdrop-blur-md backdrop-brightness-75">
          <Navbar />
          <div className="flex gap-6  ">
            <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
              <Sidebar />
            </div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 mr-4">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
