import React from 'react';
import {connect} from 'react-redux';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const SharaChatbot =  (props) => {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    floatingStyle : {
        right: '0',
        bottom: '0'
    },
    avatarStyle: {
        background: 'linear-gradient(45deg, black, transparent)'
    }
  };

  const steps = [
      {
        id: "Greet",
        message: `Hello `+ props.user.user.username.toUpperCase() +`, Welcome to our shop`,
        trigger: "Ask Name"
      },
      {
        id: "Ask Name",
        message: "Please type your name!",
        trigger: "Waiting user input for name"
      },
      {
        id: "Waiting user input for name",
        user: true,
        trigger: "Glad to know you"
      },
      {
        id: "Glad to know you",
        message: "Hi {previousValue}, Glad to know you !!",
        trigger: "Done"
      },
      {
        id: "Done",
        message: "Have a great day !!",
        end: true
      }
  ];

  const theme = {
      background: "white",
      fontFamily: "Arial, Helvetica, sans-serif",
      headerBgColor: "black",
      headerFontColor: "white",
      headerFontSize: "25px",
      botBubbleColor: "beige",
      botFontColor: "black",
      userBubbleColor: "black",
      userFontColor: "beige"
  };

  return(
      <div className="chatbot">
          <ThemeProvider theme={theme}> 
            <ChatBot steps={steps} {...config}/>    
          </ThemeProvider>
      </div>
  )
}


const mapStateToProps = (state) => {
  const user = state.userReducer;
  return {user};
}

export default connect(mapStateToProps)(SharaChatbot);