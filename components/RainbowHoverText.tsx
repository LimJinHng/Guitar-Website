type Props = {
  text: string;
  className?: string;
};

export default function RainbowHoverText({ text, className = "" }: Props) {
  const words = text.split(" ");
  const totalLetters = text.replace(/ /g, "").length;
  const hueStep = 360 / totalLetters;
  let letterIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordI) => (
        <span key={wordI} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charI) => {
            const hue = Math.round(letterIndex * hueStep);
            letterIndex += 1;
            return (
              <span
                key={charI}
                className="rainbow-letter"
                style={{ "--hue": `${hue}` } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
          {wordI < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
