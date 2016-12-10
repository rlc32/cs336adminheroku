import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import { API_URL } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {id: '', name: '', date: '', manner_of_death: '', armed: '',
          age: '', gender: '', race: '', city: '', state: '', 
          signs_of_mental_illness: '', threat_level: '', flee: '', 
          body_camera: ''};
    },
    componentDidMount: function() {
        this.loadData();
    },
    componentDidUpdate: function(prevProps) {
        if (this.props.params.id != prevProps.params.id) {
            this.loadData();
        }
    },
    loadData: function() {
        $.ajax(API_URL + "/" + this.props.params.id) .done(function(comments) {
            this.setState(comments[0]);
        }.bind(this));
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
    contextTypes: {
        router: React.PropTypes.object
    },
    handleUpdate: function() {
        var updatedComment = {
            id: Number(this.state.id),
            name: this.state.name.trim(),
            date: this.state.date.trim(),
            manner_of_death: this.state.manner_of_death.trim(),
            armed: this.state.armed.trim(),
            age: Number(this.state.age),
            gender: this.state.gender.trim(),
            race: this.state.race.trim(),
            city: this.state.city.trim(),
            state: this.state.state.trim(),
            signs_of_mental_illness: this.state.signs_of_mental_illness.trim(),
            threat_level: this.state.threat_level.trim(),
            flee: this.state.flee.trim(),
            body_camera: this.state.body_camera.trim()
        }
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            dataType: 'json',
            type: 'PUT',
            contentType:'application/json',
            data: JSON.stringify(updatedComment)
        })
         .done(function(comments){
             this.context.router.push('/');
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    handleDelete: function() {
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            type: 'DELETE',
        })
         .done(function(comments){
             this.context.router.push('/');
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    render: function() {
        return (
            <div>
                <form className="commentForm">
                    <h1>Edit incident of: {this.state.name}</h1>
                    <p>{this.state.name} was killed on {this.state.date}. The victim was {this.state.manner_of_death} by police. The victim was armed with a {this.state.armed}.</p>
                    <p>The victim was {this.state.age}. The victim gender was {this.state.gender}. The victims ethnicity was {this.state.race}. This took place in {this.state.city} {this.state.state}. </p>
                    <p>Was there signs of mental illness: {this.state.signs_of_mental_illness}. What was the victim's threat level: {this.state.threat_level}. </p>
                    <p>Was the victim fleeing: {this.state.flee}. Did the Officer's responding have body cameras: {this.state.body_camera}.</p>
                </form>
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
        <button type="button" onClick={this.handleUpdate}>Update</button>
        <button type="button" onClick={this.handleDelete}>Delete</button>
      </form>
      <Link to='/'>Back</Link>
    </div>
        );
    }
});