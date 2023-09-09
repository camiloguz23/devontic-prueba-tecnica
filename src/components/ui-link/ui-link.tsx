import Link from 'next/link';
import style from './ui-link.module.scss';

interface Prop {
  text?: string;
  href?: string;
  links?: Array<{ name: string; path: string }>;
  divider?: true | undefined;
  black?: true | undefined;
}

function UiLink({ text, href = '', black, divider, links = [] }: Prop): JSX.Element {
  const setStyle = (): string => {
    return `${style.link} ${black && style.black} ${divider && style.divider}`;
  };
  return (
    <>
      {links
        ? (
        <div className={style.div}>
          {links.map((item) => (
            <Link key={item.path} href={item.path} className={setStyle()}>
              {item.name}
            </Link>
          ))}
        </div>
          )
        : (
        <Link href={href} className={setStyle()}>
          {text}
        </Link>
          )}
    </>
  );
}

export default UiLink;
