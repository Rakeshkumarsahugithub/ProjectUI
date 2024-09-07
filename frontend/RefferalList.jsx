
import React, { useState } from 'react';
import './ReferralList.css';
import App from './src/App';
import Refer from './Refer';

const ReferralList = () => {
  // Sample data for the table
  const users = [
    // Page 1
    [
      { id: 1, name: 'Andria Chisnell', referredId: '3363', status: 'unpaid', value: '9106.99', earnings: '705.13' },
      { id: 2, name: 'Adriano Lysøe', referredId: '5361', status: 'paid', value: '6447.15', earnings: '777.46' },
      { id: 3, name: 'Anabal Hakking', referredId: '4892', status: 'rejected', value: '8797.12', earnings: '679.71' },
      { id: 4, name: 'Akim Korba', referredId: '8561', status: 'unpaid', value: '3104.91', earnings: '552.75' },
      { id: 5, name: 'Allsun Wrotchford', referredId: '1094', status: 'rejected', value: '6186.51', earnings: '653.95' },
      { id: 6, name: 'Althea Dayce', referredId: '6069', status: 'unpaid', value: '6108.09', earnings: '269.32' },
      { id: 7, name: 'Andre Kenway', referredId: '9826', status: 'unpaid', value: '2221.71', earnings: '347.19' },
      { id: 8, name: 'Antonze Szymon', referredId: '3985', status: 'paid', value: '7048.75', earnings: '246.18' },
      { id: 9, name: 'Aurora Skipsey', referredId: '2821', status: 'unpaid', value: '2938.87', earnings: '317.42' },
      { id: 10, name: 'Adrienne Tourne', referredId: '4072', status: 'unpaid', value: '6774.33', earnings: '821.78' }
    ],
   
    [
        { id: 11, name: 'Bella Michelle', email: 'bmichellen@npr.org', referredId: '5725', status: 'Rejected', value: '$7088.56', earnings: '$329.64', avatar: 'avatar1.png' },
        { id: 12, name: 'Berty Letson', email: 'bletson1o@noaa.gov', referredId: '4072', status: 'Rejected', value: '$5524.56', earnings: '$87.33', avatar: 'avatar2.png' },
        { id: 13, name: 'Bianca Losty', email: 'blosty1m@over-blog.com', referredId: '4280', status: 'Unpaid', value: '$3660.92', earnings: '$656.93', avatar: 'avatar3.png' },
        { id: 14, name: 'Brannon Hambribe', email: 'bhambribe1c@xing.com', referredId: '9445', status: 'Unpaid', value: '$7148.09', earnings: '$951.78', avatar: 'avatar4.png' },
        { id: 15, name: 'Bald Shmyr', email: 'bshmyr1e@tamu.edu', referredId: '3357', status: 'Paid', value: '$9458.25', earnings: '$598.50', avatar: 'avatar5.png' },
        { id: 16, name: 'Burlie Kleinhausen', email: 'bkleinhausen1a@irs.gov', referredId: '4764', status: 'Unpaid', value: '$9442.44', earnings: '$76.91', avatar: 'avatar6.png' },
        { id: 17, name: 'Burr Scrauniage', email: 'bscrauniage18@wunderground.com', referredId: '3570', status: 'Rejected', value: '$6891.09', earnings: '$900.25', avatar: 'avatar7.png' },
        { id: 18, name: 'Calli Mewes', email: 'cmewes12@mit.edu', referredId: '7323', status: 'Unpaid', value: '$7400.29', earnings: '$167.44', avatar: 'avatar8.png' },
        { id: 19, name: 'Cam Keely', email: 'ckeely19@jugem.jp', referredId: '7556', status: 'Paid', value: '$1726.27', earnings: '$797.14', avatar: 'avatar9.png' },
        { id: 20, name: 'Carter Gommowe', email: 'cgommoweg@purevolume.com', referredId: '10', status: 'Unpaid', value: '$8500.00', earnings: '$500.00', avatar: 'avatar10.png' }
      ],

      [
        { id: 21, name: 'Corinne Cockshtt', email: 'ccockshttz@house.gov', referredId: '1372', status: 'Rejected', value: '$3700.16', earnings: '$858.94', avatar: 'avatar11.png' },
        { id: 22, name: 'Christoffer Derell', email: 'cderell4@apple.com', referredId: '9176', status: 'Rejected', value: '$6202.81', earnings: '$882.51', avatar: 'avatar12.png' },
        { id: 23, name: 'Clemmie Montgomery', email: 'cmontgomery2@fema.gov', referredId: '2749', status: 'Unpaid', value: '$6717.09', earnings: '$699.02', avatar: 'avatar13.png' },
        { id: 24, name: 'Clywd Strapp', email: 'cstrapp22@creativecommons.org', referredId: '3697', status: 'Rejected', value: '$8288.53', earnings: '$434.25', avatar: 'avatar14.png' },
        { id: 25, name: 'Cull Scipsey', email: 'cscipseyc@adobe.com', referredId: '9287', status: 'Rejected', value: '$9375.13', earnings: '$690.75', avatar: 'avatar15.png' },
        { id: 26, name: 'Daria Spiers', email: 'dspiers1d@ustream.tv', referredId: '2782', status: 'Rejected', value: '$8068.36', earnings: '$158.46', avatar: 'avatar16.png' },
        { id: 27, name: 'Dela Lathwell', email: 'dlathwell6@webmd.com', referredId: '4552', status: 'Rejected', value: '$6470.46', earnings: '$831.45', avatar: 'avatar17.png' },
        { id: 28, name: 'Dorrie Dobson', email: 'ddobson2h@sohu.com', referredId: '9974', status: 'Paid', value: '$6475.75', earnings: '$605.74', avatar: 'avatar18.png' },
        { id: 29, name: 'Dannie Romeo', email: 'dromeo15@ask.com', referredId: '1559', status: 'Paid', value: '$7110.30', earnings: '$95.40', avatar: 'avatar19.png' },
        { id: 30, name: 'Ellynn Markus', email: 'emarkus1k@artisteer.com', referredId: '5358', status: 'Rejected', value: '$3299.72', earnings: '$731.45', avatar: 'avatar20.png' }
      ],

[
      { id: 31, name: 'Fiorenze Jeness', referredId: '5489', status: 'Unpaid', value: '4389.40', earnings: '697.08' },
      { id: 32, name: "Fawne O'Scanlan", referredId: '2946', status: 'Rejected', value: '7471.34', earnings: '747.24' },
      { id: 33, name: 'Garnette Abramcik', referredId: '7828', status: 'Unpaid', value: '5375.10', earnings: '447.01' },
      { id: 34, name: 'Garv Scruton', referredId: '6876', status: 'Unpaid', value: '6588.37', earnings: '680.51' },
      { id: 35, name: 'Garwood McGuire', referredId: '8760', status: 'Rejected', value: '1466.88', earnings: '975.96' },
      { id: 36, name: 'Gabriellia Coltman', referredId: '5589', status: 'Unpaid', value: '4854.04', earnings: '899.57' },
      { id: 37, name: 'Gifford Drivers', referredId: '8588', status: 'Unpaid', value: '2658.12', earnings: '991.34' },
      { id: 38, name: 'Glynda Doogood', referredId: '6842', status: 'Rejected', value: '8226.00', earnings: '780.05' },
      { id: 39, name: 'Giulietta Rohlfs', referredId: '7287', status: 'Paid', value: '3822.29', earnings: '349.27' },
      { id: 40, name: 'Glori Twidle', referredId: '1019', status: 'Rejected', value: '7902.32', earnings: '588.37' },
    ],

     [
        { id: 41, name: 'Gerianna Nott', referredId: '1971', status: 'Rejected', value: '5563.94', earnings: '515.34' },
        { id: 42, name: 'Hector Biaggioli', referredId: '5286', status: 'Rejected', value: '4752.66', earnings: '546.63' },
        { id: 43, name: 'Herminia Eyree', referredId: '6975', status: 'Unpaid', value: '9802.40', earnings: '219.52' },
        { id: 44, name: 'Horace Presho', referredId: '3380', status: 'Unpaid', value: '6677.69', earnings: '888.70' },
        { id: 45, name: 'Isis Yurkiewicz', referredId: '2384', status: 'Unpaid', value: '7456.86', earnings: '280.52' },
        { id: 46, name: 'Jarib Cardis', referredId: '9142', status: 'Paid', value: '1075.95', earnings: '635.09' },
        { id: 47, name: 'Junina Huygens', referredId: '9446', status: 'Unpaid', value: '7828.40', earnings: '453.00' },
        { id: 48, name: 'Job Jope', referredId: '1413', status: 'Rejected', value: '9465.13', earnings: '98.23' },
        { id: 49, name: 'Kaitlyn Patise', referredId: '1920', status: 'Rejected', value: '7742.22', earnings: '144.47' },
        { id: 50, name: 'Kassia Mottini', referredId: '4426', status: 'Paid', value: '6921.60', earnings: '365.93' },
      ]
      
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="fullscreen-container">
      <div className="content">
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search (Ctrl+R)" />
          </div>
          <div className="icons">
            {/* Language Dropdown */}
            <div className="dropdown">
              <img src="https://www.svgrepo.com/show/327318/language.svg" alt="Language" />
              <div className="dropdown-content">
                <a href="#">English</a>
                <a href="#">French</a>
                <a href="#">Arabic</a>
                <a href="#">Germany</a>
              </div>
            </div>

            {/* Dark/Light Mode Toggle Dropdown */}
            <div className="dropdown">
              <App />
            </div>

            <div className="dropdown">
              <img src="Screenshot 2024-09-07 041455.png" alt="Shortcuts" />
              <div className="dropdown-content">
                <a href="#">Calender</a>
                <a href="#">User App</a>
              </div>
            </div>
            {/* Notification Dropdown */}
            <div className="dropdown">
              <img src="https://us.123rf.com/450wm/illizium/illizium1903/illizium190300113/119765682-notification-icon-vector-bell-icons-in-line.jpg" alt="Notification" />
              <div className="dropdown-content">
                <a href="#">No new notifications</a>
              </div>
            </div>
            {/* Profile Dropdown */}
            <div className="dropdown">
              <img src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="Profile" />
              <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </div>
        </header>
        <div className="stats">
          <div className="stat-card">
            <h2>$24,983</h2>
            <p>Total Earnings</p>
          </div>
          <div className="stat-card">
            <h2>$8,647</h2>
            <p>Unpaid Earnings</p>
          </div>
          <div className="stat-card">
            <h2>2,367</h2>
            <p>Signups</p>
          </div>
          <div className="stat-card">
            <h2>4.5%</h2>
            <p>Conversion Rate</p>
          </div>
        </div>
        <div className="referral">
          <div className="referral-info">
            {/* Referral info */}
          </div>
          <div className="referral-form">
            <h3>Invite your friends</h3>
            <input type="email" placeholder="Email address" />
            <button className='firstbtn'>Submit</button>
            <h3>Share the referral link</h3>
            <input type="text" defaultValue="pixinvent.com/?ref=6479" readOnly />
            <span><img src='https://clipart-library.com/images_k/facebook-icon-transparent-background/facebook-icon-transparent-background-5.png' /></span>
            <span><img src='https://cdn-icons-png.freepik.com/256/3938/3938028.png?semt=ais_hybrid' /></span>
          </div>
        </div>
        <Refer pageData={users[currentPage]} />
        {/* Pagination */}
        <div className="pagination">
          <a href="#" onClick={() => handlePageChange(0)}>«</a>
          <a href="#" className={currentPage === 0 ? 'active' : ''} onClick={() => handlePageChange(0)}>1</a>
          <a href="#" className={currentPage === 1 ? 'active' : ''} onClick={() => handlePageChange(1)}>2</a>
          <a href="#" className={currentPage === 2 ? 'active' : ''} onClick={() => handlePageChange(2)}>3</a>
          <a href="#" className={currentPage === 3 ? 'active' : ''} onClick={() => handlePageChange(3)}>4</a>
          <a href="#" className={currentPage === 4 ? 'active' : ''} onClick={() => handlePageChange(4)}>5</a>
          <a href="#">»</a>
        </div>
      </div>
      <div className='btns'>
        <button className="buy" onClick={() => window.location.href = 'https://1.envato.market/vuexy_admin'}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ReferralList;

