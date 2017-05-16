import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Container, Header, Left, Icon, Body, Title, Button, Right, Content, Footer, FooterTab } from 'native-base';
import Home from './home'
import weather from './controllers/weather'

export default class Index extends Component {
  render() {  
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>ReactKit</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <Home title="Jimmy" />
          <Text>{this.props.currentTemp}</Text>
        </Content>
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'blue'
  },
  headerBox: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: 'powderblue',
    alignItems: 'center'
  }
});
