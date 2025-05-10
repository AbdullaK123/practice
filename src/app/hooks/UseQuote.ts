import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export function useQuote() {
    const [quote, setQuote] = useState({
        author: "",
        quote: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    
    async function getQuote() {
      try {
        const response = await fetch(API_URL,
          {
            "headers": {
              "X-API-Key": API_KEY
            }
          }
        );
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err)
      }
    }
    
    const fetchQuote = async () => {
        try {
          setIsLoading(true)
          const quoteData = await getQuote();
          setIsLoading(false)
          setQuote({
            author: quoteData[0].author,
            quote: quoteData[0].quote
          });
        } catch (error) {
          console.error("Error fetching quote:", error);
          setQuote({
            author: "Error",
            quote: "Something went wrong. The server might be down."
          })
        }
      };
    
    useEffect(() => {
        fetchQuote()
    }, []);

    return { quote, isLoading, fetchQuote }
}

