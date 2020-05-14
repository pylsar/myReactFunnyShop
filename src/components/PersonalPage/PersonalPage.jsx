import React from 'react'
import PropTypes from 'prop-types'

const PersonalPage = ({ firstname }) => {
    return (
        <div>
            <p>Добро пожаловать в личный кабинет, {firstname}</p>
        </div>
    )
}

PersonalPage.propTypes = {
    firstname: PropTypes.string.isRequired,
  }

export default PersonalPage
