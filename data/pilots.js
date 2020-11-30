import darthVader from '../assets/images/pilots/darth-vader.jpg';
import bobaFett from '../assets/images/pilots/boba-fett.jpeg';
import chewie from '../assets/images/pilots/chewie.jpeg';
import han from '../assets/images/pilots/han-solo.jpeg';
import lando from '../assets/images/pilots/lando.jpg';
import nien from '../assets/images/pilots/nien-nunb.jpeg';
import luke from '../assets/images/pilots/luke.jpg';
import biggs from '../assets/images/pilots/biggs.jpeg';
import wedge from '../assets/images/pilots/wedge.jpeg';
import porkins from '../assets/images/pilots/Porkins.jpg';
import arvel from '../assets/images/pilots/arvel.jpg';
import anakin from '../assets/images/pilots/anakin.jpg';
import padme from '../assets/images/pilots/padme.jpg';
import typho from '../assets/images/pilots/typho.jpeg';
import ric from '../assets/images/pilots/ric.jpeg';
import maul from '../assets/images/pilots/maul.jpeg';
import obi from '../assets/images/pilots/obi.png';
import plo from '../assets/images/pilots/plo.jpeg';
import grievous from '../assets/images/pilots/grievous.jpeg';
import jango from '../assets/images/pilots/jango.png';

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
        "id": 4,
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
    {
        "id": 13,
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male",
        "homeworld": "Kashyyyk",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/3/"
        ],
        "vehicles": [
            "http://swapi.dev/api/vehicles/19/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/10/",
            "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-10T16:42:45.066000Z",
        "edited": "2014-12-20T21:17:50.332000Z",
        "url": "http://swapi.dev/api/people/13/",
        "images": [
            chewie
        ]
    },
    {
        "id": 14,
        "name": "Han Solo",
        "height": "180",
        "mass": "80",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "29BBY",
        "gender": "male",
        "homeworld": "Corellia",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/10/",
            "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-10T16:49:14.582000Z",
        "edited": "2014-12-20T21:17:50.334000Z",
        "url": "http://swapi.dev/api/people/14/",
        "images": [
            han
        ]
    },
    {
        "id": 25,
        "name": "Lando Calrissian",
        "height": "177",
        "mass": "79",
        "hair_color": "black",
        "skin_color": "dark",
        "eye_color": "brown",
        "birth_year": "31BBY",
        "gender": "male",
        "homeworld": "Socorro",
        "films": [
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/10/"
        ],
        "created": "2014-12-15T12:56:32.683000Z",
        "edited": "2014-12-20T21:17:50.357000Z",
        "url": "http://swapi.dev/api/people/25/",
        "images": [lando]
    },
    {
        "id": 31,
        "name": "Nien Nunb",
        "height": "160",
        "mass": "68",
        "hair_color": "none",
        "skin_color": "grey",
        "eye_color": "black",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Sullust",
        "films": [
            "http://swapi.dev/api/films/3/"
        ],
        "species": [
            "http://swapi.dev/api/species/10/"
        ],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/10/"
        ],
        "created": "2014-12-18T11:26:18.541000Z",
        "edited": "2014-12-20T21:17:50.371000Z",
        "url": "http://swapi.dev/api/people/31/",
        "images": [nien]
    },
    {
        "id": 1,
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/people/1/",
        "images": [luke]
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "height": "183",
        "mass": "84",
        "hair_color": "black",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "24BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
            "http://swapi.dev/api/films/1/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/12/"
        ],
        "created": "2014-12-10T15:59:50.509000Z",
        "edited": "2014-12-20T21:17:50.323000Z",
        "url": "http://swapi.dev/api/people/9/",
        "images": [biggs]
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "height": "170",
        "mass": "77",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "hazel",
        "birth_year": "21BBY",
        "gender": "male",
        "homeworld": "Corellia",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/14/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/12/"
        ],
        "created": "2014-12-12T11:08:06.469000Z",
        "edited": "2014-12-20T21:17:50.341000Z",
        "url": "http://swapi.dev/api/people/18/",
        "images": [wedge]
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "height": "180",
        "mass": "110",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Bestine IV",
        "films": [
            "http://swapi.dev/api/films/1/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/12/"
        ],
        "created": "2014-12-12T11:16:56.569000Z",
        "edited": "2014-12-20T21:17:50.343000Z",
        "url": "http://swapi.dev/api/people/19/",
        "images": [porkins]
    },
    {
        "id": 29,
        "name": "Arvel Crynyd",
        "height": "unknown",
        "mass": "unknown",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "brown",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Unknown",
        "films": [
            "http://swapi.dev/api/films/3/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/28/"
        ],
        "created": "2014-12-18T11:16:33.020000Z",
        "edited": "2014-12-20T21:17:50.367000Z",
        "url": "http://swapi.dev/api/people/29/",
        "images": [arvel]
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/44/",
            "http://swapi.dev/api/vehicles/46/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/39/",
            "http://swapi.dev/api/starships/59/",
            "http://swapi.dev/api/starships/65/"
        ],
        "created": "2014-12-10T16:20:44.310000Z",
        "edited": "2014-12-20T21:17:50.327000Z",
        "url": "http://swapi.dev/api/people/11/",
        "images": [anakin]
    },
    {
        "id": 35,
        "name": "Padmé Amidala",
        "height": "185",
        "mass": "45",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "46BBY",
        "gender": "female",
        "homeworld": "Naboo",
        "films": [
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/39/",
            "http://swapi.dev/api/starships/49/",
            "http://swapi.dev/api/starships/64/"
        ],
        "created": "2014-12-19T17:28:26.926000Z",
        "edited": "2014-12-20T21:17:50.381000Z",
        "url": "http://swapi.dev/api/people/35/",
        "images": [padme]
    },
    {
        "id": 60,
        "name": "Gregar Typho",
        "height": "185",
        "mass": "85",
        "hair_color": "black",
        "skin_color": "dark",
        "eye_color": "brown",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Naboo",
        "films": [
            "http://swapi.dev/api/films/5/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/39/"
        ],
        "created": "2014-12-20T11:10:10.381000Z",
        "edited": "2014-12-20T21:17:50.445000Z",
        "url": "http://swapi.dev/api/people/60/",
        "images": [typho]
    },
    {
        "id": 39,
        "name": "Ric Olié",
        "height": "183",
        "mass": "unknown",
        "hair_color": "brown",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Naboo",
        "films": [
            "http://swapi.dev/api/films/4/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/40/"
        ],
        "created": "2014-12-19T17:45:01.522000Z",
        "edited": "2014-12-20T21:17:50.392000Z",
        "url": "http://swapi.dev/api/people/39/",
        "images": [ric]
    },
    {
        "id": 44,
        "name": "Darth Maul",
        "height": "175",
        "mass": "80",
        "hair_color": "none",
        "skin_color": "red",
        "eye_color": "yellow",
        "birth_year": "54BBY",
        "gender": "male",
        "homeworld": "Dathomir",
        "films": [
            "http://swapi.dev/api/films/4/"
        ],
        "species": [
            "http://swapi.dev/api/species/22/"
        ],
        "vehicles": [
            "http://swapi.dev/api/vehicles/42/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/41/"
        ],
        "created": "2014-12-19T18:00:41.929000Z",
        "edited": "2014-12-20T21:17:50.403000Z",
        "url": "http://swapi.dev/api/people/44/",
        "images": [maul]
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "Stewjon",
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "http://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/48/",
            "http://swapi.dev/api/starships/59/",
            "http://swapi.dev/api/starships/64/",
            "http://swapi.dev/api/starships/65/",
            "http://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "http://swapi.dev/api/people/10/",
        "images": [obi]
    },
    {
        "id": 58,
        "name": "Plo Koon",
        "height": "188",
        "mass": "80",
        "hair_color": "none",
        "skin_color": "orange",
        "eye_color": "black",
        "birth_year": "22BBY",
        "gender": "male",
        "homeworld": "Dorin",
        "films": [
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/26/"
        ],
        "vehicles": [],
        "starships": [
            "http://swapi.dev/api/starships/48/"
        ],
        "created": "2014-12-20T10:49:19.859000Z",
        "edited": "2014-12-20T21:17:50.439000Z",
        "url": "http://swapi.dev/api/people/58/",
        "images": [plo]
    },
    {
        "id": 79,
        "name": "Grievous",
        "height": "216",
        "mass": "159",
        "hair_color": "none",
        "skin_color": "brown, white",
        "eye_color": "green, yellow",
        "birth_year": "unknown",
        "gender": "male",
        "homeworld": "Kalee",
        "films": [
            "http://swapi.dev/api/films/6/"
        ],
        "species": [
            "http://swapi.dev/api/species/36/"
        ],
        "vehicles": [
            "http://swapi.dev/api/vehicles/60/"
        ],
        "starships": [
            "http://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-20T19:43:53.348000Z",
        "edited": "2014-12-20T21:17:50.488000Z",
        "url": "http://swapi.dev/api/people/79/",
        "images": [grievous]
    },
    {
        "id": 69,
        "name": "Jango Fett",
        "height": "183",
        "mass": "79",
        "hair_color": "black",
        "skin_color": "tan",
        "eye_color": "brown",
        "birth_year": "66BBY",
        "gender": "male",
        "homeworld": "Concord Dawn",
        "films": [
            "http://swapi.dev/api/films/5/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T16:54:41.620000Z",
        "edited": "2014-12-20T21:17:50.465000Z",
        "url": "http://swapi.dev/api/people/69/",
        "images": [jango]
    },
];

export default pilots;