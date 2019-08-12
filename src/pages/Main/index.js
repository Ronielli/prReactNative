import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Form,
  SubmitButton,
  Input,
  List,
  Name,
  Users,
  Avatar,
  Bio,
  ProfileButton,
  ProfileButtonTexto,

} from './styles';
import api from '../../services/api'



export default class Main extends Component {
  state = {
    users: [],
    newUser: '',
    load: false,
  }
  async componentDidMount() {

    const users = await AsyncStorage.getItem('user')

    if (users) {

      this.setState({ users: JSON.parse(users) })
    }
  }
  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem('user', JSON.stringify(users))
    }

  }
  handleAddUser = async () => {
    this.setState({ load: true })
    const { users, newUser } = this.state
    const response = await api.get(`users/${newUser}`)

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url

    }
    this.setState({
      users: [...users, data],
      newUser: "",
      load: false
    })
    Keyboard.dismiss()


  }

  handleNavigate = user => {
    const { navigation } = this.props
    navigation.navigate('User', { user })
  }
  render() {
    const { users, newUser, load } = this.state

    return (
      <Container>

        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="adicionar Usuario"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}

          />
          <SubmitButton load={load} onPress={this.handleAddUser}>
            {load ? <ActivityIndicator /> : <Icon name="add" size={20} color="#fff" />}

          </SubmitButton>

        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <Users>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton>
                <ProfileButtonTexto onPress={() => this.handleNavigate(item)}>
                  Ver Perfil
                </ProfileButtonTexto>
              </ProfileButton>
            </Users>
          )}
        />
      </Container>

    );
  }
}
Main.navigationOptions = {
  title: 'Usuarios'
}
