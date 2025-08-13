"use client";

import { useEffect, useState } from "react";

const TypewriterText = ({
  lines = [],
  speed = 100,
  delayBetween = 100,
  colors = [],
  textClassName = "",
  startDelay = 1000,
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFirstRun, setIsFirstRun] = useState(true);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    const delay = isFirstRun
      ? startDelay
      : charIndex < line.length
      ? speed
      : delayBetween;

    const timeout = setTimeout(() => {
      if (charIndex < line.length) {
        if (!isStarted) setIsStarted(true);
        const updatedLines = [...displayedLines];
        updatedLines[currentLine] =
          (updatedLines[currentLine] || "") + line[charIndex];
        setDisplayedLines(updatedLines);
        setCharIndex(charIndex + 1);
      } else {
        setCurrentLine(currentLine + 1);
        setCharIndex(0);
      }
      setIsFirstRun(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    currentLine,
    lines,
    displayedLines,
    speed,
    delayBetween,
    isFirstRun,
  ]);

  return (
    <p className="flex-1 flex flex-col">
      {lines.length === 1 ? (
        <span className={`${textClassName} ${colors[0] || ""}`}>
          <span className="invisible">{lines[0]}</span>

          <span className="absolute left-0 top-0">
            {displayedLines[0] || ""}
            {currentLine === 0 && (
              <span className="w-12 animate-ping !font-light">|</span>
            )}
          </span>
        </span>
      ) : (
        lines.map((line, index) => (
          <span
            key={index}
            className={`${textClassName} ${colors[index] || ""}`}
          >
            <span className="invisible">{line}</span>

            <span className="absolute left-0 top-0">
              {displayedLines[index] || ""}
              {index === currentLine && isStarted && (
                <span className="w-12 animate-ping !font-light">|</span>
              )}
            </span>
          </span>
        ))
      )}
    </p>
  );
};

export default TypewriterText;
