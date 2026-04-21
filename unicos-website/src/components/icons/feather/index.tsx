import * as React from 'react';
import { Icon, addCollection } from '@iconify/react';
import marketeqCollection from '@iconify-json/marketeq/icons.json';

addCollection(marketeqCollection);

type IconProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
  'aria-hidden'?: boolean | React.AriaAttributes['aria-hidden'];
};

function MqIcon({ icon, size = 24, className, style, 'aria-hidden': ariaHidden = true }: IconProps & { icon: string }) {
  return (
    <Icon
      icon={icon}
      mode="mask"
      width={size}
      height={size}
      className={['block shrink-0 overflow-visible text-current [&_svg]:overflow-visible', className].filter(Boolean).join(' ')}
      style={{ display: 'block', margin: 0, ...style }}
      aria-hidden={ariaHidden}
      color="currentColor"
    />
  );
}

export const SfClock = (p: IconProps) => <MqIcon {...p} icon="marketeq:time-clock" />;
export const SfMapPin = (p: IconProps) => <MqIcon {...p} icon="marketeq:map-pin" />;
export const SfMonitor = (p: IconProps) => <MqIcon {...p} icon="marketeq:monitor" />;
export const SfAward = (p: IconProps) => <MqIcon {...p} icon="marketeq:badge" />;
export const SfTruck = (p: IconProps) => <MqIcon {...p} icon="marketeq:delivery-truck" />;
export const SfArrowCounterclockwise = (p: IconProps) => <MqIcon {...p} icon="marketeq:refresh-round" />;
export const SfActivity = (p: IconProps) => <MqIcon {...p} icon="marketeq:chart-line-alt-1" />;
export const SfLayers = (p: IconProps) => <MqIcon {...p} icon="marketeq:browse" />;
export const SfArrowRight = (p: IconProps) => <MqIcon {...p} icon="marketeq:right-sign" />;
export const SfArrowLeft = (p: IconProps) => <MqIcon {...p} icon="marketeq:left-sign" />;
export const SfPhone = (p: IconProps) => <MqIcon {...p} icon="marketeq:phone" />;
export const SfEnvelope = (p: IconProps) => <MqIcon {...p} icon="marketeq:envelope" />;
export const SfX = (p: IconProps) => <MqIcon {...p} icon="marketeq:cross-circle" />;
export const SfMenu = (p: IconProps) => <MqIcon {...p} icon="marketeq:menu" />;
export const SfSparkles = (p: IconProps) => <MqIcon {...p} icon="marketeq:atom" />;
export const SfChatScience = (p: IconProps) => <MqIcon {...p} icon="marketeq:chat-4" />;
export const SfLeaf = (p: IconProps) => <MqIcon {...p} icon="marketeq:acorn" />;
export const SfShield = (p: IconProps) => <MqIcon {...p} icon="marketeq:caution-sign-square" />;
export const SfQualityRibbon = (p: IconProps) => <MqIcon {...p} icon="marketeq:date-alt-star" />;
export const SfFaceSmile = (p: IconProps) => <MqIcon {...p} icon="marketeq:angel-45" />;
export const SfCheckboxCheck = (p: IconProps) => <MqIcon {...p} icon="marketeq:check-mark-square-2" />;
export const SfCalendar = (p: IconProps) => <MqIcon {...p} icon="marketeq:calendar-date" />;
export const SfLock = (p: IconProps) => <MqIcon {...p} icon="marketeq:lock-1" />;
export const SfCreditCard = (p: IconProps) => <MqIcon {...p} icon="marketeq:wallet" />;
export const SfCheck = (p: IconProps) => <MqIcon {...p} icon="marketeq:check-mark" />;
export const SfArrowDown = (p: IconProps) => <MqIcon {...p} icon="marketeq:down-sign" />;
export const SfChevronDown = (p: IconProps) => <MqIcon {...p} icon="marketeq:down-sign" />;
export const SfSearch = (p: IconProps) => <MqIcon {...p} icon="marketeq:search" />;
export const SfMessage = (p: IconProps) => <MqIcon {...p} icon="marketeq:chat-2" />;
