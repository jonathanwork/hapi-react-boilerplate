import Hapi from 'hapi';
import Inert from 'inert';
import Path from 'path';
import Vision from 'vision';
import routes from './routes/routes.js'

const public_files = {
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'app')
      }
    }
  }
};

const server_internals = {
    port: process.env.PORT || 8080
    ,host: process.env.IP || "0.0.0.0"
    ,labels: ['http']
};

const server = new Hapi.Server(public_files);

server.connection(server_internals);

server.register([
  Vision
  ,Inert
  ], (err)=> {
    if(err)
      console.error(err);
    server.route(routes.routeContainer);
});

server.start((req, res)=> {
    console.log('server has started');
    console.log('\n\t=> ' + process.env.IP + ':' + process.env.PORT);
});
