import Tooltip from '../Tooltip';
import { glossary } from '@site/src/data/glossary';

const TooltipText = ({ text }) => {
  let result = [text]; // Start with the full text as a single element

  // Sort glossary terms by length in descending order to prioritize longer terms
  const sortedGlossaryTerms = Object.keys(glossary).sort((a, b) => b.length - a.length);

  sortedGlossaryTerms.forEach(term => {
    const newResult = [];
    result.forEach(segment => {
      if (typeof segment === 'string') { // Only process string segments
        const parts = segment.split(new RegExp(`(${term})`, 'g'));
        parts.forEach((part, index) => {
          if (part === term) {
            newResult.push(<Tooltip key={`${term}-${index}`} term={term} />);
          } else if (part) { // Add non-empty parts
            newResult.push(part);
          }
        });
      } else { // Keep non-string elements (already processed Tooltips)
        newResult.push(segment);
      }
    });
    result = newResult;
  });

  return <>{result}</>;
};

export default TooltipText;
