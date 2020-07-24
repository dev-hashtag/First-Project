import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

    render() {
        return (

<footer class="page-footer font-small blue pt-4">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text-uppercase">
          <span>Footer Content</span>
        </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
        <hr class="clearfix w-100 d-md-none pb-3"></hr>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">
          <span>Links</span>
        </h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
      </div>

      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">
          <span>Links</span>
        </h5>
          <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright. All Rights Reserved.
          <a href="https://hashtag-ca.com/"> hashtag-ca.com</a>
    </div>
  </div>
</footer>
        )
    }
}
