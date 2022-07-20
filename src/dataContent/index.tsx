import {
    IonButton,
    IonCard,
    IonCol,
    IonItem,
    IonRow,
  } from "@ionic/react";
  import axios from "axios";
  import { useState } from "react";
  
  interface Job {
    urgent: string;
    date_annonce: string;
    titre: string;
    societe: string;
    contrat_type: string;
    description: string;
    lien: string;
    date_lim?: string;
  }
  type GetJobResponse = {
    data: Job[];
  };
  
  function Scraping() {
    let [jobList, setJobList] = useState<Job[]>([]);
    let [page] = useState<number>(1);
  
    console.log(jobList);
    //setPage(1000);
  
    return (
      <>
        
        <IonRow>
          <IonCol>
            <div className="ion-text-center">
              <IonButton
                onClick={() => {
                  const promise = axios.get(
                    `https://miscrap-01.herokuapp.com/portal/?page=${page}`
                  );
                  promise.then((response) => {
                    setJobList(response.data);
                  });
                }}
              >
               Search your job
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
        {jobList.map((item) => (
          <>
            <IonCard>
                {item.titre}
                    <IonCard>
                        <IonItem>{item.contrat_type}, {item.societe}</IonItem>
                        {item.description}
                        <IonCard>{item.date_annonce}</IonCard>
                    </IonCard>
            </IonCard>
          </>
        ))}
      </>
    );
  }
  
  export default Scraping;
  