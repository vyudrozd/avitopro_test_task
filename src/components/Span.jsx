import React from 'react';

export default function Span({
  className, children,
}) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}
