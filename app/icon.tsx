import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#1c1512",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "2.5px solid #c9956a",
            color: "#c9956a",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: -0.5,
            fontFamily: "Georgia, serif",
          }}
        >
          SGT
        </div>
      </div>
    ),
    { ...size }
  );
}
