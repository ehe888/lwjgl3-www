// @flow
import * as React from 'react';
import { Connect } from '~/store/Connect';

type Props = {|
  predicate: (state: Object) => boolean,
  className?: string,
  children?: React.Node,
|};

type ConnectedProps = {|
  hidden: boolean,
|};

export const ControlledPanel = ({ children, className, predicate }: Props) => (
  <Connect
    state={state => ({
      hidden: !predicate(state),
    })}
  >
    {({ hidden }: ConnectedProps) => (hidden ? null : children)}
  </Connect>
);
