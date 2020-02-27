var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(public, 'index.html'))
});

app.get("/coordinates", urlencodedParser, function (request, response) {
   response.sendFile(__dirname + "public/index.html");
});
app.post("/", urlencodedParser, function (req, res) {
   console.log(req.body);
   if(!req.body) return res.sendStatus(400);
   console.log(req.body);
   res.send(`${req.body.x} - ${req.body.y}`);
});

/*Sea Battle*/
function createSeaBattle () {
         const river = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0];
         if (river.indexOf(1, 0) === -1) {
            throw new Error('The all ships are killed');
         } else {
            return (x) => {
               if (typeof x !== 'number') {
                  throw new Error('X is not a number');
               } else if (x < 0 || x > 9) {
                  throw new Error('X is out of the field');
               } else {
                  return (y) => {
                     if (typeof y !== 'number') {
                        throw new Error('Y is not a number');
                     } else if (y !== 0) {
                        throw new Error('Y is out of the field');
                     } else if (river[x] === -1) {
                        throw new Error('You\'ve already shot at this coordinates');
                     } else if (river[x] === 0) {
                        river[x] = -1;
                        return -1;
                     } else if (river[x] === 1) {
                        river[x] = -1;
                        if (river[x - 1] === 1 || river[x + 1] === 1) {
                           return 0;
                        } else {
                           return 1;
                        }
                     }
                  };
               }
            };
         }
      };
   
const seaBattle = createSeaBattle();

module.exports = router;
