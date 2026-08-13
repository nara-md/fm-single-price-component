import MyComponent from './components/myComponent';
import './App.css';

function App() {
  return (
    <MyComponent
      title="Join our community"
      subtitle="30-day, hassle-free money back guarantee"
      description="Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills."
      title2="Monthly Subscription"
      price2="&dollar;29 per month"
      description2="Full access for less than &dollar;1 a day"
      button2="Sign Up"
      title3="Why Us"
      description3="Tutorials by industry experts
  Peer &amp; expert code review
  Coding exercises
  Access to our GitHub repos
  Community forum
  Flashcard decks
  New videos every week"
    />
  );
}

export default App;