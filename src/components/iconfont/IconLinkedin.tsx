/* tslint:disable */
/* eslint-disable */

import { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconLinkedin: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3z m0 736c-447.8-0.1-671.7-0.2-671.7-0.3 0.1-447.8 0.2-671.7 0.3-671.7 447.8 0.1 671.7 0.2 671.7 0.3-0.1 447.8-0.2 671.7-0.3 671.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M230.6 411.9h118.7v381.8H230.6zM290 359.7c37.9 0 68.8-30.8 68.8-68.8 0-37.9-30.8-68.8-68.8-68.8s-68.8 30.8-68.8 68.8c-0.1 38 30.7 68.8 68.8 68.8zM542.3 604.8c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

export default IconLinkedin;
