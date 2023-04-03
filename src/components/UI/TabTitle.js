import React from 'react';

const TabTitle = ({text, selected, setSelected, state}) => {
    return (
        <li
            onClick={() => setSelected(state)}
            style={{
                border: selected === state ? '1px solid black' : '',
                borderRadius: selected === state ? '68px' : '',
                padding: selected === state ? '8px 20px' : '',
            }}
        >{text}</li>
    );
};

export default TabTitle;