import { useState } from 'react';
import { sculptureList } from '../../data/data';

/**
 * Increment the index, wrapping around to 0 if necessary.
 * @param index the index value
 * @param maxIndex the length of array index is into
 * @returns the incremented index with wrap-around
 */
function incrementIndex(index: number, maxIndex: number) {
  return (index + 1) % maxIndex;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(incrementIndex(index, sculptureList.length));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}