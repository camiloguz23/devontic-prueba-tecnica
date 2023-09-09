import { type IconSocial } from '@/types';
import style from './ui-icon-social.module.scss';

interface Prop {
  icons: IconSocial[];
  width?: number;
  height?: number;
}

function UiIconSocial({ icons, width, height }: Prop): JSX.Element {
  return (
    <div className={style.containerSocial}>
      {icons.map((item) => (
        <img style={{ width, height }} key={item.name} src={item.icon} alt={item.name} />
      ))}
    </div>
  );
}

export default UiIconSocial;
