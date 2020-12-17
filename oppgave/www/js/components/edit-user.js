import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
        <div>
          <p>Username: ${this.user.uname}</p>
          <p>First Name: ${this.user.firstName}</p>
          <p>Last Name: ${this.user.lastName}</p>
        </div>
        <form action="../api/updateUser.php">
          <div>
            <label>New username</label>
            <input id="newUName"> <br><br>
            <label>New first name</label>
            <input id="newFName"> <br><br>
            <label>New Last name</label>
            <input id="newLName"> <br><br>
            <label>Password: </label>
            <input id="pwd" type="password" required> <br><br>
          </div>
          <button >Submit</button>
        </form>
    `;
  }

  
  
}
customElements.define('edit-user', EditUser);
