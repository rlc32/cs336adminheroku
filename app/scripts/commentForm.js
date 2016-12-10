import React from 'react';
import $ from 'jquery';


module.exports = React.createClass({
  getInitialState: function() {
    return {id: '', name: '', date: '', manner_of_death: '', armed: '',
          age: '', gender: '', race: '', city: '', state: '', 
          signs_of_mental_illness: '', threat_level: '', flee: '', 
          body_camera: ''};
  },
   handleIdChange: function(e) {
    this.setState({id: e.target.value});
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleDateChange: function(e) {
    this.setState({date: e.target.value});
  },
  handleMannerOfDeathChange: function(e) {
    this.setState({manner_of_death: e.target.value});
  },
  handleArmedChange: function(e) {
    this.setState({armed: e.target.value});
  },
  handleAgeChange: function(e) {
    this.setState({age: e.target.value});
  },
  handleGenderChange: function(e) {
    this.setState({gender: e.target.value});
  },
  handleRaceChange: function(e) {
    this.setState({race: e.target.value});
  },
  handleCityChange: function(e) {
    this.setState({city: e.target.value});
  },
  handleStateChange: function(e) {
    this.setState({state: e.target.value});
  },
  handleSignsOfMentalIllnessChange: function(e) {
    this.setState({signs_of_mental_illness: e.target.value});
  },
  handleThreatLevelChange: function(e) {
    this.setState({threat_level: e.target.value});
  },
  handleFleeChange: function(e) {
    this.setState({flee: e.target.value});
  },
  handleBodyCameraChange: function(e) {
    this.setState({body_camera: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var iden = Number(this.state.id);
    console.log(this.state.id);
    var name = this.state.name.trim();
    var date = this.state.date.trim();
    var manner_of_death = this.state.manner_of_death.trim();
    var armed = this.state.armed.trim();
    var age = Number(this.state.age);
    var gender = this.state.gender.trim();
    var race = this.state.race.trim();
    var city = this.state.city.trim();
    var state = this.state.state.trim();
    var signs_of_mental_illness = this.state.signs_of_mental_illness.trim();
    var threat_level = this.state.threat_level.trim();
    var flee = this.state.flee.trim();
    var body_camera = this.state.body_camera.trim();
    if ( !iden || !name || !date || !manner_of_death || !armed || !gender || !race
      || !city || !state || !signs_of_mental_illness || !threat_level ||
      !flee || !body_camera) {
      return;
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({iden: iden, name: name, date: date, manner_of_death: manner_of_death,
          armed: armed, age: age, gender: gender, race: race, city: city,
          state: state, signs_of_mental_illness: signs_of_mental_illness,
          threat_level: threat_level, flee: flee, body_camera: body_camera});
    this.setState({iden: '', name: '', date: '', manner_of_death: '', armed: '',
          age: '', gender: '', race: '', city: '', state: '', 
          signs_of_mental_illness: '', threat_level: '', flee: '', body_camera: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          placeholder="date - yyyy/mm/dd"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <input
          type="text"
          placeholder="manner of death"
          value={this.state.manner_of_death}
          onChange={this.handleMannerOfDeathChange}
        />
        <input
          type="text"
          placeholder="armed"
          value={this.state.armed}
          onChange={this.handleArmedChange}
        />
        <input
          type="text"
          placeholder="Set age"
          value={this.state.age}
          onChange={this.handleAgeChange}
        />
        <input
          type="text"
          placeholder="Set gender"
          value={this.state.gender}
          onChange={this.handleGenderChange}
        />
        <input
          type="text"
          placeholder="Set race"
          value={this.state.race}
          onChange={this.handleRaceChange}
        />
        <input
          type="text"
          placeholder="Set city"
          value={this.state.city}
          onChange={this.handleCityChange}
        />
        <input
          type="text"
          placeholder="Set state"
          value={this.state.state}
          onChange={this.handleStateChange}
        />
        <input
          type="text"
          placeholder="mental illness - boolean"
          value={this.state.signs_of_mental_illness}
          onChange={this.handleSignsOfMentalIllnessChange}
        />
        <input
          type="text"
          placeholder="threat level"
          value={this.state.threat_level}
          onChange={this.handleThreatLevelChange}
        />
        <input
          type="text"
          placeholder="Set flee"
          value={this.state.flee}
          onChange={this.handleFleeChange}
        />
        <input
          type="text"
          placeholder="body camera - boolean"
          value={this.state.body_camera}
          onChange={this.handleBodyCameraChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});