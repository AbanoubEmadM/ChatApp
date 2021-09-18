import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LognForm'
const App = () => {
    if(!localStorage.getItem('username'))return <LoginForm />
    return (
        <ChatEngine
        height="100vh"
        projectID="a768ad9f-827e-4df3-b230-07bf948b9451"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
}

export default App;
