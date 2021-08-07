import React from 'react';
import ClockItem from '../../components/ClockItem';
import AddClockItem from '../../components/AddClockItem';

import './index.scss';

function Clock() {
    const [list, setList] = React.useState([]);

    const handleDelete = index => {
        setList(list.filter((item, key) => key !== index));
    };
    const renderItem = () => list.map((val, index) => 
        <ClockItem
            timeZone={val.timeZone}
            date={val.date}
            time={val.time}
            index={index}
            key={index}
            handleDelete={handleDelete}
        />
    );

    const handleOnSelect = React.useCallback(value => {
        const date = new Date;
        const dateString = date.toLocaleString('en-US', {timeZone: `${value}`});
        setList(prev => {
            const next = prev.slice();
            next.push({
                timeZone: value,
                date: dateString.split(',')[0],
                time: dateString.split(',')[1],
            });
            return next;
        });
    }, []);

    return <div className={'clock'}>
        {renderItem()}
        <AddClockItem onSelect={handleOnSelect} />
    </div>
};

export default Clock;