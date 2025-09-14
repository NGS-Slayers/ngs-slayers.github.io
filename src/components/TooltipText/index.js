import Tooltip from '../Tooltip';
import { glossary } from '@site/src/data/glossary';

const TooltipText = ({ text }) => {
  let result = [text];

  const sortedGlossaryTerms = Object.keys(glossary).sort((a, b) => b.length - a.length);

  sortedGlossaryTerms.forEach(term => {
    const newResult = [];
    result.forEach(segment => {
      if (typeof segment === 'string') {
        const parts = segment.split(new RegExp(`(${term})`, 'g'));
        parts.forEach((part, index) => {
          if (part === term) {
            newResult.push(<Tooltip key={`${term}-${index}`} term={term} />);
          } else if (part) {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(segment);
      }
    });
    result = newResult;
  });

  return <>{result}</>;
};

export default TooltipText;