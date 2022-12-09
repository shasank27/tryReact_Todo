import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(val) {
    if (val !== "") {
      const newItem = {
        id: Date.now(),
        value: val,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      });
    }
  }

  delete(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  handleChange(id) {
    const list = [...this.state.list];
    const updatedList = list.map(item =>
      item.id === id ? !item.isDone : item.isDone,
    );
    this.setState({
      list: updatedList,
    });
  }

  updateState(val) {
    this.setState({
      newItem: val,
    });
  }

  render() {
    return (
      <div className="firstone">
        <span class="App">
          <img src={logo} width="100" height="100" className="logo" />
          <h1 className="app-title">Todo App</h1>
          <div className="container">
            Add an Item
            <br />
            <br />
            <input
              type="text"
              className="input-text"
              placeholder="Write a work"
              value={this.state.newItem}
              onChange={e => this.updateState(e.target.value)}
            />
            <button
              className="add-btn"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
            >
              ADD TODO
            </button>
            <br />
            <br />
            <div className="list">
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                      <input
                        type="checkbox"
                        name="isDone"
                        defaultChecked={item.isDone}
                        // onChange={() => this.handleChange(item.id)}
                      />
                      {item.value}
                      <button
                        className="btn delete"
                        onClick={() => {
                          this.delete(item.id);
                        }}
                      >
                        DELETE
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
export default App;
