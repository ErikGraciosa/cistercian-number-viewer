import React from 'react';
import PropTypes from 'prop-types';
import Zero from '../../../images/zero.svg';
import One from '../../../images/one.svg';
import Two from '../../../images/two.svg';
import Three from '../../../images/three.svg';
import Four from '../../../images/four.svg';
import Five from '../../../images/five.svg';
import Six from '../../../images/six.svg';
import Seven from '../../../images/seven.svg';
import Eight from '../../../images/eight.svg';
import Nine from '../../../images/nine.svg';
import styles from './OutputSymbol.css';

function OutputSymbol({ 
  digitOne,
  digitTwo,
  digitThree,
  digitFour
}) {

  const convertToImageName = {
    0: Zero,
    1: One,
    2: Two,
    3: Three,
    4: Four,
    5: Five,
    6: Six,
    7: Seven,
    8: Eight,
    9: Nine,
  };

  return (
    <div className={styles.OutputSymbol}>
      <img className={styles.ones} src={convertToImageName[digitOne]}/>
      <img className={styles.tens} src={convertToImageName[digitTwo]}/>
      <img className={styles.hundreds} src={convertToImageName[digitThree]}/>
      <img className={styles.thousands} src={convertToImageName[digitFour]}/>
    </div>
  );
}

OutputSymbol.propTypes = {
  digitOne: PropTypes.string.isRequired,
  digitTwo: PropTypes.string.isRequired,
  digitThree: PropTypes.string.isRequired,
  digitFour: PropTypes.string.isRequired,
};

export default OutputSymbol;
