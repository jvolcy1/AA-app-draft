import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Button from 'react-bootstrap/Button';
import data from "../redux/data.js";

function SelectFlightPage(props) {
  const { navigation, dispatch, dummyData } = props;

  const { navigate, goBack } = navigation;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  }

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://flight-engine-1887.herokuapp.com/flights?date=2020-01-01")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.slice(0,7));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <View>
      <ul>
        {items.map(item => (
          <li key={item.flightNumber}>
            {item.origin.city} ({item.origin.code}) to  {item.destination.city} ({item.destination.code})
          </li>
        ))}
      </ul>
      <Button onClick={() => { navigate("CheckBags"); }}>Check Bags</Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { dummyData } = state;
  return { dummyData };
}

export default connect(mapStateToProps)(SelectFlightPage)

const styles = StyleSheet.create({
});
