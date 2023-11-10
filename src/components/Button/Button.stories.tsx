import { IconsEnum } from '@components/SvgIcon';

import { ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Button } from '.';
import { ButtonProps, ButtonVariantEnum } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: ['content', 'full'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'outlined', 'text'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
};

const Template: ComponentStory<
  (Props: ButtonProps & { showIcon: boolean }) => JSX.Element
> = ({ showIcon, ...args }) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <Button
        onClick={handleClick}
        loading={isLoading}
        icon={showIcon ? IconsEnum.search : null}
        {...args}
      />
    </>
  );
};

export const button = Template.bind({});
button.args = {
  text: 'Click me',
  variant: ButtonVariantEnum.primary,
  disabled: false,
  width: 'content',
  size: 'md',
  showIcon: true,
  iconPosition: 'left',
};
