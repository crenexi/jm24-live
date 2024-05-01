import { Slide, Deck } from '@stypes/Slide.types';

type DeckByIndex = (args: {
  slides: Slide[];
  groupSize: number;
  groupIndex: number;
}) => Deck;

/**
 * Generates deck information for a given set of slides, including the current, previous,
 * and next groups of slides based on a specified grouping size and index. This function
 * is designed to facilitate navigating through slides that are displayed in grouped sets,
 * such as in carousels or paginated slideshows, with seamless wrapping from the first to
 * the last group and vice versa.
 *
 * The function first calculates the total number of slide groups by dividing the total
 * number of slides by the group size and rounding up to account for a partial final group.
 * It then calculates the starting slide index for the previous, current, and next groups,
 * ensuring to wrap around the slide array boundaries. For each group, a set of slides is
 * retrieved based on the calculated starting index and group size, considering the total
 * number of slides to avoid out-of-bounds errors.
 */
const deckByIndex: DeckByIndex = (opts) => {
  const { slides, groupSize: size, groupIndex: i } = opts;
  const sTotal = slides.length; // num of slides
  const gTotal = Math.ceil(sTotal / size); // num of groups

  // Calculates starting index of a group in slides array
  const calcStart = (groupIdx: number) => {
    return ((groupIdx + gTotal) % gTotal) * size;
  };

  // Retrieves slides for group, ensuring not to exceed slides bounds
  const getSlideSet = (groupIdx: number): Slide[] => {
    let startIndex = calcStart(groupIdx);
    let endIndex = Math.min(startIndex + size, sTotal);
    let slideSet = [];

    for (let idx = startIndex; idx < endIndex; idx++) {
      slideSet.push(slides[idx % sTotal]);
    }

    return slideSet;
  };

  return {
    groupCount: gTotal,
    groupIndex: i,
    groupPrev: getSlideSet(i - 1),
    groupCurr: getSlideSet(i),
    groupNext: getSlideSet(i + 1),
  };
};

export default deckByIndex;
