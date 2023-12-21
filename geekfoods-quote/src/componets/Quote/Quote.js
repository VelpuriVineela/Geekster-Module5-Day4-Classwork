import "./Quote.css";

const Quote = ({quote}) => {
    return (
        <div className="quote-main">
            {quote.map((data) => {
                return (
                  <div className="quoteCard"  key={data.id}>
                    <h2>{data.quote}</h2>
                    <p>{data.author}</p>
                 </div>
                ); 
            })}
        </div>
    );
};

export default Quote;