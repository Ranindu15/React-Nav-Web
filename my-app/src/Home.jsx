import React from 'react';

export const Home = () =>(
        <div>
            <h1> Hello My App Page</h1>
            <p>Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included css. However, some stylesheet is required to use these components. How and which bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN.</p>
            <br></br>
        <h2>Watch out!</h2>
                <p>Because React-Bootstrap completely reimplements Bootstrap's JavaScript,
                 it's not automatically compatible with themes that extend the default JavaScript behaviors.</p>
        </div>
    )
export default Home;
