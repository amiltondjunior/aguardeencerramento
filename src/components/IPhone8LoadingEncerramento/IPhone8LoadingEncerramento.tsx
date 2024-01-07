import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone8LoadingEncerramento.module.css';

interface Props {
  className?: string;
}
/* @figmaId 94:47 */
export const IPhone8LoadingEncerramento: FC<Props> = memo(function IPhone8LoadingEncerramento(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.aguardeOEncerramento}>Aguarde, o encerramento....</div>
      <div className={classes._352036Autorenew1}></div>
    </div>
  );
});
