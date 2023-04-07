import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const send = () => {
      setLoading(true);
      try {
        fetch('https://api.api-ninjas.com/v1/quotes?category=money', {
          method: 'GET',
          headers: { 'X-Api-Key': 'tTySwiau1PsXJs5wvhf1dw==NK8bNzv70yBdLNYz' },
          contentType: 'application/json',
        })
          .then((response) => response.json())
          .then((json) => setData(json));
      } catch {
        setHasError(true);
      }
      setLoading(false);
    };
    send();
  }, [setData, setLoading]);

  if (hasError) return <h2>Something went wrong!</h2>;
  if (loading) return <h2> Loading ...</h2>;
  return (
    <div>
      { data.length ? (
        <div className="quotation">
          <h2>Quotes</h2>
          <p>
            {data[0].quote}
          </p>
          <p>
            <small>
              author :
              {data[0].author}
            </small>
          </p>
          <p>
            <small>
              category :
              {data[0].category}
            </small>
          </p>
        </div>
      ) : (<p>Loading..</p>)}
    </div>
  );
}

export default Quotes;
