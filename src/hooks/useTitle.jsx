import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    const newTitle = title ? `${title} | Jason` : 'Jason Chen';
    document.title = newTitle;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
