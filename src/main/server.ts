import 'module-alias/register';
import app from './config/app';

app.listen(3001, () => {
  console.log('Server ON');
});
