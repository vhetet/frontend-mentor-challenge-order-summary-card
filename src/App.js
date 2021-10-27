import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="top"></div>
        <div className="bottom">
          <h1>Order Summary</h1>
          <div className="description">
            You can now listen to millions of songs, audiobooks and podcasts on
            any device anywhere you like!
          </div>
          <div className="plan-details">
            <span className="icon" />
            <div className="plan-info">
              <span className="plan-name">Annual Plan</span>
              <span className="plan-price">$59.99/year</span>
            </div>
            <a href="google.com" className="change-link">
              Change
            </a>
          </div>
          <div className="buttons">
            <button className="proceed">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
