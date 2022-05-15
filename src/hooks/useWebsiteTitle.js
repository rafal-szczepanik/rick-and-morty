import React, {useEffect} from 'react';

export const useWebsiteTitle = title => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (title) => document.title = title;
};