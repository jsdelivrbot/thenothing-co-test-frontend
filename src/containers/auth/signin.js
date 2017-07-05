import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authorization';

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signinUser({ email, password });
  }

  renderField = ({input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" {...input} placeholder={label} type={type} />
      { touched && error && <div className="error">{error}</div> }
    </div>
  )

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="email" type="text"
          component={this.renderField} label="Email" validate={[required, email]} />
        <Field name="password" type="password"
          component={this.renderField} label="Password" validate={required}/>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin'
})(Signin)

export default connect(mapStateToProps, actions)(Signin);
