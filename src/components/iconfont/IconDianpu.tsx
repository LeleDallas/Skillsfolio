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

const IconDianpu: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M878.1824 218.0608a25.61024 25.61024 0 0 0-17.408 31.744l1.7408 5.9904a25.63584 25.63584 0 0 0 31.744 17.408 25.61024 25.61024 0 0 0 17.408-31.744l-1.7408-5.9904a25.61024 25.61024 0 0 0-31.744-17.408z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M967.9872 435.0976l-35.7888-122.9312a25.58976 25.58976 0 0 0-31.744-17.408 25.61024 25.61024 0 0 0-17.408 31.744l35.7888 122.9312c6.4 21.9648 5.1712 44.8-3.4816 64.3072-9.6256 21.8112-25.4976 39.8848-45.1584 52.8384-0.2048 0.1024-0.4096 0.2048-0.6144 0.3584a133.4528 133.4528 0 0 1-44.4416 18.6368l-0.6144 0.1536c-2.7136 0.5632-5.4784 1.0752-8.192 1.4848-0.512 0.1024-1.024 0.2048-1.536 0.256-2.6112 0.3584-5.2224 0.6144-7.8336 0.8192-0.6656 0.0512-1.3312 0.1536-2.048 0.2048-3.2768 0.256-6.6048 0.3584-9.9328 0.3584-52.1728 0-99.1744-28.9792-119.7568-73.8304a25.63072 25.63072 0 0 0-46.592 0c-20.5312 44.8512-67.5328 73.7792-119.7568 73.7792-51.3536 0-98.0992-28.3648-118.9888-72.2432a25.63072 25.63072 0 0 0-26.7264-14.336 25.72288 25.72288 0 0 0-19.456 14.336c-14.3872 30.1568-40.9088 52.992-72.8064 64.3072A137.33376 137.33376 0 0 1 224.768 588.8c-3.1744 0-6.4-0.1024-9.5232-0.3584-1.9456-0.1536-3.84-0.3584-5.7856-0.5632-1.1776-0.1024-2.304-0.2048-3.4816-0.3584-2.4576-0.3584-4.9152-0.768-7.3216-1.2288l-1.6896-0.3072c-2.6112-0.5632-5.2224-1.1776-7.7824-1.8432-0.3584-0.1024-0.7168-0.1536-1.0752-0.256-2.6112-0.7168-5.1712-1.536-7.68-2.4064-0.3584-0.1024-0.7168-0.2048-1.0752-0.3584-2.4576-0.8704-4.864-1.792-7.2704-2.7648-0.4608-0.2048-0.9728-0.4096-1.4336-0.6144-2.2016-0.9728-4.4032-1.9456-6.5536-3.0208-0.7168-0.3584-1.3824-0.7168-2.0992-1.0752-1.8944-0.9728-3.7888-1.9968-5.6832-3.072-0.9728-0.5632-1.9456-1.1776-2.9184-1.7408-19.6608-12.032-35.8912-28.8768-46.2848-49.3056-11.1104-21.8112-12.6976-47.5136-4.4032-72.448l84.2752-253.44c15.6672-47.0528 61.696-78.6944 114.5344-78.6944h428.1344c50.3296 0 95.6416 29.5936 112.7424 73.6768 5.12 13.2096 19.968 19.712 33.1264 14.592s19.712-19.968 14.592-33.1264c-24.7296-63.5904-89.1904-106.3424-160.4608-106.3424h-428.032c-74.9568 0-140.4928 45.7216-163.1232 113.7664l-84.2752 253.44c-12.6464 38.0416-10.0352 77.7216 7.3728 111.872 11.776 23.0912 28.7232 42.9056 49.1008 58.5728v168.5504c0 101.5296 86.8352 184.1152 193.4848 184.1152h411.4944c106.7008 0 193.4848-82.5856 193.4848-184.1152V601.6c22.6816-17.5104 41.1136-40.2944 52.992-67.1232 13.568-30.5664 15.616-65.8432 5.8368-99.3792z m-109.9776 194.2528v140.544c0 73.2672-63.8464 132.9152-142.2848 132.9152H304.1792c-78.4896 0-142.2848-59.5968-142.2848-132.9152v-140.544c15.7696 5.5808 32.3584 9.0112 49.3056 10.1888 0.5632 0.0512 1.1776 0.0512 1.7408 0.1024 3.9424 0.256 7.8848 0.4096 11.8784 0.4096 56.0128 0 108.1344-24.7296 142.08-65.4336 33.9456 40.6528 86.1184 65.4336 142.08 65.4336 56.6784 0 109.1584-25.1392 143.0016-66.4576 33.8944 41.3184 86.3232 66.4576 143.0016 66.4576 4.096 0 8.192-0.1536 12.288-0.4096l2.2016-0.1536c3.8912-0.3072 7.7312-0.7168 11.5712-1.2288 0.768-0.1024 1.536-0.256 2.3552-0.3584 3.84-0.5632 7.68-1.2288 11.52-2.048 0.3584-0.0512 0.6656-0.1536 1.024-0.256 3.4304-0.768 6.8096-1.6384 10.1376-2.56l3.2256-0.9216c2.9184-0.8192 5.8368-1.7408 8.704-2.7648z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M333.4144 293.7344c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h353.792c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6h-353.792z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

export default IconDianpu;
