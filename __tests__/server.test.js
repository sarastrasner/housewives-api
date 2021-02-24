'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

//require('@code-fellows/supergoose');

describe('web server', () => {

  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });


  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.get('/blarg');
    expect(response.status).toBe(404);
  });


  it('should respond properly on a GET request to /unicorns with our db as an array', async () => {
    const response = await mockRequest.get('/unicorns')
    expect(response.status).toBe(200);
  });


  // it('can create() a new unicorn item', () => {
  //   let obj = { name: 'Sara', horns:2 };
  //   let expected = { name: 'Sara', horns:2 };
  //   return unicorn.create(obj)
  //     .then(record => {
  //       Object.keys(obj).forEach(key => {
  //         expect(record[key]).toEqual(expected[key]);
  //       });
  //     });
  // });

  // it('should respond properly on a GET request to /unicorns:id and return the referenced record', async () => {
  //   const id = 1;
  //   const response = await mockRequest.post('/unicorns').query(id);
  //   expect(response.status).toBe(200);
  // });

  // it('should respond properly on a POST request to /unicorns and return the new record', async () => {
  //   const data = { name: 'Sara' }
  //   const response = await mockRequest.post('/unicorns').query(data);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeTruthy();
  //   // expect(response.body).toContain(data);
  //   expect(response.body).toBeDefined;

  // }); 


  // it('should respond properly on a DELETE request to /unicorns and return null', async () => {
  //   const response = await mockRequest.delete('/unicorns/:id');
  //   expect(response.status).toBe(200);
  // });


  // it('should respond properly on a PUT request to /unicorns and return the db object', async () => {
  //   const data = { name: 'Sara ' }
  //   const response = await mockRequest.put('/unicorns/:id').query(data);
  //   expect(response.status).toBe(200);
  //   // expect(response.body).toBe(data);
  //   expect(response.body).toBeDefined;
  // });

});