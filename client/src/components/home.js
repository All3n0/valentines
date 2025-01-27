import React, { useState } from "react";
import "../styles/home.css";
import Confetti from "react-confetti";

function Home() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowConfetti(true);

        setTimeout(() => {
            setShowConfetti(false);
        }, 3000);
    };

    return (
        <div className="valentine-container">
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            <h1 className="greeting">DEAR SERIANAE,</h1>

            <div className="pictures-grid">
                <img
                    src="https://i.pinimg.com/474x/9d/7f/4c/9d7f4c387eb8663b724822bb2c32e05c.jpg"
                    alt="Pic 1"
                    className="grid-image"
                />
            </div>

            <h2 className="proposal">WILL YOU BE MY VALENTINE?</h2>

            <div className="options-container">
                <button
                    className="option-button"
                    onClick={() => handleOptionClick("yes")}
                >
                    YES
                </button>
                <button
                    className="option-button"
                    onClick={() => handleOptionClick("option1")}
                >
                    OPTION NUMBER 1
                </button>
                <button className="option-button">ENDAA UUZE UJI</button>
            </div>

            <div className="result-image-container">
                {selectedOption === "yes" && (
                    <img
                        src="https://i.pinimg.com/474x/e1/f2/e3/e1f2e3f6bb3efc3897ce570ae737a8cd.jpg"
                        alt="Yes Response"
                        className="result-image"
                    />
                )}
                {selectedOption === "option1" && (
                    <img
                        src="https://i.pinimg.com/474x/d3/b9/16/d3b916420a3535d2c1719a1f76b713b6.jpg"
                        alt="Option 1 Response"
                        className="result-image"
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
