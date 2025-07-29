"use client";

import { useEffect, useState } from "react";

const TypewriterText = ({
  lines = [],
  speed = 100,
  delayBetween = 100,
  colors = [],
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    const timeout = setTimeout(
      () => {
        if (charIndex < line.length) {
          const updatedLines = [...displayedLines];
          updatedLines[currentLine] =
            (updatedLines[currentLine] || "") + line[charIndex];
          setDisplayedLines(updatedLines);
          setCharIndex(charIndex + 1);
        } else {
          setCurrentLine(currentLine + 1);
          setCharIndex(0);
        }
      },
      charIndex < line.length ? speed : delayBetween
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentLine, lines, displayedLines, speed, delayBetween]);

  return (
    <p className="flex-1 flex flex-col">
      {lines.map((line, index) => (
        <span
          key={index}
          className={`inline-block w-[10ch] font-bold  text-6xl md:text-[130px] uppercase tracking-widest font-mono leading-none relative ${
            colors[index] || ""
          }`}
        >
          <span className="invisible">{line}</span>

          <span className="absolute left-0 top-0">
            {displayedLines[index] || ""}
            {index === currentLine && (
              <span className="w-12 animate-ping !font-light">|</span>
            )}
          </span>
        </span>
      ))}
    </p>
  );
};

export default TypewriterText;
