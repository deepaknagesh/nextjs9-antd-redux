import React, { Component } from 'react';
//import redirect from '../../helpers/redirect';
//import { getCookie } from '../../helpers/session';

import 'isomorphic-fetch';

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(context) {
      const isLoggedIn = getCookie('id_token', context.req) ? true : false;
	  
      if (!isLoggedIn || undefined === isActive) {
        //redirect(context, '/');
      } else if (undefined !== context.req) {
       
      }

      return { isLoggedIn };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
