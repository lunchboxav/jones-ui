import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import clients from './pages/clients';
import files from './pages/files';
import home from './pages/home';
import playlists from './pages/playlists';
import MainMenu from './components/MainMenu';
import styled from 'styled-components'
import { Flex, Box, Heading, Text } from 'rebass'

const MenuContainer = styled(Box)({
  minHeight: '100vh'
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Flex>
          <MenuContainer
            p={3}
            width={1/6}
            color='green'
            bg='lavender'>
              <Heading textAlign='left' mb={-1} p={3}>Jones</Heading>
              <Text textAlign='left' px={3} mb={4}>Digital Signage CMS</Text>
              <MainMenu />
          </MenuContainer>
          <Box
            p={3}
            width={5/6}
            color='green'
            bg='white'>
            <div>
              <Route exact path="/" component={home} />
              <Route path="/playlists" component={playlists} />
              <Route path="/files" component={files} />
              <Route path="/clients" component={clients} />
            </div>
          </Box>
        </Flex>
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>*/}
        </div>
      </Router>
    );
  }
}

export default App;
