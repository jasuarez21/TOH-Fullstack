/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { deleteHero, getHeroById, updateHero } from '../../redux/actions/actionCreators';
import './HeroDetail.css';

function HeroDetail({ selectedHero, dispatch }) {
  const { heroId } = useParams();
  const [heroName, setHeroName] = useState(selectedHero?.name);

  useEffect(() => {
    dispatch(getHeroById(heroId));
  }, [heroId]);
  useEffect(() => {
    setHeroName(selectedHero?.name);
  }, [selectedHero]);
  function handleNameChange(event) {
    setHeroName(event.target.value);
  }

  function save() {
    dispatch(updateHero({ id: selectedHero.id, name: heroName }));
  }

  return (
    selectedHero?.id
      ? (
        <div>
          <h2>
            {heroName}
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            {selectedHero.id}
          </div>
          <div>
            <label htmlFor="hero-name">
              Hero name:
              <input
                id="hero-name"
                value={heroName}
                onChange={handleNameChange}
                placeholder="Hero name"
              />
            </label>
          </div>
          <button type="button">go back</button>
          <button onClick={save} type="button">save</button>
          <button onClick={() => { dispatch(deleteHero(heroId)); }} type="button">delete</button>
        </div>
      )
      : (
        <h3>
          There is no hero with id=
          {heroId}
        </h3>
      )

  );
}

HeroDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedHero: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};

function mapStateToProps(store) {
  return {
    selectedHero: store.hero
  };
}

export default connect(mapStateToProps)(HeroDetail);
