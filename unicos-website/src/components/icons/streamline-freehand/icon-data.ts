import type { IconifyIcon } from '@iconify/types';
import iconsJson from './streamline-freehand-partial.json';

function pick(name: keyof typeof iconsJson.icons): IconifyIcon {
  const data = iconsJson.icons[name];
  if (!data) {
    throw new Error(`[streamline-freehand] Missing icon: ${String(name)}`);
  }
  return data;
}

/** Figma community „Hand-Drawn Free Icons“ / Streamline Freehand — tik naudojamos ikonos */
export const fhClock = pick('time-clock-circle');
export const fhMapPin = pick('worldwide-web-location-pin');
export const fhMonitor = pick('desktop-monitor');
export const fhAward = pick('task-list-clipboard-favorite-star');
export const fhTruck = pick('shopping-cart-trolley');
export const fhArrowReturn = pick('keyboard-arrow-return');
export const fhActivity = pick('analytics-graph-line-triple');
export const fhLayers = pick('layers-stacked-1');
export const fhArrowRight = pick('navigation-page-right');
export const fhArrowLeft = pick('move-rectangle-left');
export const fhX = pick('remove-delete-sign-bold');
export const fhMenu = pick('menu-navigation-2');
export const fhSparkles = pick('retouch-magic-wand');
export const fhChat = pick('conversation-chat');
export const fhLeaf = pick('charging-battery-eco');
export const fhShield = pick('security-shield-wall');
export const fhQuality = pick('shopping-basket-rating');
export const fhFaceSmile = pick('smiley-smile-2');
