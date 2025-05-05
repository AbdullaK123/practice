import Quote from './Quote'

export default function QuotesGallery({quotes}) {
    return (
        <div className="flex flex-col justify-center items-center">
            {quotes.map((index, quote) => {
                return (
                    <div>
                        <h1>{quote.author}</h1>
                        <p>{quote.quote}</p>
                    </div>
                )
            })}
        </div>
    )
}