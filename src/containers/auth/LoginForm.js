import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, intializeForm } from '../../modules/auth';
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
    }));

    // 인풋 변경 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    // 폼 등록 핸들러
    const onSubmit = e => {
        e.preventDefault();
    }

    // 컴포넌트가 최초 렌더링 될 때 form 을 초기화
    useEffect(() => {
        dispatch(intializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm 
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default LoginForm;