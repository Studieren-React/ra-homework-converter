import styles from './ColorConverter.module.css';

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
        className={styles.converter}
        style={{ backgroundColor: validateHexColor(color) }}>

        <form className={styles.converterForm}>
            <input className={styles.converterInput}
                   name="hex"
                   type="text"
                   value={color}
                   onChange={handleChange}
                   maxLength={MAX_LENGTH}
            />
        </form>

        <p
            className={styles.converterBackground}
            style={{ color: validateHexColor(color) !== ERROR ? '#ffffff' : '#ff0000' }}
        >
            {validateHexColor(color)}
        </p>
    </div>
}