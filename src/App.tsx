import React, { FC } from 'react';
import { Contatos } from './contatos';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: FC = () => {
    return (
        <div className="App">
            <Contatos />
        </div>
    );
};

export default App;
