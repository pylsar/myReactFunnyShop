import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import PersonalPage from '../../components/PersonalPage/PersonalPage'
import { actions } from '../../actions/actions'
import closeIcon from '../../assets/img/close.svg'
import './Auth.scss'

const initialState = {
    // isVisible: false,
    // isRegestered: false,
    // isPersonal: false,
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

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            this.props.onRegestered()
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
                {!this.props.isRegestered ? <span onClick={this.props.onModalToggle}>Авторизация</span> : <span onClick={this.props.onModalToggle}>{`${this.state.firstname} ${this.state.lastname}`}</span>}
                {this.props.isVisible &&
                <Fragment>
                    {/* добавляем слой для затемнения */}
                    <div className="auth__modalOverlay" onClick={this.props.onModalToggle}></div>
                    {/* блок с авторизацией, выводим авторизацию или персональную страницу если рега есть */}
                    <div className="auth__form">
                    { 
                    !this.props.isPersonal ?
                        <Fragment>
                            <h3>Авторизация</h3>
                            <img src={closeIcon} alt="closeBtn" onClick={this.props.onModalToggle} />
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
                                    <label htmlFor="email">Email</label>
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
                                <button type="submit" onClick={this.handleSubmit}>Авторизоваться</button>
                            </form>
                        </Fragment>
                    : 
                        <Fragment>
                            <h3>Персональная страница</h3>
                            <img src={closeIcon} alt="closeBtn" onClick={this.props.onModalToggle} />
                            <PersonalPage firstname={this.state.firstname}/> 
                        </Fragment>    
                    }
                   </div>
                </Fragment>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        //тут наши стейты
        isVisible: state.auths.isVisible,   // берётся из rootReducer
        isRegestered: state.auths.isRegestered,
        isPersonal: state.auths.isPersonal
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        onModalToggle(){
        dispatch(actions.modalToggle()) //actions во множетвенном числе см импорты
      },
        onRegestered(){
            dispatch(actions.regestered())
        }
    }
  }

  Auth.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    isRegestered: PropTypes.bool.isRequired,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    firstnameError: PropTypes.string,
    lastnameError: PropTypes.string,
    emailError: PropTypes.string,
    passwodError: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)