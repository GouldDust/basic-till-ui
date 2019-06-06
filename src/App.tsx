import React from 'react';
import styles from './App.module.css';
import BasicTill from './BasicTill';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BasicTill />
    </div>
  );
}

export default App;
