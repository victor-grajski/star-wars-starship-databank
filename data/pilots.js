import darthVader from '../assets/images/pilots/darth-vader.jpg';
import bobaFett from '../assets/images/pilots/boba-fett.jpeg';

const pilots = [
    {
        "id": 22,
        "name": "Boba Fett",
        "height": "183",
        "mass": "78.2",
        "hair_color": "black",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "31.5BBY",
        "gender": "male",
        "homeworld": "Kamino",
        "films": [
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/5/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/21/"
        ],
        "created": "2014-12-15T12:49:32.457000Z",
        "edited": "2014-12-20T21:17:50.349000Z",
        "url": "http://swapi.dev/api/people/22/",
        "images": [
            bobaFett
        ]
    },
    {
        "id": 13,
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "http://swapi.dev/api/people/4/",
        "images": [
            darthVader
        ]
    },
];

export default pilots;