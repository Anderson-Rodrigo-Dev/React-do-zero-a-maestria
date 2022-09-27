import MyComponent from "./MyComponent";

import './FirstComponent.css'

const FirstComponent = () => {
  return (
    <div className="paragrafo">
      <h2>Meu primeiro componente</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        exercitationem neque placeat, corrupti cupiditate suscipit esse at,
        alias, perferendis quia blanditiis labore. Deserunt dolores obcaecati
        quidem laboriosam hic eum rerum.
      </p>

      <MyComponent />
    </div>
  );
};

export default FirstComponent;
