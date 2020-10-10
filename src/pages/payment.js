import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import data from "../redux/data.js";

function BoilerPage(props) {
  const { navigation, dispatch, dummyData } = props;

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
  const { dummyData } = state;
  return { dummyData };
}

export default connect(mapStateToProps)(BoilerPage)

const styles = StyleSheet.create({
});
