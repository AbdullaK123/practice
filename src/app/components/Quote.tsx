'use client'
import CheckIcon from './CheckIcon'
import { v4 } from 'uuid';
import { useFavoriteQuotes } from '../hooks/useFavoriteQuotes';

export default function Quote({ quote }) {

    const {
        favoriteQuotes, 
        filteredQuotes,
        addFavQuote, 
        removeFavQuote, 
        checkExists, 
        clearFavorites, 
        filterFavoriteQuotes, 
        sortFavoriteQuotes
    } = useFavoriteQuotes()


    return (
        <div className="flex flex-col gap-3 m-2 max-w-sm text-center">
            <div className="flex justify-end gap-3">
                <CheckIcon 
                    onClick={addFavQuote}
                    size={25} 
                />
            </div>
            <h1 className="text-2xl font-bold">{quote.author}</h1>
            <p className="italic">{quote.quote}</p>
        </div>
    )
}