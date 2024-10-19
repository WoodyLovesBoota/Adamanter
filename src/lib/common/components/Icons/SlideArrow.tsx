// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
import * as React from "react";
import type { SVGProps } from "react";
const SvgSlideArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    width={props.width || 24}
    height={props.height || 24}
    style={props.style || {}}
    onClick={props.onClick}
    {...props}
  >
    <g filter="url(#filter0_b_47_588)">
      <rect width={48} height={48} rx={24} fill="white" fillOpacity={0.6} />
      <rect
        x={0.5}
        y={0.5}
        width={47}
        height={47}
        rx={23.5}
        stroke="black"
        strokeOpacity={0.1}
      />
      <path d="M21 14L21 34L31 24L21 14Z" fill="#01CCFF" />
    </g>
    <defs>
      <filter
        id="filter0_b_47_588"
        x={-8}
        y={-8}
        width={64}
        height={64}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_47_588"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_47_588"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgSlideArrow;
