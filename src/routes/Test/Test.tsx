import {memo, FC} from 'react';

interface Props {}

const Test:FC<Props> = () => {
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
};

export default memo(Test);