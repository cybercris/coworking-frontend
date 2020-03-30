import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SpotLoading() {
  return (
    <>
      <li className="spot">
        <Skeleton
          variant="rect"
          width="215px"
          height="210px"
          animation="wave"
        />
        <div>
          <Skeleton variant="text" width={160} animation="wave" />
          <Skeleton variant="text" width={100} animation="wave" />
        </div>
      </li>
      <li className="spot">
        <Skeleton variant="rect" width={215} height={210} animation="wave" />
        <div>
          <Skeleton variant="text" width={160} animation="wave" />
          <Skeleton variant="text" width={100} animation="wave" />
        </div>
      </li>
      <li className="spot">
        <Skeleton variant="rect" width={215} height={210} animation="wave" />
        <div>
          <Skeleton variant="text" width={160} animation="wave" />
          <Skeleton variant="text" width={100} animation="wave" />
        </div>
      </li>
    </>
  );
}
