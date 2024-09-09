'use client';

import React, {useState} from 'react';

export default function Home() {

  type ProofProps = {
    // Someone come up with better and more uniform names for these
    title: string,
    subheaders?: [string],
    paragraphs?: [string],
    continuedOnPage?: number
  }

  const [proofProps, setProofProps] = useState<ProofProps>({})
  // can be used to set the proofProps to be used

  return (
    <div className={'w-screen h-screen bg-blue-200'}>
      <h1>Proof Visualizer</h1>
    </div>
  );
}
