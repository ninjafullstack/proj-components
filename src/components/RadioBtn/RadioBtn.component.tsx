
import React from 'react';
import styles from './RadioBtn.module.scss';
import { RadioBtnProps } from './RadioBtn.types';

export const RadioBtnComponent: React.FC<RadioBtnProps> = ({
                                                             id,
                                                             label,
                                                             hideLabel,
}) => {
  const btnLabels = ['btn-1', 'btn-2', 'btn-3', 'btn-4']
  
  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: "flex" }}>
        <input
          type="radio"
          className={styles.radio}
          id={id}
          name="radio"
          value={id}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={id}></label>
        {!hideLabel && <div>{label}</div>}
      </div>
      {/*{btnLabels.map((label, index) => (*/}
      {/*  <div key={index} style={{ display: "flex" }}>*/}
      {/*    <input*/}
      {/*      type="radio"*/}
      {/*      className={styles.radio}*/}
      {/*      id={label}*/}
      {/*      name="radio-group"*/}
      {/*      value={label}*/}
      {/*    />*/}
      {/*    /!* eslint-disable-next-line jsx-a11y/label-has-associated-control *!/*/}
      {/*    <label htmlFor={label}></label>*/}
      {/*    {hideLabel && <div>{label}</div>}*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
}

RadioBtnComponent.displayName = 'RadioBtn';
