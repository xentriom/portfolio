import { useEffect } from 'react';
import { PersonalInfo } from '../utils/constants';

export const useTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    const newTitle = title ? `${title} | ${PersonalInfo.Name}` : PersonalInfo.FullName;
    document.title = newTitle;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
