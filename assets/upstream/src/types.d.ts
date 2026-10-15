import 'react';

declare module 'react' {
  interface CSSProperties {
    WebkitAppRegion?: 'drag' | 'no-drag';
    [key: `--${string}`]: string | number | undefined;
  }
}
