import React from 'react';
import {Button, Descriptions, Select} from 'antd';
import {aryIannaTimeZones} from '../../conf';

import './index.scss';

interface IProps {
    onSelect?: (tinezone: typeof aryIannaTimeZones[number]) => void;
}

function AddClockItem(props: IProps) {
    const [isSelectedOpen, setIsSelectedOpen] = React.useState<boolean>(false);

    const renderItem = () => 
        aryIannaTimeZones.map((val, index) => (
            <Select.Option key={index} value ={val}>{val}</Select.Option>
        ));

    return (
        <div className={'add-item'}>
            {isSelectedOpen ? (
                <Select 
                    open={isSelectedOpen} 
                    className={'add-item-select'}
                    onDropdownVisibleChange={setIsSelectedOpen.bind(this, false)}
                    onSelect={props.onSelect}
                >
                    {renderItem()}
                </Select>
            ) : <Button onClick={setIsSelectedOpen.bind(this, true)} block>+</Button>}
        </div>
    )
};

export default AddClockItem;