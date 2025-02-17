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

const IconSee: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M956.9 499.4C865.7 315.1 700.6 192 512 192S158.3 315.1 67.1 499.4c-3.8 7.7-3.8 17.4 0 25.1C158.3 708.9 323.4 832 512 832s353.7-123.1 444.9-307.4c3.8-7.8 3.8-17.4 0-25.2zM734 695.1c-33.4 23.6-69.1 41.8-106 54-37.6 12.6-76.7 18.9-116 18.9s-78.4-6.3-116.1-18.9c-36.9-12.3-72.5-30.4-106-54-63-44.5-117.2-107.6-157.4-183.1 40.2-75.5 94.3-138.6 157.4-183.1 33.4-23.6 69.1-41.8 106-54C433.6 262.3 472.7 256 512 256s78.4 6.3 116.1 18.9c36.9 12.3 72.5 30.4 106 54 63 44.5 117.2 107.6 157.4 183.1-40.3 75.5-94.4 138.6-157.5 183.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M511.4 352C422.8 352 351 423.6 351 512s71.8 160 160.4 160 160.4-71.6 160.4-160-71.9-160-160.4-160z m0 256c-53.1 0-96.4-43.1-96.4-96s43.2-96 96.4-96c53.1 0 96.4 43.1 96.4 96s-43.3 96-96.4 96z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};
export default IconSee;
