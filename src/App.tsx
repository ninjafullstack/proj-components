import { Avatar } from '@components/Avatar';
import { Badge, badgeVariantsEnum } from '@components/Badge';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Input } from '@components/Input';
import { Toggle } from '@components/Toggle';
import { RadioBtn } from '@components/RadioBtn';
import { IconsEnum } from '@components/SvgIcon';
import { TagsVariantsEnum, Text, TextColorsEnum } from '@components/Text';
import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [toggle, setToggle] = useState(true);
  
  return (
    <div>
      <div className="App">
        <Button text={'click me!'} />
        <Text
          text={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          variant={TagsVariantsEnum.body_m}
          color={TextColorsEnum.red}
        />
        <Avatar
          firstname={'Kirichenko'}
          lastname={'Alexandr'}
          bgColor={'green'}
        />
        <Badge text={badgeVariantsEnum.deactivated} />
        <Input
          label={'Введите пароль'}
          placeholder={'Введите пароль'}
          type={'password'}
          icon={IconsEnum.eye}
          size={'l'}
          errorMessage={'Текст ошибки'}
        />
        <Checkbox
          hideLabel={false}
          label={'Checkbox label'}
          disabled={false}
        />
        <Toggle
          hideLabel={false}
          disabled={false}
          label={'toggler'}
        />
        <RadioBtn hideLabel={false} label={'radio1'} id={'radio1'} />
      </div>
    </div>
  );
}

export default App;
