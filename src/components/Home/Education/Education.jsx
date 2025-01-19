import PropTypes from "prop-types";
import styles from "./Education.module.scss";

const Education = ({ title, data, isDiploma }) => {
  return (
    <article>
      <h3>{title}</h3>
      <ul className={isDiploma ? styles.diplomas : ""}>
        {data.map((item) => (
          <li key={item.id}>
            {isDiploma ? (
              <h4>
                <i className="fa-solid fa-graduation-cap"></i>
                {item.title}
              </h4>
            ) : (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                {item.title}
              </a>
            )}
            <p>{item.school}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Education;

Education.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  isDiploma: PropTypes.bool,
};
