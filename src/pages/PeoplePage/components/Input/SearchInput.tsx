import React, { ReactPropTypes } from 'react';

export class SearchInput extends React.Component {
  state = {
    title: '',
  };

  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submitHandler = (event: any) => {
    event.preventDefault();

    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    this.setState({ title: '' });
  };
  changeInputHandler = (event: any) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <h2>Form Post</h2>
          <label>Заголовок поста</label>
          <input
            type='text'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button type='submit'>Создать</button>
      </form>
    );
  }
}
