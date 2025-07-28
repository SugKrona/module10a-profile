// Gustavo Corona
// src/App.jsx made July 27, 2025
// GitHub Repository URL: https://github.com/SugKrona/module10a-profile

import Profile from './Profile'; // Import your new Profile component
import './index.css'; // Make sure global styles are imported if needed

function App() {
  return (
    // This div is a simple container. Overall centering and background are handled by index.css.
    <div>
      <Profile
        name="Eminem"
        occupation="Legendary Rapper & Producer"
        funFact="Full name: Marshall Bruce Mathers III. He began rapping around 1986 and rose to mainstream fame with his album The Slim Shady LP in 1999, after being signed by Dr. Dre in 1998. Known for his controversial lyrics and alter ego Slim Shady, he's one of the best-selling and most influential artists in hip-hop history. He won an Academy Award for Best Original Song for 'Lose Yourself' from the movie *8 Mile*, in which he also starred. With over 220 million records sold worldwide, he is one of the best-selling music artists of all time and is widely credited with popularizing hip-hop in middle America."
        skills={["Intricate Rhymes", "Lyrical Prowess", "Storytelling", "Music Production", "Hip-Hop Icon", "Grammy Award Winner", "Rap God"]} // ADDED: "Rap God"
        image="/images/Eminem.png"
      />
    </div>
  );
}

export default App;