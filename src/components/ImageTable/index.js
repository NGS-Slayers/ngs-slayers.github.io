import styles from './styles.module.css';

export const ImageTableFigure = ({src, alt, children, width}) => {
  return (
    <figure className={styles.imageFigure} style={{width: width}}>
      <img src={src} alt={alt} width={width} />
      <figcaption className={styles.imageFigcaption}>{children}</figcaption>
    </figure>
  );
};

const ImageTable = ({children}) => {
  return (
    <div className={styles.imageTable}>
      {children}
    </div>
  );
};

export default ImageTable;