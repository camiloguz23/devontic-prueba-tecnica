import { type CSSProperties } from 'react';
import style from './ui-text.module.scss';
interface Prop {
  text: string;
  black?: true | undefined;
  styles?: CSSProperties;
}

function UiText({ black, text, styles }: Prop): JSX.Element {
  return (
    <p className={black && style.black} style={styles}>
      {text}
    </p>
  );
}

export default UiText;
