import React from "react";

// Shared visual used by both the Open Graph and Twitter card image routes.
export function OgScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "linear-gradient(135deg, #030305 0%, #0b0713 55%, #1a0b2e 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(circle at 82% 18%, rgba(168,85,247,0.35), transparent 45%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 46,
            height: 46,
            borderRadius: 12,
            background: "linear-gradient(135deg, #c084fc, #6d28d9)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c084fc",
          }}
        >
          Cross-Chain Liquidity Intelligence
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 92,
          fontWeight: 600,
          marginTop: 34,
          color: "#f5f5f7",
        }}
      >
        DEEPTRACE
        <span style={{ display: "flex", color: "#c084fc", marginLeft: 20 }}>AI</span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 30,
          marginTop: 26,
          color: "#a5a5ae",
          maxWidth: 900,
        }}
      >
        Trace the hided fragment — six AI agents, one consensus. $DEEPT on
        Robinhood Chain.
      </div>
    </div>
  );
}
