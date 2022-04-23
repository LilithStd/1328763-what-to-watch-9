import {useRef, FormEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/reduser';
import {loginAction} from '../../store/api-action';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../const';
import {Footer} from '../../components/footer/footer';
import {Logo} from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {passwordTemplate, loginTemplate} from '../../utils';


function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [isEmptyFormError, setIsEmptyFormError] = useState<boolean>(false);
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  });

  const loginHandler = () => {
    if(!(loginTemplate.test(String(loginRef.current?.value).toLocaleLowerCase()))) {
      setIsLoginError(true);
      setIsShowMessage(true);
    }else{setIsLoginError(false);}
  };

  const passwordHandler = () => {
    if(!(passwordTemplate.test(String(passwordRef.current?.value).toLocaleLowerCase()))) {
      setIsPasswordError(true);
      setIsShowMessage(true);
    }else{setIsPasswordError(false);}
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Main);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(isLoginError || isPasswordError) {
      setIsEmptyFormError(false);
    }

    if (loginRef.current !== null && passwordRef.current !== null) {
      if(loginRef.current.value !== '' && passwordRef.current.value !== '') {
        (!isLoginError && !isPasswordError) && onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      }else {
        setIsShowMessage(true);
        setIsEmptyFormError(true);
      }
    }
  };

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {(isLoginError && isShowMessage) ? <div className="sign-in__message"><p>Поле email должно содержать корректные данные в виде - example@mail.com</p></div>: ''}
          {(isPasswordError && isShowMessage) ? <div className="sign-in__message"><p>Пароль должен содержать цифры и английские буквы</p></div>: ''}
          {(isEmptyFormError && isShowMessage) ? <div className="sign-in__message"><p>Заполните все поля!</p></div>: ''}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} onChange={loginHandler}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} onChange={passwordHandler}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export {SignIn};
