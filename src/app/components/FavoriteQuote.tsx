'use client'
import { v4 } from 'uuid';
import { useFavoriteQuotes } from '../hooks/useFavoriteQuotes';
import CrossIcon from './CrossIcon';

export default function FavoriteQuote({ quote }) {

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
                <CrossIcon size={25} onClick={removeFavQuote} />
            </div>
            <h1 className="text-2xl font-bold">{quote.author}</h1>
            <p className="italic">{quote.quote}</p>
        </div>
    )
}