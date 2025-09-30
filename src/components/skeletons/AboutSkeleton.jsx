import { shimmerStyle } from "../utils/constants";

export default function AboutSkeleton() {
  return (
    <div className="space-y-6">
      {/* Naslov skeleton */}
      <div style={shimmerStyle} className="h-8 w-48 rounded"></div>

      {/* Paragraf skeletoni */}
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div style={shimmerStyle} className="h-4 w-full rounded"></div>
            <div style={shimmerStyle} className="h-4 w-5/6 rounded"></div>
            <div style={shimmerStyle} className="h-4 w-4/6 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
