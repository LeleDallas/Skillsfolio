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

const IconShezhi: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M515.7888 668.2112c-84.5824 0-153.3952-68.8128-153.3952-153.3952 0-84.5824 68.8128-153.3952 153.3952-153.3952s153.3952 68.8128 153.3952 153.3952c-0.0512 84.5824-68.8128 153.3952-153.3952 153.3952z m0-255.5392c-56.32 0-102.1952 45.824-102.1952 102.1952s45.824 102.1952 102.1952 102.1952 102.1952-45.824 102.1952-102.1952-45.8752-102.1952-102.1952-102.1952zM886.1696 437.1968c-6.0416 0-12.0832-2.0992-16.9472-6.4a25.6 25.6 0 0 1-2.2016-36.1472c14.8992-16.8448 18.0736-41.5744 7.936-61.5424a388.5568 388.5568 0 0 0-20.224-35.328c-12.4416-19.4048-35.5328-29.0304-58.7776-24.576a25.60512 25.60512 0 0 1-29.952-20.3264 25.60512 25.60512 0 0 1 20.3264-29.952c43.9808-8.3968 87.7056 10.0864 111.5136 47.2064 8.2432 12.8 15.9232 26.2144 22.784 39.8336 19.5584 38.5536 13.4144 86.2208-15.2576 118.6304-5.12 5.6832-12.1344 8.6016-19.2 8.6016z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M515.7888 968.448c-10.1888 0-20.48-0.3584-30.6176-1.024-53.7088-3.6352-96.5632-46.3872-99.6352-99.4304-0.9216-16.1792-6.7584-31.6928-16.7936-44.9536-21.9136-28.8768-60.7744-39.7312-94.5152-26.4192-1.3824 0.512-2.7136 1.0752-3.9936 1.6896-50.1248 22.784-107.6224 6.2976-136.704-39.1168a459.9552 459.9552 0 0 1-22.9376-40.2432c-24.064-47.6672-9.1136-105.984 34.816-135.68 13.3632-9.0624 23.7568-21.9648 30.0032-37.3248 13.6192-33.536 3.1744-72.448-25.4976-94.72-1.1776-0.9216-2.3552-1.792-3.5328-2.6112-45.0048-31.4368-60.3648-88.8832-36.5056-136.5504 7.7824-15.5648 16.5888-30.8736 26.1632-45.4656 29.2352-44.6464 87.296-60.8256 135.0144-37.6832 14.4384 7.0144 30.72 9.5232 47.104 7.3216 35.9936-4.9152 64.5632-33.536 69.4784-69.632 0.2048-1.4336 0.3584-2.8672 0.4608-4.3008 4.6592-54.8864 46.6432-97.0752 99.9424-100.352 18.688-1.1264 37.8368-1.1264 56.6272 0.1024 53.76 3.4304 96.6656 46.336 99.7888 99.7888 0.9216 15.9744 6.656 31.3856 16.4864 44.544 14.4384 19.2 37.632 31.232 62.1568 32.2048 14.1312 0.5632 25.1392 12.4928 24.576 26.5728-0.5632 14.1312-12.6976 25.088-26.5728 24.576-40.2944-1.5872-77.1584-20.7872-101.0688-52.6848-15.9232-21.1968-25.1392-46.1824-26.6752-72.2432-1.6384-27.648-23.9616-49.8688-51.9168-51.6608-16.64-1.0752-33.6896-1.0752-50.2272-0.0512-27.6992 1.6896-49.6128 24.1664-52.0704 53.4528-0.2048 2.2528-0.4608 4.608-0.768 6.912-7.9872 58.8288-54.5792 105.472-113.3056 113.5104-26.4192 3.584-52.7872-0.5632-76.3904-11.9808-24.6272-11.9296-54.6816-3.5328-69.8368 19.6608a404.15744 404.15744 0 0 0-23.1936 40.2944c-12.3904 24.7808-3.9936 54.9376 20.0192 71.68 1.8944 1.3312 3.7888 2.7136 5.632 4.1472 46.6432 36.1984 63.744 99.7376 41.472 154.4192-10.0864 24.7808-26.9312 45.6704-48.7424 60.416-22.6304 15.3088-30.2592 45.5168-17.8176 70.2464 6.144 12.1856 13.0048 24.1664 20.3776 35.6864 15.2576 23.808 45.6704 32.256 72.3968 20.1728 2.0992-0.9216 4.2496-1.8432 6.4-2.7136 55.04-21.7088 118.3744-3.9936 154.112 43.1104 16.2304 21.4016 25.6 46.592 27.0848 72.96 1.5872 27.3408 23.9104 49.408 51.968 51.3024 16.6912 1.1264 33.6384 1.2288 50.5344 0.256 27.5456-1.5872 49.3056-24.0128 51.7632-53.248 0.2048-2.3552 0.4608-4.6592 0.768-6.9632 7.9872-59.136 54.784-105.8304 113.8176-113.664 26.5216-3.5328 53.0432 0.768 76.6464 12.4416 24.6272 12.1856 54.784 3.84 70.0416-19.4048 8.4992-12.9024 16.3328-26.4192 23.2448-40.192 12.544-24.8832 3.9936-55.1424-20.3264-71.8848-1.9456-1.3312-3.84-2.7136-5.7344-4.1984-47.5648-36.5568-64.7168-100.7104-41.728-155.9552a25.55904 25.55904 0 0 1 33.4848-13.7728 25.55904 25.55904 0 0 1 13.7728 33.4848c-13.8752 33.3824-3.1232 73.6256 25.6512 95.6928 1.1776 0.9216 2.3552 1.792 3.584 2.6112 45.6192 31.4368 61.184 89.1392 37.0176 137.1136-7.8336 15.5136-16.64 30.72-26.2144 45.312-29.4912 44.7488-87.7056 60.7232-135.4752 37.1712-14.4896-7.168-30.8736-9.7792-47.2576-7.5776-35.6352 4.7104-64.9728 34.048-69.7856 69.7344-0.2048 1.4848-0.3584 2.9696-0.4608 4.4032-4.5568 54.8352-46.5408 96.9728-99.7888 100.0448-8.7552 0.4096-17.6128 0.6656-26.3168 0.6656z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

export default IconShezhi;
