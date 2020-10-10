import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import data from "../redux/data.js";

function FindFlightsPage(props) {
  const { navigation, dispatch, dummyData } = props;

  const { navigate, goBack } = navigation;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <View
      style={styles.container}>

      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Origin</Form.Label>
          <Form.Control type="name" placeholder="IE: Dallas" />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="name" placeholder="IE: Chicago" />
        </Form.Group>

      </Form>

      <Button onClick={() => {
        navigate("SelectFlight")
      }}>
        Find
      </Button>

    </View>
  );
}

function mapStateToProps(state) {
  const { dummyData } = state;
  return { dummyData };
}

export default connect(mapStateToProps)(FindFlightsPage)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "20%",
    marginTop: "5%"
  }
});
