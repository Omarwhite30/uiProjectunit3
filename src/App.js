import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="header">Breaking Bad Quotes</h1>
      <div className="accordion">
        {quotes.map((quote, index) => (
          <div key={index}>
            <input type="radio" name="example_accordion" id={`section${index + 1}`} className="accordion__input" />
            <label htmlFor={`section${index + 1}`} className="accordion__label">{`Quote #${index + 1}`}</label>
            <div className="accordion__content">
              <p>{quote.author}</p>
              <p className="quotes">
                {quote.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => window.location.reload()}>Refresh Page</button>
    </div>
  );
}

export default App;
