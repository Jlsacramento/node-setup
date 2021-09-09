import app from './server';

app.listen(process.env.NODE_ENV || 3000, () => {
  console.log('API is only!');
});
