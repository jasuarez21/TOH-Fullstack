const {
  getAll,
    createOne,
    getById,
    updateById,
    deleteById,
} = require('../controller/heroesController')();
const Hero = require('../model/heroModel');
jest.mock('../model/heroModel');

describe('When invoked a getAll function', () => {
  test('Should return and object', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    // act
    Hero.find.mockResolvedValueOnce({name: "pepe"})
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});

test('Should to call a json function with creatOne', async () => {
  const req = {
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn()
  };
  Hero.find.mockReturnValueOnce('Pepe')
  await createOne(req, res);
  expect(res.json).toHaveBeenCalled();
});
test('Should to call a send function with createOne', async () => {
  const req = {
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  Hero.mockRejectedValueOnce('Pepe')
  await createOne(req, res);
  expect(res.send).toHaveBeenCalled();
});

test('Should call json function with getById',async () => {
  const req = {
    params: { heroId: 1 }
  };
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  Hero.findById.mockResolvedValueOnce('Pepe')
  await getById(req, res);
  expect(res.json).toHaveBeenCalled();
});
test('Should call send function with rejected getById',async () => {
  const req = {
    params: { heroId: 1 }
  };
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  Hero.findById.mockRejectedValueOnce('Pepe')
  await getById(req, res);
  expect(res.send).toHaveBeenCalled();
});

test('Should test a fn updateById to call json', async () => {
  const req = {
    params: { heroId: 2 },
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  Hero.findByIdAndUpdate.mockResolvedValueOnce('Pepe')
  await updateById(req, res);
  expect(res.json).toHaveBeenCalled();
});

test('Should test a fn updateById to call send with rejected', async () => {
  const req = {
    params: { heroId: 2 },
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  Hero.findByIdAndUpdate.mockRejectedValueOnce('Pepe')
  await updateById(req, res);
  expect(res.send).toHaveBeenCalled();
});
test('Should test a fn deleteById with resolve call json', async () => {
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  const req = {
    params: { body: { heroId: 2 } }
  };
  Hero.findByIdAndDelete.mockResolvedValueOnce('Pepe')
  await deleteById(req, res);
  expect(res.json).toHaveBeenCalled();
});

test('Should test a fn deleteById with rejected call send', async () => {
  const res = {
    json: jest.fn(),
    send: jest.fn()
  };
  const req = {
    params: { body: { heroId: 2 } }
  };
  Hero.findByIdAndDelete.mockRejectedValueOnce('Pepe')
  await deleteById(req, res);
  expect(res.send).toHaveBeenCalled();
});
