import cn from 'classnames';
import React from 'react';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

export const AvatarComponent: React.FC<AvatarProps> = ({
  firstname,
  lastname,
  size = 'l',
  bgColor = 'orange',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.avatar,
        {
          [styles[`avatar_size_${size}`]]: size,
          [styles[`avatar_bg-color_${bgColor}`]]: bgColor,
        },
        className
      )}
    >
      <p>{lastname[0] + firstname[0]}</p>
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
