import React from 'react'
import { Component } from 'react'
import '../App.css'
class ClassCompo extends Component {
  state = {
    Name: '',
    Dept: '',
    EmpDeta: [],
  }
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    //    console.log(this.state.Name);
    //    console.log(this.state.Dept);
  }
  clickHandle = (e) => {
    e.preventDefault()
    let newObj = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    }
    this.state.EmpDeta.push(newObj)
    this.setState({ EmpDeta: this.state.EmpDeta })
    console.log(this.state.EmpDeta)
  }
  render() {
    return (
      <>
        <div className="allform">
          <form className="form">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={this.state.Name}
              placeholder="Enter Name"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <label htmlFor="dept">Depatment : </label>
            <input
              type="text"
              id="dept"
              name="Dept"
              value={this.state.Dept}
              placeholder="Enter Dept"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <label htmlFor="rating">Rating : </label>
            <input
              type="number"
              id="rating"
              name="Rating"
              value={this.state.Rating}
              placeholder="Enter Rating"
              required
              onChange={this.changeHandle}
            />
            <br />
            <br />

            <button onClick={this.clickHandle}>Submit</button>
          </form>
        </div>

        <div className='allop'>
          {this.state.EmpDeta.map((item, index) => {
            return (
              <>
                <span>
                  Name :{item.name} || Dept : {item.dept} || Rating :{' '}
                  {item.rating}
                </span>
              </>
            )
          })}
        </div>
      </>
    )
  }
}
export default ClassCompo
