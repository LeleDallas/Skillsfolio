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

const IconPhoneiphone: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M681.984 768l0-598.016-384 0 0 598.016 384 0zM489.984 937.984q25.984 0 45.013333-18.986667t18.986667-45.013333-18.986667-45.013333-45.013333-18.986667-45.013333 18.986667-18.986667 45.013333 18.986667 45.013333 45.013333 18.986667zM662.016 41.984q43.989333 0 75.008 32t31.018667 75.989333l0 724.010667q0 43.989333-31.018667 75.989333t-75.008 32l-342.016 0q-43.989333 0-75.008-32t-31.018667-75.989333l0-724.010667q0-43.989333 31.018667-75.989333t75.008-32l342.016 0z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </svg>
  );
};
export default IconPhoneiphone;
