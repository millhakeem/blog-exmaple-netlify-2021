import React from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import FormStyles from '../styles/FormStyles';

const SignupForm = props => {
    
    const { values, captureInput, SubmitForm, isLoading, message, error } = useForm()

    return(
        <Container>
            <FormStyles onSubmit={SubmitForm}>
                <input
                    disabled={isLoading} 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={captureInput}
                />
                <input
                    disabled={isLoading} 
                    type="garbage"
                    name="garbage"
                    value={values.garbage}
                    className="garbage"
                    onChange={captureInput}
                />
                <button disabled={isLoading} type="submit">
                    {isLoading
                        ? 'Отправляю запрос'
                        : 'Отправить'
                    }
                </button>
            </FormStyles>
            {error ? <span className="formError">Ошибка: {error}</span> : '' }
            {message ? <span className="formMessage">{message}</span> : '' }
        </Container>
    )
};

export default SignupForm;

const Container = styled.div``;
