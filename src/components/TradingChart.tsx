import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import type { CandlestickData, UTCTimestamp } from "lightweight-charts";
import { useMarket } from "../hooks/useMarket";

export default function TradingChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { symbol, setSymbol } = useMarket();

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { color: "#0b0f1a" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
      width: containerRef.current.clientWidth,
      height: 500,
    });

    const series = chart.addSeries(CandlestickSeries);

    const loadData = async () => {
      try {
        const res = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=150`
        );

        const data = await res.json();

        const candles: CandlestickData[] = data.map((d: any) => ({
          time: Math.floor(d[0] / 1000) as UTCTimestamp,
          open: Number(d[1]),
          high: Number(d[2]),
          low: Number(d[3]),
          close: Number(d[4]),
        }));

        series.setData(candles);
        chart.timeScale().fitContent();
      } catch (err) {
        console.error("Erro REST Binance:", err);
      }
    };

    loadData();

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1m`
    );

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const k = msg.k;

      const candle: CandlestickData = {
        time: Math.floor(k.t / 1000) as UTCTimestamp,
        open: Number(k.o),
        high: Number(k.h),
        low: Number(k.l),
        close: Number(k.c),
      };

      series.update(candle);
    };

    return () => {
      ws.close();
      chart.remove();
    };
  }, [symbol]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        {["BTCUSDT", "ETHUSDT", "SOLUSDT"].map((m) => (
          <button
            key={m}
            onClick={() => setSymbol(m)}
            style={{
              padding: "6px 12px",
              background: m === symbol ? "#2563eb" : "#1f2937",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: 500,
          borderRadius: 12,
          overflow: "hidden",
        }}
      />
    </div>
  );
}