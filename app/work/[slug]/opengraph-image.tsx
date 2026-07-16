import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Work";
  const tagline = project?.tagline ?? "";
  const accent = project?.accent ?? "#8B5CF6";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: accent,
            opacity: 0.25,
            filter: "blur(120px)",
          }}
        />
        <div style={{ color: "#8B5CF6", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
          Case Study
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#F5F5F3",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
          {tagline ? (
            <div style={{ color: "#A5ADB8", fontSize: 34, maxWidth: 940, display: "flex" }}>
              {tagline}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#F5F5F3", fontSize: 32, fontWeight: 600 }}>{site.name}</div>
          <div style={{ color: "#A5ADB8", fontSize: 28 }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
