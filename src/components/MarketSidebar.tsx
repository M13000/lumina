export default function MarketSidebar() {
  const assets = [
    "BTC/USD",
    "ETH/USD",
    "SOL/USD",
    "XRP/USD",
    "ADA/USD",
  ];

  return (
    <div className="market-sidebar">
      <h3>Markets</h3>

      {assets.map((asset) => (
        <div
          key={asset}
          className="market-item"
        >
          {asset}
        </div>
      ))}
    </div>
  );
}