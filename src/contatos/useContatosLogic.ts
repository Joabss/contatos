import { useState } from 'react';
import { Contato } from './contato';
import { v4 as uuid } from 'uuid';

export const useContatosLogic = () => {
    const newContato: Contato = { idade: '', nome: '' };
    const [contatoList, setContatoList] = useState<Contato[]>([]);
    const [contato, setContato] = useState<Contato>(newContato);

    const addContato = (contato: Contato) => {
        contato.id = uuid();
        const lista = [...contatoList, contato];
        setContatoList(lista);
        setContato(newContato);
    };

    const removeContato = (contato: Contato) => {
        const id = contato.id;
        if (id) {
            const novaLista = contatoList.filter((c) => c.id !== id);
            setContatoList(novaLista);
        }
    };

    return {
        contato,
        addContato,
        contatoList,
        removeContato,
    };
};
