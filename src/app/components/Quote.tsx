import CheckIcon from './CheckIcon'
import { v4 } from 'uuid';

export default function Quote({ quote }) {

    const saveToFavoriteQuotes = () => {
        const favoriteQuotesBytes = localStorage.getItem('favoriteQuotes');
        const favoriteQuotes = favoriteQuotesBytes ? JSON.parse(favoriteQuotesBytes) : [];
        favoriteQuotes.push({
            id: v4(),
            author: quote.author,
            quote: quote.quote
        });
        localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
        alert(`Quote saved to favorites: ${quote.quote} by ${quote.author}`)
    }

    return (
        <div className="flex flex-col gap-3 m-2 max-w-sm text-center">
            <div className="flex justify-end gap-3">
                <CheckIcon 
                    color="#4CAF51" 
                    strokeColor="#4CAF50" 
                    strokeWidth={3} 
                    size={25}
                    onClick={saveToFavoriteQuotes}
                />
            </div>
            <h1 className="text-2xl font-bold">{quote.author}</h1>
            <p className="italic">{quote.quote}</p>
        </div>
    )
}