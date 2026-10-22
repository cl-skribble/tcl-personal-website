import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Event was renamed; the old poster QR and shared links still point here.
        source: "/events/ai-in-marketing-from-prompts-to-practice",
        destination: "/events/getting-started-with-ai",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
