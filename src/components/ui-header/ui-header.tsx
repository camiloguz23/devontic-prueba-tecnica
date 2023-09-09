import Link from 'next/link';
import styled from './ui-header.module.scss';

function UiHeader(): JSX.Element {
  return (
    <header className={styled.header}>
      <div className={styled.main}>
        <Link href={'/'} className={styled.title}>
          <h1 >Demo Streaming</h1>
        </Link>

        <div>
          <button className={styled.login}>Login</button>
          <button className={styled.freeTrial}>start your free trial</button>
        </div>
      </div>
      <div className={styled.second}>
        <h2 className={styled.subTitle}>Popular Title</h2>
      </div>
    </header>
  );
}

export default UiHeader;
