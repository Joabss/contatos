import React from 'react';
import { Contato } from './contato';
import {
    Avatar,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

interface ContatoListProps {
    list: Contato[];
    onDelete: (contato: Contato) => void;
}

export const ContatosList: React.FC<ContatoListProps> = ({
    list,
    onDelete,
}: ContatoListProps) => {
    return (
        <Grid>
            <List>
                {list.map((contato: Contato) => {
                    return (
                        <ListItem
                            key={contato.id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    onClick={() => onDelete(contato)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={contato.nome}
                                secondary={`Idade: ${contato.idade}`}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    );
};
