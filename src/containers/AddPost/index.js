import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import Button from 'components/Button';
import { addPost } from 'actions/post';

import './style.css';

class AddPost extends React.Component {
  state = {
    header: {
      text: '',
      minCharacter: 10,
      isError: false
    },
    body: {
      text: '',
      minCharacter: 40,
      isError: false
    },
    shouldAddButtonDisabled: true
  }

  handleAddAnotherPostClick = () => {
    this.refreshPage();
  }

  refreshPage = () => {
    window.location.reload();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: {
        ...this.state[name],
        text: value.trim()
      }
    }, () => {
      this.isValidInput(name)
    });
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const headerText = this.state.header.text;
    const bodyText = this.state.body.text;

    this.props.addPost(headerText, bodyText)
  }

  isValidInput = debounce((inputName) => {
    if(this.state[inputName].text.length < this.state[inputName].minCharacter) {
      this.setState({
        shouldAddButtonDisabled: true,
        [inputName]: {
          ...this.state[inputName],
          isError: true
        }
      })
    } else {
      this.setState({
        shouldAddButtonDisabled: false,
        [inputName]: {
          ...this.state[inputName],
          isError: false,
        }
      })
    }
  }, 300)

  render() {
    const { header, body, shouldAddButtonDisabled } = this.state;
    const { isLoading, isAddPostSuccess } = this.props;
    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmitForm}>
          <div className="form-item">
            <label>
              Header: 
              <input 
                name="header" 
                required 
                type="text" 
                maxLength={header.maxCharacter} 
                onBlur={this.handleChange} 
                onChange={this.handleChange} />
            </label>
            {header.isError && <p className="form-item-error">Header must be at least {header.minCharacter} character</p>}
          </div>
          <div className="form-item">
            <p>Body:</p>
            <textarea 
              name="body" 
              required 
              type="text" 
              maxLength={body.maxCharacter} 
              onBlur={this.handleChange} 
              onChange={this.handleChange} />
            {body.isError && <p className="form-item-error">Body must be at least {body.minCharacter} character</p>}
          </div>
          {isAddPostSuccess
            ? <div>
                <p>Your post added successfully</p>
                <Button type="redirect" buttonText="Add another" onClick={this.handleAddAnotherPostClick} />
              </div>
            : isLoading
              ? <p>Adding your post...</p>
              : <Button type="add" buttonText="Add Post" disabled={shouldAddButtonDisabled} />
          }
        </form>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isLoading: state.post.isLoading,
    isAddPostSuccess: state.post.isAddPostSuccess
  }),
  {
    addPost
  }
)(AddPost);
