'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { generateTitle } from '../../utils';

const ClientTitleUpdater = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const dynamicTitle = generateTitle(pathname);
    setTitle(dynamicTitle);
    document.title = dynamicTitle;
  }, [pathname]);

  return null;
};

export default ClientTitleUpdater;
