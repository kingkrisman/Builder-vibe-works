import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // This ensures that the ThemeProvider doesn't cause hydration mismatch when server-rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemeProvider defaultTheme={defaultTheme} {...props}>
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
