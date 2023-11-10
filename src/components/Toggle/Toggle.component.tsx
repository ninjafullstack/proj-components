import React from 'react';
import styles from './Toggle.module.scss';
import { ToggleProps } from './Toggle.types';

export const ToggleComponent: React.FC<ToggleProps> = ({
                                                         label,
                                                         hideLabel,
                                                         disabled,
                                                       }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
      <label className={styles.toggle}>
        <input type="checkbox" value="check" disabled={disabled}/>
        <div className={styles.toggler}></div>
      </label>
      {!hideLabel && <div>{label}</div>}
    </div>
  );
};


ToggleComponent.displayName = 'Toggle';
