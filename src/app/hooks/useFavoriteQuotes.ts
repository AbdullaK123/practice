import { useState, useEffect } from "react";
import { v4 } from 'uuid';

const QUOTE_LIMIT = 10;

export function useFavoriteQuotes() {
    
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);
    const [quoteLimit, setQuoteLimit] = useState(0);
    const [filteredQuotes, setFilteredQuotes] = useState([]);

    useEffect(() => {
        try {
            const storedQuotes = localStorage.getItem("favQuotes");
            if (storedQuotes) {
                setFavoriteQuotes(JSON.parse(storedQuotes));
            }
        } catch (err) {
            console.log(`Failed to fetch favorite quotes: ${err}`)
            setFavoriteQuotes([{
                id: v4(),
                author: "Error",
                quote: "Something went wrong. The server might be down.",
                dateAdded: new Date().toISOString()
            }])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favQuotes", JSON.stringify(favoriteQuotes))
    }, [favoriteQuotes])

    const addFavQuote = (quote) => {
        if (quoteLimit > QUOTE_LIMIT) {
            console.log("Quote limit reached")
            return
        }
        if (checkExists(quote)) {
            console.log("Quote already exists")
            return
        }
        const newQuote = {
            id: v4(),
            author: quote.author,
            quote: quote.quote,
            dateAdded: new Date().toISOString()
        }
        setFavoriteQuotes((prevQuotes) => [...prevQuotes, newQuote]);
        setQuoteLimit(quoteLimit + 1)
        alert(`New quote added!`)
    }

    const removeFavQuote = (quote) => {
        if (checkExists(quote)) {
            setFavoriteQuotes((favoriteQuotes) =>  favoriteQuotes.filter((favQuote) => favQuote.quote !== quote.quote))
            setQuoteLimit(quoteLimit - 1)
        } else {
            console.log("Quote doesn't exist")
            return
        }
    }

    const clearFavorites = () => {
        setFavoriteQuotes([])
        setQuoteLimit(0)
    }

    const sortFavoriteQuotes = (byParam) => {
        switch (byParam) {
            case "date":
                const sortedByDate = [...favoriteQuotes].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
                setFavoriteQuotes(sortedByDate)
                return sortedByDate
            case "author":
                const sortedByAuthor = [...favoriteQuotes].sort((a, b) => a.author.localeCompare(b.author))
                setFavoriteQuotes(sortedByAuthor)
                return sortedByAuthor
            default:
                setFavoriteQuotes(favoriteQuotes)
                return [...favoriteQuotes].sort((a, b) => a.quote.localeCompare(b.quote))
        }
    }

    const filterFavoriteQuotes = (byParam, value) => {
        switch (byParam) {
            case "author":
                const filteredByAuthor = [...favoriteQuotes].filter((favQuote) => favQuote.author === value)
                setFilteredQuotes(filteredByAuthor)
                return filteredByAuthor
            case "quote":
                const filteredByPhrase = [...favoriteQuotes].filter((favQuote) => favQuote.quote.includes(value))
                setFilteredQuotes(filteredByPhrase)
                return filteredByPhrase
            default:
                setFilteredQuotes([])
                return 
        }
    }

    const checkExists = (quote) => {
        return favoriteQuotes.some((favQuote) => favQuote.quote === quote.quote)
    }

    return {
        favoriteQuotes, 
        filteredQuotes,
        addFavQuote, 
        removeFavQuote, 
        checkExists, 
        clearFavorites, 
        filterFavoriteQuotes, 
        sortFavoriteQuotes
     }
}