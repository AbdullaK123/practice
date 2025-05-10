'use client'
import Header from "../components/Header";
import { useFavoriteQuotes } from "../hooks/useFavoriteQuotes";
import FavoriteQuote from "../components/FavoriteQuote";
import LoadingSpinner from "../components/LoadingSpinner";


export default function FavoriteQuotes() {

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
        <>
            <Header/>
            <div className="flex flex-col justify-center items-center">
                {favoriteQuotes.map((quote) => {
                    return (
                        <FavoriteQuote key={quote.id} quote={quote}/>
                    )
                })}
            </div>
        </>
    )
}