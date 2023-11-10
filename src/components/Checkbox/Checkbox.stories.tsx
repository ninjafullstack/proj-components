import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '.';

import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<(Props: CheckboxProps) => JSX.Element> = ({
                                                                           ...args
                                                                         }) => {
  return (
    <>
      <Checkbox {...args} />
    </>
  );
};

export const disabledCheckbox = Template.bind({});
disabledCheckbox.args = {
  label: 'You will not press!!!',
  disabled: true,
};

export const checkbox = Template.bind({});
checkbox.args = {
  label: 'pressed & disabled',
  disabled: false,
};





