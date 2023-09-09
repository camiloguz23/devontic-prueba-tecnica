import style from './layout-cards.module.scss';

interface Prop {
  children: React.ReactNode;
}
function LayoutCards({ children }: Prop): JSX.Element {
  return <div className={style.main}>{children}</div>;
}

export default LayoutCards;
