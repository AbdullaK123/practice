'use client'
import Header from '../components/Header'
import QuotesGallery from '../components/QuotesGallery';
import { useState, useEffect } from 'react';

export default function FavoriteQuotes() {

    const [favoriteQuotes, setFavoriteQuotes] = useState([]);

    useEffect(() => {
        const favoriteQuotesBytes = localStorage.getItem('favoriteQuotes');
        const favoriteQuotes = favoriteQuotesBytes ? JSON.parse(favoriteQuotesBytes) : [];
        setFavoriteQuotes(favoriteQuotes);
        console.log(favoriteQuotes)
    }, [])

  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center">
        <QuotesGallery quotes={favoriteQuotes}/>
      </div>
    </>
  )

}