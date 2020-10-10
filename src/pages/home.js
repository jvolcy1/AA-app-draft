import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar, FAB, IconButton, Provider, Portal, Modal, Avatar } from 'react-native-paper';
import addContact from "../redux/actions/addContact";
import data from "../redux/data.js";

function HomePage(props) {
  const { navigation, contacts, directory, dispatch } = props;

  const { navigate, goBack } = navigation;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  }

  const renderContact = (contact) => {
    let n = Math.ceil(Math.random() * 5);
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigate("Contact", { id: contact.item.id })}>
        <View style={{flex:1, flexDirection: "row"}}>
          { contact.item.favorite &&
            <Avatar.Icon icon="star" size={24} backgroundColor="blue" style={{marginRight: 16, marginLeft: -16}}/>
          }
          { n == 0 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot1.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          { n == 1 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot2.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          { n == 2 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot3.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          { n == 3 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot4.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          { n == 4 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot5.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          { n == 5 &&
            <Avatar.Image size={36} icon="account" source={require("../../assets/headshot1.jpg")} style={{backgroundColor: "blue", marginRight: 16}} />
          }
          <View style={{flexDirection: "column"}}>
            <Text style={styles.title}>{contact.item.name} [{contact.item.organization}]</Text>
            <Text style={{marginTop: 12, fontSize: 12}}>{contact.item.role}</Text>
          </View>
          { contact.item.directory &&
            <IconButton
              size={16}
              icon="plus"
              color="white"
              style={{backgroundColor: "blue", position: "absolute", right: 0, top: -8}}
              onPress={() => {
                dispatch(addContact(contact.item.id, contact.item.name, contact.item.role, contact.item.organization));
                navigate("Contact", { id: contact.item.id});
              }}/>
          }
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={styles.container}>
      <Appbar.Header
        style={styles.appbar}>
        <View style={{flexDirection: "row", width: "95%"}}>
          <Appbar.Action style={{paddingTop: 16}} icon="menu" color="white"/>
          <Appbar.Content
            titleStyle={styles.appbarTitle}
            title="Citi Notes"
          />
          <Appbar.Action icon="account" color="white" style={{paddingTop: 16}}/>
        </View>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Appbar.Header>
      { searchQuery !== "" &&
        <FlatList
          data={contacts.filter(contact => contact.name.startsWith(searchQuery)).concat(directory.filter(contact => contact.name.startsWith(searchQuery)))}
          renderItem={renderContact}
          keyExtractor={contact => contact.id}
        />
      }
      { searchQuery === "" &&
        <FlatList
          data={contacts.filter(contact => contact.name.startsWith(searchQuery))}
          renderItem={renderContact}
          keyExtractor={contact => contact.id}
        />
      }
    </View>
  );
}


function mapStateToProps(state) {
  const { contacts, directory } = state;
  return { contacts, directory };
}

export default connect(mapStateToProps)(HomePage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  appbar: {
    backgroundColor: "blue",
    flexDirection: "column",
    marginVertical: 32,
    height: 120
  },
  appbarTitle: {
    fontSize: 24,
    marginVertical: 16,
    marginLeft: 64
  },
  searchbar: {
    width: "90%"
  },
  item: {
    padding: 20,
    marginVertical: 0,
    borderBottomColor: "grey",
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  title: {
    color: "black",
    fontSize: 16,
  },
  fab: {
    backgroundColor: "blue",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
});

/*
<FAB
  style={styles.fab}
  icon="plus"
  onPress={() => navigation.navigate("AddContact")}
/>
*/
