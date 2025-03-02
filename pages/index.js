/** @format */

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
  const [userInput, setInput] = useState("");

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='root'>
      <Head>
        <title>UIL Study Tool</title>
      </Head>
      <div className='container'>
        <div className='header'>
          <div className='header-title'>
            <h1>uil study tool</h1>
          </div>
          <div className='header-subtitle'>
            <h2>
              input a science/comp-sci uil question below, we'll give you the
              surrounding information you need to learn
            </h2>
          </div>
        </div>
        <div className='prompt-container'>
          <textarea
            placeholder='high school or middle school uil question (performs better with answer choices)'
            className='prompt-box'
            value={userInput}
            onChange={onInputChange}
          />
          <div className='prompt-buttons'>
            <a className='generate-button' onClick={callGenerateEndpoint}>
              <div className='generate'>
                {isGenerating ? (
                  <span className='loader'></span>
                ) : (
                  <p>Generate</p>
                )}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className='output'>
              <div className='output-header-container'>
                <div className='output-header'>
                  <h3>Output</h3>
                </div>
              </div>
              <div className='output-content'>
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='badge-container grow'>
        <a
          href='https://github.com/sarthak-dayal'
          target='_blank'
          rel='noreferrer'>
          <div className='badge'>
            <p>built with ❤️ by sarthak</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
