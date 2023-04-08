/** @format */

import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='root'>
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className='container'>
        <div className='header'>
          <div className='header-title'>
            <h1>uil study tool</h1>
          </div>
          <div className='header-subtitle'>
            <h2>
              input a uil question below, we'll give you all the surrounding
              information you need to learn
            </h2>
          </div>
        </div>
        <div className='prompt-container'>
          <textarea
            placeholder='high school or middle school uil question (answer choices optional)'
            className='prompt-box'
            value={input}
            onChange={onInputChange}
          />
          <div className='prompt-buttons'>
            <a className='generate-button' onClick={null}>
              <div className='generate'>
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
