import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Ionic PWA Toolkit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <p>
            Welcome to the Ionic PWA Toolkit. You can use this starter to build
            entire PWAs all with web components using Stencil and ionic/core!
            Check out the readme for everything that comes in this starter out
            of the box and Check out our docs on{" "}
            <a href="https://stenciljs.com">stenciljs.com</a> to get started.
          </p>

          <ion-button href={'/profile/stencil'}>
            Profile page
          </ion-button>

          <ion-button href={'/firebase'}>
          Firebase page
          </ion-button>          

{/*
          <stencil-route-link url="/profile/stencil">
            <ion-button>Profile page</ion-button>
          </stencil-route-link>

          <stencil-route-link url="/firebase">
            <ion-button>Firebase page</ion-button>
          </stencil-route-link>

          <stencil-route-link url="/gizmos">
            <ion-button>Gizmos page</ion-button>
          </stencil-route-link>

          <stencil-route-link url="/sign-in">
            <ion-button>Sign In</ion-button>
          </stencil-route-link>          
*/}          
        </ion-content>
      </ion-page>
    );
  }
}
