import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(url);

        if (!ignore) {
          console.log(response.data);
          setData(response.data);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
