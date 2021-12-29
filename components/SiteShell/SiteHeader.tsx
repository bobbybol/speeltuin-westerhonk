import styles from './SiteHeader.module.scss';

const SiteHeader = () => {
  return (
    <header className={ styles.root }>
      <div className={ styles.left }>
        Logo
      </div>
      <div className={ styles.middle }>
        <div className={ styles.middleInner }></div>
      </div>
      <div className={ styles.right }>
        Link 1 Link 2 Link 3 Link 4
      </div>
    </header>
  );
};

export default SiteHeader;
