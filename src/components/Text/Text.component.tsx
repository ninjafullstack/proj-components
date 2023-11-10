import cn from 'classnames';
import React from 'react';
import styles from './Text.module.scss';
import { TextProps } from './Text.types';

const tagsObj: { [key: string]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  subtitle_m: 'p',
  subtitle_s: 'p',
  body_l: 'p',
  body_m: 'p',
  caption: 'p',
};
export const TextComponent: React.FC<TextProps> = ({
  text,
  variant,
  color,
  className,
}) => {
  const Tag = `${tagsObj[variant]}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        styles.text,
        {
          [styles[`text_${variant}`]]: variant,
          [styles[`text_color_${color}`]]: color,
        },
        className
      )}
    >
      {text}
    </Tag>
  );
};

TextComponent.displayName = 'Text';
