import React, { FC } from 'react';
import { ContatosForm } from './Form';
import { ContatosList } from './List';
import { useContatosLogic } from './useContatosLogic';
import { Contato } from './contato';

export const Contatos: FC = () => {
    const { addContato, contato, contatoList, removeContato } =
        useContatosLogic();

    const handleFormSubmit = (contato: Contato) => {
        addContato(contato);
    };

    return (
        <>
            <ContatosForm
                submeterFormulario={handleFormSubmit}
                contato={contato}
            />
            <ContatosList list={contatoList} onDelete={removeContato} />
        </>
    );
};
