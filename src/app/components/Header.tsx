import Link from 'next/link'

export default function Header() {
    return (
       <nav className="flex flex-row justify-between p-4 bg-black text-white font-bold mb-2 sticky top-0 shadow-lg">
            <h1>Random Quote Generator</h1>
            <div className='flex flex-row gap-10 justify-between'>
                <Link className='text-white font-bold hover:scale-110 transition-all duration-150 active:scale-95' href="/">Home</Link>
                <Link className='text-white font-bold hover:scale-110 transition-all duration-150 active:scale-95' href="/favorite-quotes">Favorite Quotes</Link>
            </div>
       </nav>
    )
}