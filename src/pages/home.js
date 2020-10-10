import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import data from "../redux/data.js";

function HomePage(props) {
  const { navigation, contacts, directory, dispatch } = props;

  const { navigate, goBack } = navigation;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <View
      style={styles.container}>
    </View>
  );
}


function mapStateToProps(state) {
  const { contacts, directory } = state;
  return { contacts, directory };
}

export default connect(mapStateToProps)(HomePage)

const styles = StyleSheet.create({
});

/*
<FAB
  style={styles.fab}
  icon="plus"
  onPress={() => navigation.navigate("AddContact")}
/>
*/
