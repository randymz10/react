import PropTypes from 'prop-types';

// const saludos = () => 'Saludos a todos';

// const newMessage = {
//     title: 'randy',
//     message: 'Hola mundo'
// };

export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
    <h1>{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}