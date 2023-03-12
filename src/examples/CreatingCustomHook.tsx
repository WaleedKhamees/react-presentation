import { CodeBlock } from "../Components/CodeBlock";

export const CreatingCustomHookExample = () => {
  return (
    <CodeBlock fileName="UseFetch.tsx">{`import { useState, useEffect, useCallback } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } 
    catch (error) {
      setError(error);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {
    data: [data, error, isLoading],
    refetch: fetchData,
  };
};
`}</CodeBlock>
  );
};

export const UsingCustomHookExample = () => {
  return (
    <CodeBlock fileName="DataFetching.tsx">{`/* const [quote, setQuote] = useState<quote>({ author: "", id: 0, quote: "",});
const [isLoading, setIsLoading] = useState(true);
const fetchQuote = async () => {
  setIsLoading(true);
  const quoteRes = await 
  fetch("https://dummyjson.com/quotes/random");
  const quote = (await quoteRes.json());
  setIsLoading(false);
  setQuote(quote);
}; */
const {
  data: [quote, error, isLoading],
  refetch: fetchQuote,
} = useFetch("https://dummyjson.com/quotes/random");
`}</CodeBlock>
  );
};
