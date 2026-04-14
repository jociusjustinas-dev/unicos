/**
 * Streamline Freehand — Figma community Hand-Drawn Free Icons (per @iconify-json/streamline-freehand, CC BY 4.0).
 */

import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/types';
import type { StreamlineFreehandIconProps } from './types';
import {
  fhActivity,
  fhArrowLeft,
  fhArrowReturn,
  fhArrowRight,
  fhAward,
  fhChat,
  fhClock,
  fhFaceSmile,
  fhLeaf,
  fhLayers,
  fhMapPin,
  fhMenu,
  fhMonitor,
  fhQuality,
  fhShield,
  fhSparkles,
  fhTruck,
  fhX,
} from './icon-data';

function toIconProps(props: StreamlineFreehandIconProps, icon: IconifyIcon) {
  const { size = 24, className, style, strokeWidth: _sw, 'aria-hidden': ariaHidden = true } = props;
  const mergedClass = ['block shrink-0 overflow-visible [&_svg]:overflow-visible', className].filter(Boolean).join(' ');
  return {
    icon,
    width: size,
    height: size,
    className: mergedClass,
    style: { display: 'block', margin: 0, ...style },
    'aria-hidden': ariaHidden,
  } as const;
}

export function SfClock(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhClock)} />;
}

export function SfMapPin(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhMapPin)} />;
}

export function SfMonitor(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhMonitor)} />;
}

export function SfAward(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhAward)} />;
}

export function SfTruck(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhTruck)} />;
}

export function SfArrowCounterclockwise(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhArrowReturn)} />;
}

export function SfActivity(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhActivity)} />;
}

export function SfLayers(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhLayers)} />;
}

export function SfArrowRight(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhArrowRight)} />;
}

export function SfArrowLeft(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhArrowLeft)} />;
}

export function SfX(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhX)} />;
}

export function SfMenu(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhMenu)} />;
}

export function SfSparkles(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhSparkles)} />;
}

export function SfChatScience(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhChat)} />;
}

export function SfLeaf(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhLeaf)} />;
}

export function SfShield(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhShield)} />;
}

export function SfQualityRibbon(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhQuality)} />;
}

export function SfFaceSmile(props: StreamlineFreehandIconProps) {
  return <Icon {...toIconProps(props, fhFaceSmile)} />;
}

export function SfCheckboxCheck(props: StreamlineFreehandIconProps) {
  const { size = 20, className, style, 'aria-hidden': ariaHidden = true } = props;
  const mergedClass = ['block shrink-0 overflow-visible', className].filter(Boolean).join(' ');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={mergedClass}
      style={{ display: 'block', margin: 0, ...style }}
      aria-hidden={ariaHidden}
    >
      <path
        d="M4.2 5.2C5.6 4.4 8.3 4.1 12 4.1C15.6 4.1 18.2 4.4 19.7 5.2C20.2 6.9 20.3 9.2 20.3 12C20.3 14.9 20.2 17.1 19.7 18.8C18.4 19.5 15.7 19.9 12 19.9C8.2 19.9 5.5 19.6 4.2 18.8C3.6 17.1 3.5 14.8 3.5 12C3.5 9.1 3.7 6.9 4.2 5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.4 12.4C8.5 13.1 9.4 14 10.2 15.2C12.1 12.8 13.9 10.8 16.1 9.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
