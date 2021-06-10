import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './dashboard.css';
import { PropTypes } from 'prop-types';
import { loadHeroes } from '../../redux/actions/actionCreators';

function Dashboard({ heroes, dispatch }) {
  useEffect(() => {
    dispatch(loadHeroes());
  }, [heroes]);

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link key={hero.id} to={`/detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes
  };
}

export default connect(mapStateToProps)(Dashboard);
