'use client';

import Header from './components/Header';
import Footer from './components/Footer';
// import NFTComponents from './components/NFTComponents';
// import MintComponent from './components/MintComponent';
// import { TextSquare } from '@/components/text-square/text-square';
import TextEditor from '@/components/text-editor';
export default function Home() {
  return (

    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      {/* Header */}
      <Header />

      {/* Main content */}
      {/* <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Based Moments</h1>
        <p className="mt-4 text-lg text-slate-500">
          Based Moments is a collection of moments that have shaped the history of Base.
        </p>
      </div> */}

      <div className="flex flex-col items-center ">
          {/* <MintComponent /> */}
     <TextEditor />
      </div>

      {/* Mint components */}
      {/* <div className="flex min-h-screen flex-col items-center">
          <NFTComponents />
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
