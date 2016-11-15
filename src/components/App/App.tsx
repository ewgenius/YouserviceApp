import * as React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
import { Container, Header, Title, Content, Footer, Button, Icon, FooterTab, Badge } from 'native-base'

interface AppState {
  selected?: number
}

export class App extends Component<any, AppState> {
  constructor() {
    super()

    this.state = {
      selected: 0
    }
  }

  select(index: number) {
    this.setState({ selected: index })
  }

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
          <Button capitalize>kljkmlkm</Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button active={this.state.selected === 0} onPress={this.select.bind(this, 0)}>
              <Badge>2</Badge>
              Apps
              <Icon name='ios-apps-outline' />
            </Button>
            <Button active={this.state.selected === 1} onPress={this.select.bind(this, 1)}>
              Camera
              <Icon name='ios-camera-outline' />
            </Button>
            <Button active={this.state.selected === 2} onPress={this.select.bind(this, 2)}>
              Navigate
              <Icon name='ios-compass' />
            </Button>
            <Button active={this.state.selected === 3} onPress={this.select.bind(this, 3)}>
              Contact
              <Icon name='ios-contact-outline' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}