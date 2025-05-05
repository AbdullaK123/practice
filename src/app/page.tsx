'use client'
import Header from './components/Header'
import QuoteDisplay from './components/QuotesDisplay';

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center">
        <QuoteDisplay/>
      </div>
    </>
  )

}