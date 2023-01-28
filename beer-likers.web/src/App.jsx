import React from 'react';
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

const App = ({page}) => {
    return (
        <div>
            <Header />
            {page}
            <Footer />
        </div>
    );
};

export default App;
