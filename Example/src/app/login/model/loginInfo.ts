import * as yup from 'yup';

export const initialValues = {
    email: {
        id: 'email',
        value: '',
        label: '이메일',
        type: 'text'
    },
    password: {
        id: 'password',
        value: '',
        label: '비밀번호',
        type: 'password'
    },
}

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('이메일 형식이 아닙니다.')
        .required('이메일은 필수 입력이에요.'),
    password: yup
        .string()
        .min(8, '비밀번호는 8자 이상 입력해주세요.')
        .required('비밀번호는 필수 입력이에요.'),
});
