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

const IconDingwei: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M513.9968 798.5152c-18.176 0-36.4032-5.9904-51.712-18.1248-121.3952-96.1024-251.0848-250.88-251.0848-396.9024 0-169.216 137.6768-306.8928 306.8928-306.8928 159.1808 0 293.5808 124.16 305.9712 282.7264a25.58464 25.58464 0 0 1-23.552 27.4944c-14.0288 1.1776-26.4192-9.4208-27.4944-23.552-10.2912-132.0448-122.2656-235.52-254.9248-235.52-141.0048 0-255.6928 114.688-255.6928 255.6928 0 127.8976 124.8256 272.128 231.68 356.7616a31.90272 31.90272 0 0 0 41.728-1.6384c70.8608-65.4848 138.1888-129.8944 183.1936-197.4784a25.5744 25.5744 0 0 1 35.4816-7.1168 25.5744 25.5744 0 0 1 7.1168 35.4816c-48.128 72.2944-117.8624 139.0592-191.0784 206.7456-15.9744 14.848-36.1984 22.3232-56.5248 22.3232z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M782.6432 499.5072c-2.9184 0-5.888-0.512-8.8064-1.5872a25.61536 25.61536 0 0 1-15.2064-32.8704c2.4064-6.5536 4.5568-13.2096 6.4-19.712a25.6 25.6 0 0 1 31.5904-17.7152 25.6 25.6 0 0 1 17.7152 31.5904c-2.2016 7.7824-4.7616 15.7184-7.6288 23.5008a25.7024 25.7024 0 0 1-24.064 16.7936zM518.0928 534.7328c-79.616 0-144.384-64.768-144.384-144.4352 0-79.616 64.768-144.384 144.384-144.384 79.616 0 144.4352 64.768 144.4352 144.384-0.0512 79.6672-64.8192 144.4352-144.4352 144.4352z m0-237.6192c-51.4048 0-93.184 41.8304-93.184 93.184s41.8304 93.2352 93.184 93.2352 93.2352-41.8304 93.2352-93.2352-41.8304-93.184-93.2352-93.184zM845.1072 946.3296H183.552c-32.7168 0-61.8496-16.9984-77.9776-45.4656s-15.6672-62.208 1.2288-90.2656l64.4608-107.1616a25.58464 25.58464 0 0 1 35.1232-8.7552 25.59488 25.59488 0 0 1 8.7552 35.1232l-64.4608 107.1616c-7.2192 12.032-7.424 26.4704-0.512 38.656s19.4048 19.5072 33.3824 19.5072h661.6064c13.9776 0 26.4192-7.2704 33.3312-19.4048a37.94944 37.94944 0 0 0-0.3584-38.5536l-63.8464-107.4688a25.5744 25.5744 0 0 1 8.96-35.072 25.55904 25.55904 0 0 1 35.072 8.96l63.8464 107.4688c16.64 28.0576 16.9472 61.696 0.8192 90.0608-16.128 28.3136-45.2608 45.2096-77.8752 45.2096z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

export default IconDingwei;
