import React, {useState} from 'react';

const InputForCargo = () => {
    const maxLength = 4000;
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const inputText = event.target.value;
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };

    const charactersLeft = text.length;

    return (
        <div>
      <input
          value={text}
          onChange={handleChange}
          style={{ width: '100%', padding: '5px 0 130px 5px' , border: ' 1px solid#C4C4C4', borderRadius: '7px' }}
          placeholder='Укажіть інформацію про груз, що перевозите...'
      />
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
                    <div style={{ fontSize: '12px' , color: '#C4C4C4' }}>{charactersLeft} / {maxLength}</div>
                </div>
            </div>
        </div>
    );
};

export default InputForCargo;
