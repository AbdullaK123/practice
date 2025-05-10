'use client'
import { useState, useEffect } from "react";
import LoadingSpinner from './LoadingSpinner'
import Quote from './Quote'
import { useQuote } from '../hooks/UseQuote'



export default function QuoteDisplay() {
    
    const { quote, isLoading, fetchQuote } = useQuote();

    return (
        <div className="flex flex-col items-center justify-center m-2">
            <div className="m-2 max-w-sm text-center border rounded-lg p-4 shadow-xl">
                {isLoading? <LoadingSpinner /> : <Quote quote={quote}/> }
            </div>
            <button 
                className="bg-black cursor-pointer hover:scale-110 transition-all duration-150 active:bg-gray-700 active:scale-95 hover:bg-gray-600 text-white font-bold p-4 m-2 rounded-lg shadow-xl" 
                onClick={fetchQuote} 
                type="button"
            >
                Get a new quote
            </button>
        </div>
    )
}