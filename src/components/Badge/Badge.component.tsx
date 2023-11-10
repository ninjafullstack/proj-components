import cn from 'classnames';
import React from 'react';
import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.types';
import { colorPicker } from './util';

export const BadgeComponent: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <div
      className={cn(
        styles.badge,
        {
          [styles[`badge_bg-color_${colorPicker(text)}`]]: colorPicker(text),
        },
        className
      )}
    >
      {text}
    </div>
  );
};

BadgeComponent.displayName = 'Badge';
