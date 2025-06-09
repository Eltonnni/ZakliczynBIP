import React from 'react'

const MarketStrategy = () => {
  return (
    <div className="container p-4">
      <h1 className='fw-bold'>Marketing Strategy</h1>
      <p className='display-6 fs-5 text-break'>
        This strategy was developed to strengthen the city's image, enhance its unique assets and promote its positioning at regional, national and international levels. Through an integrated and sustainable approach, we seek to attract visitors, investors and new residents.
        <br />
        See the full document below:
      </p>
      <div className="text-center mt-4">
        <iframe
          src="/Zakliczyn marketing and Business plan.pdf"
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc' }}
          title="Marketing Strategy PDF"
        >
          This browser does not support PDFs. <a href="/marketing-strategy.pdf">Download the PDF</a>.
        </iframe>
      </div>
      <h2>For the long term</h2>
      <div className="text-center mt-4">
        <iframe
          src="/Zakliczyn Business Plan long run.pdf"
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc' }}
          title="Long Term Plan PDF"
        >
          This browser does not support PDFs. <a href="/long-term-plan.pdf">Download the PDF</a>.
        </iframe>
      </div>
    </div>
  )
}

export default MarketStrategy
