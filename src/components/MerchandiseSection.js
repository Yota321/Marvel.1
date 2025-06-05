import React from 'react';
import './MerchandiseSection.css';

const MerchandiseSection = () => {
  const merchandise = [
    {
      id: 'cd',
      title: 'Original Soundtracks',
      description: 'Limited edition vinyl and CD collections featuring original scores',
      price: '$24.99'
    },
    {
      id: 'tshirt',
      title: 'Minimalist Apparel',
      description: 'Premium cotton t-shirts with subtle film-inspired designs',
      price: '$29.99'
    },
    {
      id: 'poster',
      title: 'Art Prints',
      description: 'Museum-quality poster prints on archival paper',
      price: '$19.99'
    },
    {
      id: 'collectible',
      title: 'Collector\'s Items',
      description: 'Limited edition memorabilia and exclusive collectibles',
      price: '$49.99'
    }
  ];

  return (
    <section id="merchandise" className="section merch-section">
      <div className="container">
        <h2 className="section-title">Merchandise</h2>
        <div className="merch-grid">
          {merchandise.map((item) => (
            <div key={item.id} className="merch-card">
              <div className="merch-image">
                <img 
                  src={`/assets/merchandise/merch_${item.id}.jpg`} 
                  alt={`${item.title}`} 
                />
              </div>
              <div className="merch-info">
                <h3 className="merch-title">{item.title}</h3>
                <p className="merch-description">{item.description}</p>
                <p className="merch-price">{item.price}</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
