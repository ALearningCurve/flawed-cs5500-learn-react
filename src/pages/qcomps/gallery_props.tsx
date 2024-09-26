import { Avatar } from "../components/profile_props";

interface ListItem {
  headline: string;
  information: string;
}

function ListItem({ headline, information }: ListItem) {
  return (<li>
    <b>{headline}: </b>
    {information}
  </li>);
}

interface Scientist {
  name: string;
  profession: string;
  awards: string[];
  discoveries: string;
  imageId: string;
};

interface ProfileProps {
  scientist: Scientist,
  imageSize: number;
}

function Profile({ scientist, imageSize }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <Avatar person={scientist} size={imageSize} />
      <ul>
        <ListItem headline="Profession" information={scientist.profession} />
        <ListItem headline={`Awards ${scientist.awards.length}`} information={`(${scientist.awards.join(', ')})`} />
        <ListItem headline="Discovered" information={scientist.discoveries} />
      </ul>
    </section>
  );
}

export default function Gallery() {
  const maria: Scientist = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    profession: 'physicist and chemist',
    awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
    discoveries: 'polonium (element)'
  };
  const katsuko: Scientist = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'geochemist',
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discoveries: 'a method for measuring carbon dioxide in seawater'
  };

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile scientist={maria} imageSize={70} />
      <Profile scientist={katsuko} imageSize={70} />
    </div>
  );
}
