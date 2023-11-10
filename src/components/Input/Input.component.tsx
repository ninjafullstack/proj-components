import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import cn from 'classnames';
import React, { useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

export const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'l',
      type,
      className,
      icon,
      errorMessage,
      onFocus = () => null,
      onBlur = () => null,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const showPassClickHandler = () => {
      setIsVisible(!isVisible);
      console.log('click');
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur(e);
    };
    const inpType = type === 'password' && isVisible ? 'text' : type;

    return (
      <div
        className={cn(styles.inputWrap, {
          [styles.inputWrap_focused]: isFocused,
          [styles.inputWrap_error]: errorMessage,
          [styles[`inputWrap_${size}`]]: size,
        })}
      >
        <div className={styles.inner}>
          <input
            {...props}
            type={inpType}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {label && (
            <div
              className={cn(styles.label, {
                [styles.label_focused]: isFocused,
                [styles.label_error]: errorMessage,
              })}
            >
              {label}
            </div>
          )}
          {type === 'password' && (
            <SvgIcon
              className={styles.ico}
              onClick={showPassClickHandler}
              src={IconsEnum.eye}
            />
          )}
          {type === 'currency' && (
            <SvgIcon
              className={styles.ico}
              onClick={showPassClickHandler}
              size={20}
              src={IconsEnum.currency}
            />
          )}
        </div>
        {!!errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  }
);

InputComponent.displayName = 'Input';
