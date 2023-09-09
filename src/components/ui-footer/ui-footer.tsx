import { ICON_SOCIAL } from '@/types/constants/icon-social.constants';
import { ICON_STORE } from '@/types/constants/icon-store.constants';
import style from './ui-footer.module.scss';
import { UiIconSocial, UiText } from '@/components';
import UiLink from '../ui-link/ui-link';

const List = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Term and Condition',
    path: '/'
  },
  {
    name: 'Privacy Policy',
    path: '/'
  },
  {
    name: 'Collection Student',
    path: '/'
  },
  {
    name: 'Help',
    path: '/'
  },
  {
    name: 'Manage Account',
    path: '/'
  }
];

function UiFooter(): JSX.Element {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <UiLink links={List} divider />
        <UiText text={'Copyright © 2023 Demo streaming All right Reserved'} styles={{ marginTop: 30 }} />
        <div className={style.containerIcon}>
          <UiIconSocial icons={ICON_SOCIAL} width={40} height={40} />
          <UiIconSocial icons={ICON_STORE} width={120} height={60} />
        </div>
      </div>
    </footer>
  );
}

export default UiFooter;
