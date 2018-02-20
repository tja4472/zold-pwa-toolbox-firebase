import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

import firebase from '@firebase/app';

// This import loads the firebase namespace along with all its type information.
// Causes error
// import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import '@firebase/auth';
import '@firebase/firestore';
import { MY_FIREBASE_APP_CONFIG } from "./my-firebase-app-config";
@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  constructor(){
    console.log('MyApp:constructor'); 
    firebase.initializeApp(MY_FIREBASE_APP_CONFIG);
    // firebase.firestore();
  }

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a 
      new version available. When they click the
      reload button it then reloads the page 
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>
            <stencil-route url="/gizmos" component="app-gizmo" exact={true} />
            <stencil-route url="/firebase" component="app-firebase" exact={true} />
            <stencil-route url="/sign-in" component="app-sign-in" exact={true} />

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
        </main>
      </ion-app>
    );
  }
}
