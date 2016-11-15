import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Header, Title, Content, Footer, Button, Icon, FooterTab, Badge } from 'native-base'

export default class YouserviceApp extends Component {
  render() {
    return (
      <Container> 
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>
          
          <Title>Header</Title>
          
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>

        <Content>
          <Button capitalize>test</Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Badge>2</Badge>
              Apps
              <Icon name='ios-apps-outline' />
            </Button>
            <Button>
              Camera
              <Icon name='ios-camera-outline' />
            </Button>
            <Button active>
              Navigate
              <Icon name='ios-compass' />
            </Button>
            <Button>
              Contact
              <Icon name='ios-contact-outline' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}