import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // THIS IS THE FUNCTION THAT WILL BE CALLED WHEN THE USERMENU CONTROLLER IS CONNECTED
  connect() {
    console.log("Hello from usermenu_controller.js");
  }

  // THIS IS THE FUNCTION THAT WILL BE CALLED WHEN THE USER CLICKS ON THE USERMENU BUTTON
  toggle() {
    document.getElementById("usermenu").classList.toggle("hidden");
  }
}
