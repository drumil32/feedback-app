import React from 'react'
import PropTypes from 'prop-types';

function Button({children,type,version,isDisabled}) {
    return (
        <button type={type} isDisabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}
Button.defaultProps = {
    version : 'primary',
    isDisabled : false,
    type : 'button',
}

Button.prototype = {
    children : PropTypes.node.isRequired,
    version : PropTypes.string.isRequired,
    isDisabled : PropTypes.bool.isRequired,
    type : PropTypes.string.isRequired,
}
export default Button;