import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#fffd8c"
    >
      <rect x="500" y="531" rx="2" ry="2" width="140" height="10" />
      <rect x="515" y="531" rx="2" ry="2" width="140" height="10" />
      <circle cx="144" cy="150" r="116" />
      <rect x="21" y="287" rx="3" ry="3" width="244" height="25" />
      <rect x="21" y="326" rx="6" ry="6" width="244" height="75" />
      <rect x="23" y="424" rx="0" ry="0" width="81" height="25" />
      <rect x="151" y="415" rx="25" ry="25" width="114" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
