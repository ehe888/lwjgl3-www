// @flow
import * as React from 'react';
import { LoaderSpinner } from '~/components/LoaderSpinner';
import nprogress from 'nprogress';

import type { LoadingComponentProps } from 'react-loadable';

export class LoadingPage extends React.Component<LoadingComponentProps> {
  static firstRoute = true;

  componentDidMount() {
    if (LoadingPage.firstRoute) {
      LoadingPage.firstRoute = false;
      nprogress.configure({
        showSpinner: false,
      });
    } else {
      nprogress.start();
    }
  }

  componentWillUnmount() {
    if (nprogress.isStarted()) {
      nprogress.done();
    }
  }

  render() {
    const { isLoading, pastDelay, timedOut, error } = this.props;

    if (isLoading && !timedOut) {
      return (
        <div className="text-center" style={{ padding: '5rem 0', minHeight: 'calc(100vh - 4rem)' }}>
          {pastDelay ? <LoaderSpinner size={128} /> : null}
        </div>
      );
    } else if (error || timedOut) {
      return (
        <div className="text-center" style={{ padding: '5rem 0' }}>
          <h1 className="display-4 text-danger">Failed to load page</h1>
          <p>We were unable to load the page you requested. Please make sure you're online.</p>
          <p>Please, refresh the page to try again.</p>
        </div>
      );
    }

    return null;
  }
}
