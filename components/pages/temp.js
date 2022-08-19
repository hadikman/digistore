import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './temp.module.scss';

function Home() {
  const [show, setShow] = useState(true);

  const classNames = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
  };

  function handle() {
    setShow(!show);
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handle}>
          کلیک کنید
        </button>
        <CSSTransition
          in={show}
          timeout={300}
          classNames={classNames}
          unmountOnExit
        >
          <div className={styles.text}>
            <p>نمونه متن دارای نقطه</p>
            <p>123456789</p>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default Home;
