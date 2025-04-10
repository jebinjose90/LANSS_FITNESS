//LANSS_FITNESS\frontend\src\core\usecases\useTheme.ts
import { useEffect, useState } from 'react';
import { getTheme } from '../../infrastructure/api/themeApi';
import { Theme } from '../../core/models/Theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null);  // Use Theme type

  useEffect(() => {
    const fetchTheme = async () => {
      const themeData = await getTheme();
      setTheme(themeData);
      localStorage.setItem('favicon', themeData.logoUrl);
      localStorage.setItem('title', themeData.companyName);
      console.log("COLOR1",themeData.color1);
      

      // Apply dynamic theme colors via CSS variables
      document.documentElement.style.setProperty('--color1', themeData.color1);
      document.documentElement.style.setProperty('--color2', themeData.color2);
      document.documentElement.style.setProperty('--color3', themeData.color3);

    };

    fetchTheme();
  }, []);

  return theme;
};