const breakpoints = { xs: 320, s: 640, m: 900, l: 1024, xl: 1200 };

export const medias = (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
  (prev, curr) => Object.assign({}, prev, { [curr]: `@media (min-width: ${breakpoints[curr]}px)` }),
  {} as Record<keyof typeof breakpoints, string>
);
