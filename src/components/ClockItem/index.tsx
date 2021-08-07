import React from 'react';
import {Descriptions} from 'antd';

import './index.scss';

function ClockItem(props) {
    const handleClose = () => {
        props.handleDelete(props.index);
    };
    return <Descriptions column={1} bordered className={'clock-item'}>
        <Descriptions.Item>
            <span className={'clock-item-close'} onClick={handleClose}>X</span>
            {props.timeZone}
        </Descriptions.Item>
        <Descriptions.Item>{props.date}</Descriptions.Item>
        <Descriptions.Item>{props.time}</Descriptions.Item>
    </Descriptions>
};

export default ClockItem;