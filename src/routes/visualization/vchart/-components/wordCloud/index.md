### 尺寸
>
可以改变`font-size`来更改图标大小
>

Icon组件封装了size属性，可以更方便地定义图标尺寸，支持 `extra-small` (8x8)，`small` (12x12)， `default` (16x16)， `large` (20x20)， `extra-large` (24x24)，当size指定为`inherit`时，图标大小继承当前上下文字体大小


```jsx live=true
import React from 'react';
import { IconSearch, IconHelpCircle, IconAlertCircle, IconMinusCircle, IconPlusCircle, IconPlus, IconRefresh } from '@douyinfe/semi-icons';

() => {
    // eslint-disable-next-line react/jsx-key
    const types = [<IconSearch />, <IconHelpCircle />, <IconAlertCircle />, <IconMinusCircle />, <IconPlusCircle />, <IconPlus />, <IconRefresh />];
    const sizes = ['extra-small', 'small', 'default', 'large', 'extra-large'];
    let icons = types.map((type, i) => {
        return <div key={i} style={{ marginBottom: 4 }}>{sizes.map(size => React.cloneElement(type, { size, key: size }))}</div>;
    });
    return icons;
};
```
