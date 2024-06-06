import './ColorConverter.css';

import { ChangeEvent, useState } from 'react';
import { ERROR, MAX_LENGTH, validateHexColor } from '../../helpers';

export function ColorConverter(): JSX.Element {
    const [color, setColor] = useState<string>('#222329');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        event.preventDefault();
        setColor(value);
    }

    return <div
        className="converter"
        style={{ backgroundColor: validateHexColor(color) }}>

        <form className="converterForm">
            <input className="converterInput"
                   name="hex"
                   type="text"
                   value={color}
                   onChange={handleChange}
                   maxLength={MAX_LENGTH}
            />
        </form>

        <p
            className="converterBackground"
            style={{ color: validateHexColor(color) !== ERROR ? '#ffffff' : '#ff0000' }}
        >
            {validateHexColor(color)}
        </p>
    </div>
}