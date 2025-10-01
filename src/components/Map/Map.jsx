import React from 'react';
import styles from './Map.module.css';
import mapShchelyur from '../../assets/map.png';
import mapVertep from '../../assets/map_vertep.png';
import mapKrasnobor from '../../assets/map_krasnobor.png';
import mapDnyor from '../../assets/map_dnyor.png';

function Map({ selectedLocation }) {
  let mapImage;

  switch (selectedLocation) {
    case 'shchelyur':
      mapImage = mapShchelyur;
      break;
    case 'vertep':
      mapImage = mapVertep;
      break;
    case 'krasnobor':
      mapImage = mapKrasnobor;
      break;
    case 'dnyor':
      mapImage = mapDnyor;
      break;
    default:
      mapImage = mapShchelyur;
  }

  return (
    <div className={styles.map}>
      <img src={mapImage} alt="Карта" className={styles.image} />
    </div>
  );
}

export default Map;
