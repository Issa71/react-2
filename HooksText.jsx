import { useState } from 'react';

const LessText ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {hidden ? `${text.substring(0, maxLength).trim()}...` : text}

      {hidden ? (
        <button
          type="button"
          onClick={() => setHidden(false)}
        >
          Read More
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setHidden(true)}
        >
          Read Less
        </button>
      )}
    </span>
  );
}

export default LessText;