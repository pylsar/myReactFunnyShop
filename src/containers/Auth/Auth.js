import React from 'react'
import {connect} from 'react-redux'
import { actions } from '../../actions/actions'

import './Auth.scss'

const initialState = {
    // isVisible: false,
    isRegestered: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    firstnameError: '',
    lastnameError: '',
    emailError: '',
    passwodError: ''
}

class Auth extends React.Component {

    state = initialState


    validate = () => {
        let firstnameError = "";
        let lastnameError = "";
        let emailError = "";
        let passwordError = "";
    // поле имя
        if (!this.state.firstname) {
          firstnameError = "не может быть пустым"
        }
    // поле фамилия
        if (!this.state.lastname) {
            lastnameError = "не может быть пустым"
          }
    // поле email
        if (!this.state.email.includes("@")) {
          emailError = "неверное значение"
        }
    // поле password
        if (this.state.password.length < 10) {
          passwordError = "должно быть не меньше 10 символов"
        }
    
        if (emailError || firstnameError || lastnameError|| passwordError) {
          this.setState({
            emailError: emailError,
            firstnameError: firstnameError,
            lastnameError: lastnameError,
            passwordError: passwordError
          });
          return false;
        }
        return true; // если нет ошибок
      };

    // handleModal = () => {
    //     this.setState({
    //         isVisible: !this.state.isVisible
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        this.setState({
            initialState: initialState, // очищаем если норм
            isRegestered: true,  // для имени в углу экрана
            isVisible: false // закрываем если рега норм прошла
        }); 
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="auth">
                {!this.state.isRegestered ? <span onClick={this.props.onModalToggle}>Авторизация</span> : <span onClick={this.props.onModalToggle}>{`${this.props.firstname} ${this.props.lastname}`}</span>}
                {
                this.props.isVisible &&
                 <div className="auth__form">
                    <h3>Авторизация</h3>
                    <form onSubmit={this.handleSubmit} className="auth__form__box">
                        <div>
                            <label htmlFor="firstname">Имя</label>
                            <input 
                             className={this.state.firstnameError ? 'auth__form__box__input auth__form__box__input--error': 'auth__form__box__input'}
                             type="text" 
                             id="firstname"
                             onChange={this.handleChange}
                             name="firstname"
                             value={this.state.value}
                             placeholder="firstname"
                            />
                            <div className="auth__form__box--error">{this.state.firstnameError}</div>
                        </div>
                        <div>
                            <label htmlFor="lastname">Фамилия</label>
                            <input 
                             className={this.state.firstnameError ? 'auth__form__box__input auth__form__box__input--error': 'auth__form__box__input'}
                             type="text"
                             id="lastname"
                             onChange={this.handleChange}
                             name="lastname"
                             value={this.state.value}
                             placeholder="lastname"
                            />
                            <div className="auth__form__box--error">{this.state.lastnameError}</div>
                        </div>
                        <div>
                            <label htmlFor="email">Имя</label>
                            <input 
                             className={this.state.firstnameError ? 'auth__form__box__input auth__form__box__input--error': 'auth__form__box__input'}
                             type="text"
                             id="email"
                             onChange={this.handleChange}
                             name="email"
                             value={this.state.value}
                             placeholder="email"
                            />
                            <div className="auth__form__box--error">{this.state.emailError}</div>
                        </div>
                        <div>
                            <label htmlFor="password">Пароль</label>
                            <input 
                             className={this.state.firstnameError ? 'auth__form__box__input auth__form__box__input--error': 'auth__form__box__input'}
                             type="password" 
                             id="password" 
                             onChange={this.handleChange} 
                             name="password" 
                             value={this.state.value} 
                             placeholder="password"
                            />
                            <div className="auth__form__box--error">{this.state.passwordError}</div>
                        </div>
                        <button type="submit">Авторизоваться</button>
                    </form>
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isVisible: state.auths.isVisible   // берётся из rootReducer
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        onModalToggle(){
        dispatch(actions.modalToggle()) //actions во множетвенном числе см импорты
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Auth)