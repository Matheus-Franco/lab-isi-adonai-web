import React, { useState } from 'react';
import * as S from './styles';

import LabelInput from '../../../components/LabelInput';
import Button from '../../../components/Button';
import HeaderAdmin from '../../../components/HeaderAdmin';
import api from '../../../services/api';

const NewOffer: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [yearModel, setYearModel] = useState<string>('');

    const handleCreateNewOffer = async () => {
        const response = await api.post('offers', {
            title,
            description,
            price,
            year_model: yearModel
        });

        if (response.status === 200) {
            setTitle("")
            setDescription("")
            setYearModel("")
            setPrice("")
        }
    }

    return (
        <>
            <HeaderAdmin />
            <S.Container>
                <S.Title>
                    <h1>Registre uma nova oferta</h1>
                </S.Title>

                <S.Form>
                    <LabelInput 
                        fieldIsRequired 
                        label="Titulo do anúncio" 
                        placeholder="asdf"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />

                    <div className="textarea">
                        <p>* Descrição</p>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <LabelInput
                        fieldIsRequired
                        label="Valor total"
                        placeholder="asdf"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <LabelInput 
                        fieldIsRequired 
                        label="Ano do Modelo" 
                        placeholder="asdf" 
                        value={yearModel}
                        onChange={(e) => setYearModel(e.target.value)}
                    />

                    <Button onClick={handleCreateNewOffer}>
                        Enviar nova oferta
                    </Button>
                </S.Form>
            </S.Container>
        </>
    )
}

export default NewOffer;