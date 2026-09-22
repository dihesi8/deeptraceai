import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030305",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 18,
            height: 18,
            borderRadius: 4,
            background: "linear-gradient(135deg, #c084fc, #6d28d9)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
