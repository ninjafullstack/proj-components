import { ComponentStory } from '@storybook/react';
import { RadioBtn as LocalRadioBtn } from '.';
import { RadioBtnProps } from './RadioBtn.types';

export default {
  title: 'Components/RadioBtn',
  component: LocalRadioBtn,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
  },
};

const Template: ComponentStory<(Props: RadioBtnProps) => JSX.Element> = ({
                                                                           ...args
                                                                         }) => {
  return (
    <>
      <LocalRadioBtn {...args} />
    </>
  );
};

export const RadioBtn = Template.bind({});
RadioBtn.args = {
  hideLabel: true,
  label: '',
  id: 'radio1'
};
