'use client';

import MintComponents from './components/MintComponents';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  return (

    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Based Moments</h1>
        <p className="mt-4 text-lg text-slate-500">
          Based Moments is a collection of moments that have shaped the history of Base.
        </p>
      </div>

      {/* Mint components */}
      <main className="flex min-h-screen flex-col items-center">
          <MintComponents />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
