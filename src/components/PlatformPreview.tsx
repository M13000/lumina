import TradingChart from "./TradingChart";

export default function PlatformPreview() {
  return (
    <section className="platform-preview">
      <div className="terminal-header">
        <span>● Live Market</span>
        <span className="positive">+2.14%</span>
      </div>

      <div className="terminal-grid">
        <aside className="market-list">
          <h3>Markets</h3>

          <div className="market-row active">
            BTC/USD
          </div>

          <div className="market-row">
            ETH/USD
          </div>

          <div className="market-row">
            SOL/USD
          </div>

          <div className="market-row">
            XRP/USD
          </div>

          <div className="market-row">
            ADA/USD
          </div>
        </aside>

        <div className="chart-section">
          <div className="chart-top">
            <h2>BTC/USD</h2>
            <span>$67,241</span>
          </div>

          <div className="fake-chart">
            <TradingChart />
          </div>
        </div>
      </div>

      <div className="terminal-bottom">
        <div className="order-book">
          <h3>Order Book</h3>

          <div className="book-line">
            <span>67250</span>
            <span>0.42 BTC</span>
          </div>

          <div className="book-line">
            <span>67244</span>
            <span>0.35 BTC</span>
          </div>

          <div className="book-line">
            <span>67231</span>
            <span>0.82 BTC</span>
          </div>

          <div className="book-line">
            <span>67218</span>
            <span>0.27 BTC</span>
          </div>
        </div>

        <div className="trade-box">
          <h3>Trade</h3>

          <input
            placeholder="Amount"
            type="text"
          />

          <button>
            Buy BTC
          </button>

          <button className="sell-btn">
            Sell BTC
          </button>
        </div>
      </div>

      <div className="recent-trades">
        <h3>Recent Trades</h3>

        <div className="trade-line">
          <span>BTC/USD</span>
          <span>$67,241</span>
        </div>

        <div className="trade-line">
          <span>BTC/USD</span>
          <span>$67,236</span>
        </div>

        <div className="trade-line">
          <span>BTC/USD</span>
          <span>$67,228</span>
        </div>
      </div>
    </section>
  );
}