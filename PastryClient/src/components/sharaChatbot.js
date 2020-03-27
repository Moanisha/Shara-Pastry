import React, {Component} from 'react';
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
        message: "Hello, Welcome to our shop",
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
      botBubbleColor: "#db818f",
      botFontColor: "#fff",
      userBubbleColor: "#c1e6d5",
      userFontColor: "black"
  };

  return(
      <div className="chatbot">
          <ThemeProvider theme={theme}> 
            <ChatBot steps={steps} {...config}/>    
          </ThemeProvider>
      </div>
  )
}

export default SharaChatbot;