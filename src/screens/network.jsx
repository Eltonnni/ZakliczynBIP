import React from 'react'

const NetWorkImprovement = () => {
    return (
        <div className="container p-4">
            <h1 className='fw-bold'>Network Improvement</h1>
            <div className="text-center">
                <img src="/bipmap.jpg" alt="Mapa de Rede" className="img-fluid w-100 image-map rounded mb-4" />

            </div>
            <p>During our visit to Zakliczyn, we observed that internet
                coverage was weak in many public areas. To address this, we
                designed a network improvement plan to provide stable,
                high-quality public internet access through an outdoor Wi-Fi
                infrastructure.</p>
            <p>This project aims to enhance internet accessibility and digital
                inclusion by deploying a robust fiber-connected Wi-Fi
                network across 8.1 kilometers of key urban and rural routes.</p>

            <h2>Here we have the report of what we can do to improve:</h2>
            <div className="text-center mt-4">
                <iframe
                    src="/Network Zakliczyn.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: '1px solid #ccc' }}
                    title="Network Improvement PDF"
                >
                    This browser does not support PDFs. <a href="/network-report.pdf">Download the PDF</a>.
                </iframe>
            </div>

        </div>


    )
}

export default NetWorkImprovement