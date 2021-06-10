import axios from 'axios';
import { loadHeroes, loadHeroesAxios } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadHeroes', () => {
  test('should dispatch LOAD_HEROES_ERROR', async () => {
    const loadHeroesResponse = loadHeroes();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadHeroesResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_HEROES_ERROR',
    });
  });

  test('should dispatch LOAD_HEROES', async () => {
    const loadHeroesResponse = loadHeroes();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn(),
    });
    const dispatch = jest.fn();
    await loadHeroesResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_HEROES,
    });
  });
});
describe('loadHeroesAxios', () => {
  test('should dispatch LOAD_HEROES', async () => {
    axios.mockResolvedValue({ data: ['Skylab mola moltisim'] });
    const dispatch = jest.fn();
    // act
    await loadHeroesAxios()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_HEROES,
      heroes: ['Skylab mola moltisim'],
    });
  });

  test('should dispatch LOAD_HEROES_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    // act
    await loadHeroesAxios()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_HEROES_ERROR',
    });
  });
});
