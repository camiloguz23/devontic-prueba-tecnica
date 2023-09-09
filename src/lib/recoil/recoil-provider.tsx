'use client';

import type React from 'react';
import { RecoilRoot } from 'recoil';

interface Prop {
  children: React.ReactNode;
}
function RecoilProvider({ children }: Prop): JSX.Element {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
