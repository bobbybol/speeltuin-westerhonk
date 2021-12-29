import styles from './HomeHero.module.scss';

const HomeHero = () => {
  return (
    <div className={ styles.root }>
      <div className={ styles.inner }>
        <h1>
          Speeltuin Westerhonk
        </h1>
      </div>
    </div>
  );
};

export default HomeHero;
