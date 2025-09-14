import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { glossary } from '@site/src/data/glossary';

const Tooltip = ({ term }) => {
  const definition = glossary[term];

  return (
    <Tippy content={definition}>
      <span>{term}</span>
    </Tippy>
  );
};

export default Tooltip;