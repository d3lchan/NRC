export function CarbonPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="carbon-fiber"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" fill="#0a0a0a" />
          <path
            d="M0 0L5 5L10 0L5 -5Z"
            fill="rgba(255,255,255,0.02)"
          />
          <path
            d="M0 10L5 5L10 10L5 15Z"
            fill="rgba(255,255,255,0.015)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#carbon-fiber)" />
    </svg>
  );
}
