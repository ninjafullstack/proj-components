import React from 'react';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
                                                             hideLabel,
                                                             label,
                                                             disabled,
                                                           }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        name="checkbox"
        value="yes"
        disabled={disabled}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="checkbox"></label>
      {!hideLabel && <div>{label}</div>}
    </div>
  );
};

CheckboxComponent.displayName = "Checkbox";

