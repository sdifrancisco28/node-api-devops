const request = require('supertest')
const { app, server } = require('./app.js')

jest.useFakeTimers()

describe('GET /', () => {
  afterAll((done) => {
    server.close(done)
  })

  it('should return Hello world', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello world')
  })
})
