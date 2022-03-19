import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { UserInfoProvider } from "../provider/userInfoProvider";
import { RecoilRoot } from "recoil";
import Layout from "./layout";
import { ToastContainer, Zoom } from "react-toastify";

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <UserInfoProvider>
      <RecoilRoot>
        <>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
            closeButton={false}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </RecoilRoot>
    </UserInfoProvider>
  );
}
