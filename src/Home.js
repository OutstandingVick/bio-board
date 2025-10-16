import React from 'react';

export default function Home() {
  return (
    <article className='bg-main mt-14'>
      <div className='font-lato space-y-4'>
        <div className='space-y-4 text-3xl md:text-5xl left'>
          <h2>
            I Create Written <span className='text-side'>Web3</span> Content
          </h2>
          <h2>
            That Informs, <span className='text-side'>Compels</span>,
          </h2>
          <h2>
            Promotes <span className='text-side'>Engagement</span>,
          </h2>
          <h2>
            And <span className='text-side'>Drives</span> Understanding.
          </h2>
        </div>
        <div className='space-y-4 text-3xl pl-12 md:pl-60 ml-12 md:ml-96 md:text-5xl right'>
          <h2>
            I Turn <span className='text-side'>Complex</span> Blockchain Ideas
          </h2>
          <h2>
            Into Clear, <span className='text-side'>Compelling</span> Narratives
          </h2>
          <h2>
            <span className='text-side'>Through Research</span>, Storytelling
          </h2>
          <h2>
            And community <span className='text-side'>Insight</span>.
          </h2>
        </div>
        {/* <h3 className='text-2xl'>One of Solana's nCMO</h3> */}
      </div>
    </article>
  );
}
