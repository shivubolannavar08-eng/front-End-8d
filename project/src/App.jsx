import React from 'react';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Body from './component/Body'; // make sure file is named Body.jsx
import Footer from './component/Bottom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Login /> {/* Login comes right after Navbar */}

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "50px" }}>
        <Body footwearname="puma" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac3ZdJ8aUOaEnsec0w-qiYGass_Hb9sPGaQ&s" />
        <Body footwearname="sparx" img="https://www.tracerindia.com/cdn/shop/products/01_12583c50-813c-4eb0-b235-fb807e4697cf.jpg?v=1679137061" />
        <Body footwearname="barefoot shoes" img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCzNqw_j1tgz69AS14nXpZygdxN5ZVSuuR6i5WJcTm0tcx1y4WZ3VbgJ5TbWKY8BfLivBf_17gdsDD-jBWFrnxk_rDPcSBL4wCNVtKyXfWAFHsalbY76iXh6Dk" />
        <Body footwearname="loopers" img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTK4bzUu0oO_Zg241hmDds_dkNu4zHoH6laasA9nzezd6yjhsnL56TcvvjPipzvcWWp8YL_E6OuqTTpb7HMy6na1YbWeR0UeQk0xHh-5emB" />
        <Body footwearname="slide shoes" img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxzr4nkTNhzxXTabIGvgy0Chy5uRvvRi3_-DwRrB0vneiTp4kgHqr1mI8Vyd7X-NAX85OwPK8_eQURQvdQgW8Ju2ZKubk9gA" />
        <Body footwearname="sneakers" img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxzr4nkTNhzxXTabIGvgy0Chy5uRvvRi3_-DwRrB0vneiTp4kgHqr1mI8Vyd7X-NAX85OwPK8_eQURQvdQgW8Ju2ZKubk9gA" />
        <Body footwearname="crop galoshes" img="data:image/webp;base64,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" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
