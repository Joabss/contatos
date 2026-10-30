import React from 'react';

import { Contato, validationScheme } from './contato';
import { TextField, Button, Grid } from '@mui/material';

import { useFormik, FormikHelpers } from 'formik';

import './index.css';

interface ContatosFormProps {
    contato: Contato;
    submeterFormulario: (contato: Contato) => void;
}

export const ContatosForm: React.FC<ContatosFormProps> = ({
    contato,
    submeterFormulario,
}: ContatosFormProps) => {
    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato);
        helper.resetForm();
    };

    const formik = useFormik<Contato>({
        onSubmit,
        initialValues: { ...contato },
        validationSchema: validationScheme,
        validateOnChange: false,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        name="nome"
                        label="nome"
                        id="inputNome"
                        value={formik.values.nome}
                        onChange={formik.handleChange}
                        className="full-width"
                    />
                    <span className="error-msg ">{formik.errors.nome}</span>
                </Grid>
                <br />
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        name="idade"
                        label="idade"
                        id="inputIdade"
                        value={formik.values.idade}
                        onChange={formik.handleChange}
                        className="full-width"
                    />
                    <span className="error-msg">{formik.errors.idade}</span>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="full-width"
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
