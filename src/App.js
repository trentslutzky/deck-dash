import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import moment from "moment";

import BG from "./wallpaper.jpg";

export default function App() {

  const [time_text, setTimeText] = useState("");
  const [date_text, setDateText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      console.log(moment().format("h:mm"));
      setTimeText(moment().format("h:mm"));
      setDateText(moment().format("dddd, MMMM Do"));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MainContainer>
      <TimeParagraph>{time_text}</TimeParagraph>
      <DateParagraph>{date_text}</DateParagraph>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background:#1a2c37;
  width:100%;
  height:100%;
  padding:1em;
  background-image:url(${BG});
`;

const DateParagraph = styled.p`
  font-size:2em;
  text-align:center;
  margin-top:5em;
`;

const TimeParagraph = styled.p`
  font-size:19em;
  margin-bottom:-0.85em;
  margin-top:0.3em;
  text-align:center;
`;
