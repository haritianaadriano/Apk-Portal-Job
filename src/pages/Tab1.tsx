import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Scraping from '../dataContent';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='title'>
        <IonToolbar>
          <IonTitle>Portal-job</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content'>
            <IonTitle size="large">Job-annonce</IonTitle>
          <Scraping></Scraping>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
