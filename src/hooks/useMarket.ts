import { useState } from "react";

export function useMarket() {
  const [symbol, setSymbol] = useState("BTCUSDT");

  return {
    symbol,
    setSymbol,
  };
}