import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditCarPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.car
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateCar(this.state.formData);
  };

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h3 style={{ fontStyle: 'italic' }}>EDIT  CAR</h3>
        <form className="form-group-c" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="row">
            <div class="col"><label>Car Make (required)</label>
              <input
                className="form-control"
                name="carMake"
                value={this.state.formData.carMake}
                onChange={this.handleChange}
                required
              /></div>

            <div class="col"><label>Car Model (required)</label>
              <input
                className="form-control"
                name="carModel"
                value={this.state.formData.carModel}
                onChange={this.handleChange}
                required
              /></div>

            <div class="col"><label> Photo </label>
              <input
                className="form-control"
                name="photo"
                value={this.state.formData.photo}
                onChange={this.handleChange}
              /></div>
          </div>

          <div class="row">
            <div class="col"><label> Brand Year </label>
              <input
                className="form-control"
                name="year"
                value={this.state.formData.year}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Milage </label>
              <input
                className="form-control"
                name="odometer"
                value={this.state.formData.odometer}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Transmission </label>
              <input
                className="form-control"
                name="transmission"
                value={this.state.formData.transmission}
                onChange={this.handleChange}
              /></div>
          </div>

          <div class="row">
            <div class="col"><label> Fuel Efficiency </label>
              <input
                className="form-control"
                name="fuel"
                value={this.state.formData.fuel}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> (City/Hwy) </label>
              <input
                className="form-control"
                name="city"
                value={this.state.formData.city}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Car Door </label>
              <input
                className="form-control"
                name="door"
                value={this.state.formData.door}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label>Car Color</label>
              <input
                className="form-control"
                name="color"
                value={this.state.formData.color}
                onChange={this.handleChange}
              /></div>
          </div>

          <div class="row">
            <div class="col"><label> Drive Unit </label>
              <input
                className="form-control"
                name="drive"
                value={this.state.formData.drive}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Body </label>
              <input
                className="form-control"
                name="body"
                value={this.state.formData.body}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Daily UI </label>
              <input
                className="form-control"
                name="daily"
                value={this.state.formData.daily}
                onChange={this.handleChange}
              /></div>

            <div class="col"><label> Total Price </label>
              <input
                className="form-control"
                name="price"
                value={this.state.formData.price}
                onChange={this.handleChange}
              /></div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="btn btn-xs"
              disabled={this.state.invalidForm}
              style={{ fontSize: '15px', color: '#007BFF' }}
            >
              SAVE CAR
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
          </div>
        </form>
      </>
    );
  }
}
export default EditCarPage;