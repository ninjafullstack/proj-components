export type TextProps = {
  text: string;
  variant: string;
  color?: string;
  className?: string;
};

export enum TagsVariantsEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  subtitle_m = 'subtitle_m',
  subtitle_s = 'subtitle_s',
  body_l = 'body_l',
  body_m = 'body_m',
  caption = 'caption',
}

export enum TextColorsEnum {
  black = 'black',
  white = 'white',
  gray = 'gray',
  lightGray = 'light-gray',
  darkGray = 'dark-gray',
  profileBlock = 'profile-block',
  main = 'main',
  red = 'red',
  green = 'green',
  orange = 'orange',
  bg = 'bg',
}
