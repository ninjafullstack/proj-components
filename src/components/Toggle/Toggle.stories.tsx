import { ComponentStory } from '@storybook/react';

import { Toggle } from '.';

import { ToggleProps } from './Toggle.types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
  },
};

const Template: ComponentStory<(Props: ToggleProps) => JSX.Element> = ({
                                                                         ...args
                                                                       }) => {
  return (
    <>
      <Toggle {...args} />
    </>
  );
};

export const toggle = Template.bind({});
toggle.args = {
  label: 'gl',
  hideLabel: false,
  disabled: false,
};

export const toggleDisabled = Template.bind({});
toggleDisabled.args = {
  label: 'bb',
  hideLabel: false,
  disabled: true,
};
