// @flow
import * as React from 'react';
import { connect } from 'react-redux';
// import { connect } from '~/services/connect';
import styled from 'styled-components';
import { mediaBreakpointUp, COLOR_PRIMARY } from '~/theme';
import type { BUILD_TYPES } from '../types';

import {
  COLOR_RELEASE,
  COLOR_RELEASE_LIGHT,
  COLOR_STABLE,
  COLOR_STABLE_LIGHT,
  COLOR_NIGHTLY,
  COLOR_NIGHTLY_LIGHT,
  SMALL_FONT_SIZE,
  BORDER_RADIUS,
} from '../theme';

const ConfigPanel = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 66px;
  padding: 0 1rem 1rem 1rem;

  ${mediaBreakpointUp('lg')} {
    &.release {
      background-color: ${COLOR_RELEASE_LIGHT};
      border-color: ${COLOR_RELEASE};
    }
    &.stable {
      background-color: ${COLOR_STABLE_LIGHT};
      border-color: ${COLOR_STABLE};
    }
    &.nightly {
      background-color: ${COLOR_NIGHTLY_LIGHT};
      border-color: ${COLOR_NIGHTLY};
    }
    margin-top: 1rem;
    border-width: 2px;
    border-style: solid;
  }

  p {
    line-height: 1.5rem;
  }

  .artifact {
    margin-bottom: 1.25rem;

    a {
      word-wrap: break-word;
    }

    svg {
      margin-right: 0.5rem;
    }

    p {
      margin-left: 1.5rem;
      margin-bottom: 0.25rem;
      font-size: ${SMALL_FONT_SIZE};
    }
  }

  pre {
    background-color: #ffffe6;
    font-size: 13px;
    line-height: 1rem;
    padding: 0.5rem;
    tab-size: 4;
  }

  .download-toolbar {
    background: ${COLOR_PRIMARY.l(COLOR_PRIMARY.lightness + 5)};
    padding: 1rem 0;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    .btn + .btn {
      margin-left: 0.5rem;
    }

    &.file {
      .custom-file {
        height: auto;
        margin-right: 1rem;
        text-align: left !important;
      }
    }
  }
`;

type Props = {
  build: BUILD_TYPES,
  children?: React.Node,
};

class BuildConfigArea extends React.Component<Props> {
  render() {
    return <ConfigPanel className={this.props.build}>{this.props.children}</ConfigPanel>;
  }
}

export default connect(state => ({
  build: state.build.build,
}))(BuildConfigArea);
