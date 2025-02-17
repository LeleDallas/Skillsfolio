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

const IconQuanxuan: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M918.528 418.9696c-14.1312 0-25.6-11.4688-25.6-25.6V380.928c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v12.4416c0 14.1312-11.4176 25.6-25.6 25.6zM448.4608 649.6256a62.3104 62.3104 0 0 1-48.0256-22.784L296.96 500.48a25.6 25.6 0 0 1 3.584-36.0448 25.6 25.6 0 0 1 36.0448 3.584l103.4752 126.3616c2.6624 3.2256 6.0416 3.8912 7.8336 3.9936 1.8432 0.1024 5.2736-0.2048 8.2432-3.1232l249.7536-245.7088a25.5744 25.5744 0 0 1 36.1984 0.3072 25.5744 25.5744 0 0 1-0.3072 36.1984L492.032 631.7056c-11.5712 11.52-27.2896 17.92-43.5712 17.92z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M713.728 940.1856H311.4496c-127.0272 0-230.4-103.3728-230.4-230.4V308.5824c0-127.0272 103.3728-230.4 230.4-230.4h402.3296c127.0272 0 230.4 103.3728 230.4 230.4 0 14.1312-11.4688 25.6-25.6 25.6s-25.6-11.4688-25.6-25.6c0-98.816-80.384-179.2-179.2-179.2H311.4496c-98.816 0-179.2 80.384-179.2 179.2v401.2032c0 98.816 80.384 179.2 179.2 179.2h402.3296c98.816 0 179.2-80.384 179.2-179.2V464.64c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v245.0944c-0.0512 127.0784-103.3728 230.4512-230.4512 230.4512z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

export default IconQuanxuan;
