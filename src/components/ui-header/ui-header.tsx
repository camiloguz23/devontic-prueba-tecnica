import Link from 'next/link';
import style from './ui-header.module.scss';

function UiHeader(): JSX.Element {
  return (
    <header className={style.header}>
      <div className={style.main}>
        <Link href={'/'} className={style.title}>
          <h1 >Demo Streaming</h1>
        </Link>

        <div className={style.containerBtn}>
          <button className={style.login}>Login</button>
          <button className={style.freeTrial}>start your free trial</button>
        </div>
      </div>
      <div className={style.second}>
        <h2 className={style.subTitle}>Popular Title</h2>
      </div>
    </header>
  );
}

export default UiHeader;
