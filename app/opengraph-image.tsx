import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Didot "B" outline (same mark as the favicon / nav), on an emerald tile.
const DIDOT_B =
  "M224.92 242.02 L263.30 242.02 Q274.98 242.02 284.58 239.10 Q294.18 236.18 301.06 228.88 Q307.95 221.58 311.70 209.06 Q315.46 196.54 315.46 177.35 Q315.46 155.65 309.82 142.51 Q304.19 129.37 295.22 122.69 Q286.25 116.01 275.19 113.93 Q264.14 111.84 253.29 111.84 Q245.78 111.84 238.06 112.05 Q230.34 112.26 224.92 113.09 Z M224.92 398.49 Q229.92 398.91 235.97 399.53 Q242.02 400.16 253.29 400.16 Q272.90 400.16 286.88 396.40 Q300.85 392.65 309.82 383.26 Q318.80 373.87 322.97 358.43 Q327.14 343.00 327.14 319.63 Q327.14 286.25 312.95 267.06 Q298.77 247.86 270.81 247.86 L224.92 247.86 Z M136.88 398.49 L183.19 398.49 L183.19 113.09 L136.88 113.09 L136.88 107.25 L209.89 107.25 Q216.15 107.25 222.62 107.04 Q229.09 106.83 235.76 106.42 Q242.44 106.42 248.70 106.21 Q254.96 106.00 260.80 106.00 Q291.26 106.00 310.87 113.30 Q330.48 120.60 341.74 131.24 Q353.01 141.88 357.18 154.19 Q361.35 166.50 361.35 176.51 Q361.35 190.28 355.30 201.97 Q349.25 213.65 339.03 222.41 Q328.81 231.17 315.46 236.60 Q302.11 242.02 287.50 243.69 L287.50 244.53 Q302.52 245.78 318.17 250.99 Q333.82 256.21 346.54 265.60 Q359.27 274.98 367.20 288.75 Q375.12 302.52 375.12 320.46 Q375.12 339.24 368.03 354.89 Q360.94 370.53 346.75 381.80 Q332.56 393.07 310.87 399.53 Q289.17 406.00 260.38 406.00 Q254.54 406.00 248.91 405.79 Q243.27 405.58 237.02 405.17 Q230.76 404.75 224.08 404.54 Q217.40 404.33 209.89 404.33 L136.88 404.33 Z";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 512 512"><rect width="512" height="512" rx="116" fill="#1E7A46"/><path d="${DIDOT_B}" fill="#F5F4F0" stroke="#F5F4F0" stroke-width="6" stroke-linejoin="round"/></svg>`;
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

const INK = "#141414";
const MUTED = "#6B6B63";
const EMERALD = "#1E7A46";
const CREAM = "#F5F4F0";
const HAIRLINE = "rgba(20,20,20,0.10)";

const FONT_DIR = join(process.cwd(), "app/_og-fonts");

async function loadFonts() {
  const [serif, serifSemi, serifItalic, sans] = await Promise.all([
    readFile(join(FONT_DIR, "Newsreader-Regular.ttf")),
    readFile(join(FONT_DIR, "Newsreader-SemiBold.ttf")),
    readFile(join(FONT_DIR, "Newsreader-SemiBoldItalic.ttf")),
    readFile(join(FONT_DIR, "Inter-Medium.ttf")),
  ]);
  return [
    { name: "Newsreader", data: serif, weight: 400 as const, style: "normal" as const },
    { name: "Newsreader", data: serifSemi, weight: 600 as const, style: "normal" as const },
    { name: "Newsreader", data: serifItalic, weight: 600 as const, style: "italic" as const },
    { name: "Inter", data: sans, weight: 500 as const, style: "normal" as const },
  ];
}

export default async function OgImage() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          padding: 76,
          fontFamily: "Inter",
        }}
      >
        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} width={72} height={72} alt="" />
            <div
              style={{
                fontFamily: "Newsreader",
                fontWeight: 600,
                fontSize: 30,
                color: INK,
                letterSpacing: -0.5,
              }}
            >
              {site.shortName}
            </div>
          </div>
          <div style={{ fontSize: 24, color: MUTED, letterSpacing: 0.5 }}>
            {site.url.replace("https://", "")}
          </div>
        </div>

        {/* headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 26,
            }}
          >
            <div style={{ width: 34, height: 2, background: EMERALD }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: EMERALD,
                fontWeight: 500,
              }}
            >
              {site.role}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Newsreader",
              fontWeight: 600,
              fontSize: 78,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              color: INK,
              maxWidth: 960,
            }}
          >
            <span>Building software people&nbsp;</span>
            <span style={{ color: EMERALD, fontStyle: "italic" }}>love&nbsp;</span>
            <span>using.</span>
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", height: 1, background: HAIRLINE, marginBottom: 26 }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "Newsreader", fontSize: 30, color: INK }}>{site.name}</div>
            <div style={{ fontSize: 24, color: MUTED }}>@_ibrad</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
