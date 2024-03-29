import { Gizmo } from './gizmo.model';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
const DATA_COLLECTION = 'gizmos';
const USERS_COLLECTION = 'users';

interface FirestoreDoc {
  id: string;
  description: string;
  name: string;
  sysDateCreatedOn?: string;
  sysDateUpdatedOn?: string;
}

export class GizmoDataService {
  //
  private firestore: FirebaseFirestore;
  private items$ = new BehaviorSubject<Gizmo[]>([]);

  constructor() {
    //
    this.firestore = firebase.firestore();
  }

  /*
    public getData$(userId: string): Gizmo[] {
    //
      this.firestoreCollection(userId).onSnapshot(
        (querySnapshot) => { 
          const bb = querySnapshot.docs.map((x) =>
            this.fromFirestoreDoc(x.data() as FirestoreDoc),
          );
          
          const data =  [...bb];
          return data;
        },
      );      
  }
  */
  public getItems$(userId: string) {
    //
    this.firestoreCollection(userId).onSnapshot((querySnapshot) => {
      const bb = querySnapshot.docs.map((x) =>
        this.fromFirestoreDoc(x.data() as FirestoreDoc),
      );

      const data = [...bb];
      this.items$.next(data);
    });

    return this.items$;
  }

  private firestoreCollection(userId: string) {
    //
    return this.firestore
      .collection(USERS_COLLECTION)
      .doc(userId)
      .collection(DATA_COLLECTION);
  }

  /*
  private toFirestoreDoc(item: Gizmo): FirestoreDoc {
    //
    const result: FirestoreDoc = {
      description: item.description,
      id: item.id,
      name: item.name,
    };

    // console.log('toFirebaseTodo>', result);
    return result;
  }
  */

  private fromFirestoreDoc(x: FirestoreDoc): Gizmo {
    //
    // console.log('TodoDataService:fromFirebaseTodo>', x);

    // This copies extra fields.
    // const result: Gizmo = { ...x };

    const result: Gizmo = {
      description: x.description,
      id: x.id,
      name: x.name,
    };

    // console.log('fromFirestoreDoc:result>', result);

    return result;
  }
}
