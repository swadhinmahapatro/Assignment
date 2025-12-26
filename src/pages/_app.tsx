import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import "../css/font-awesome.css"
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "hot-toast-opening-class",
          duration: 3000,
          success: {
            duration: 3000,
          },
        }}
        containerStyle={{
          top: 10, // Override container positioning
          bottom: 'unset', // Remove bottom positioning
        }}
      />
    </>
  )
}
export default MyApp;