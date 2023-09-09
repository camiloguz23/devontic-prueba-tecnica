import style from './ui-text.module.scss';
interface Prop {
  text: string;
  black?: true | undefined;
}

function UiText({ black, text }: Prop): JSX.Element {
  return <p className={black && style.black}>{text}</p>;
}

export default UiText;
