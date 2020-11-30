import aWing from '../assets/images/starships/a-wing.webp';
import bWing from '../assets/images/starships/b-wing.webp';
import executor from '../assets/images/starships/executor.webp';
import falcon from '../assets/images/starships/falcon.jpg';
import slave1 from '../assets/images/starships/slave1.jpeg';
import starDestroyer from '../assets/images/starships/star-destroyer.jpeg';
import tantiveIV from '../assets/images/starships/tantive-iv.jpeg';
import tydirium from '../assets/images/starships/tydirium.webp';
import xWing from '../assets/images/starships/x-wing.jpg';
import yWing from '../assets/images/starships/y-wing.jpeg';

// TODO: number formatting
// TODO: images
const starships = [
    {
        "id": 2,
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3,500,000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "cargo_capacity": "3,000,000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette",
        "pilots": [],
        "films": [
            1,3,6
        ],
        "created": "2014-12-10T14:20:33.369000Z",
        "edited": "2014-12-20T21:23:49.867000Z",
        "url": "http://swapi.dev/api/starships/2/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 3,
        "name": "Star Destroyer",
        "model": "Imperial I-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "150,000,000",
        "length": "1,600",
        "max_atmosphering_speed": "975",
        "crew": "47,060",
        "passengers": "n/a",
        "cargo_capacity": "36,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "Star Destroyer",
        "pilots": [],
        "films": [
            1,2,3
        ],
        "created": "2014-12-10T15:08:19.848000Z",
        "edited": "2014-12-20T21:23:49.870000Z",
        "url": "http://swapi.dev/api/starships/3/",
        "images": [
            starDestroyer
        ]
    },
    {
        "id": 5,
        "name": "Sentinel-class landing craft",
        "model": "Sentinel-class landing craft",
        "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
        "cost_in_credits": "240,000",
        "length": "38",
        "max_atmosphering_speed": "1,000",
        "crew": "5",
        "passengers": "75",
        "cargo_capacity": "180,000",
        "consumables": "1 month",
        "hyperdrive_rating": "1.0",
        "MGLT": "70",
        "starship_class": "landing craft",
        "pilots": [],
        "films": [
            1
        ],
        "created": "2014-12-10T15:48:00.586000Z",
        "edited": "2014-12-20T21:23:49.873000Z",
        "url": "http://swapi.dev/api/starships/5/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 9,
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1,000,000,000,000",
        "length": "120,000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1,000,000,000,000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "pilots": [],
        "films": [
            1
        ],
        "created": "2014-12-10T16:36:50.509000Z",
        "edited": "2014-12-20T21:26:24.783000Z",
        "url": "http://swapi.dev/api/starships/9/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 10,
        "name": "Millennium Falcon",
        "model": "YT-1300 light freighter",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "100,000",
        "length": "34.37",
        "max_atmosphering_speed": "1,050",
        "crew": "4",
        "passengers": "6",
        "cargo_capacity": "100,000",
        "consumables": "2 months",
        "hyperdrive_rating": "0.5",
        "MGLT": "75",
        "starship_class": "Light freighter",
        "pilots": [
            13,14,25,31
        ],
        "films": [
            1,2,3
        ],
        "created": "2014-12-10T16:59:45.094000Z",
        "edited": "2014-12-20T21:23:49.880000Z",
        "url": "http://swapi.dev/api/starships/10/",
        "images": [
            falcon
        ]
    },
    {
        "id": 11,
        "name": "Y-wing",
        "model": "BTL Y-wing",
        "manufacturer": "Koensayr Manufacturing",
        "cost_in_credits": "134,999",
        "length": "14",
        "max_atmosphering_speed": "1,000",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "80",
        "starship_class": "assault starfighter",
        "pilots": [],
        "films": [
            1,2,3
        ],
        "created": "2014-12-12T11:00:39.817000Z",
        "edited": "2014-12-20T21:23:49.883000Z",
        "url": "http://swapi.dev/api/starships/11/",
        "images": [
            yWing
        ]
    },
    {
        "id": 12,
        "name": "X-wing",
        "model": "T-65 X-wing",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": "149,999",
        "length": "12.5",
        "max_atmosphering_speed": "1,050",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "100",
        "starship_class": "Starfighter",
        "pilots": [
            1,9,18,19
        ],
        "films": [
            1,2,3
        ],
        "created": "2014-12-12T11:19:05.340000Z",
        "edited": "2014-12-20T21:23:49.886000Z",
        "url": "http://swapi.dev/api/starships/12/",
        "images": [
            xWing
        ]
    },
    {
        "id": 13,
        "name": "TIE Advanced x1",
        "model": "Twin Ion Engine Advanced x1",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "unknown",
        "length": "9.2",
        "max_atmosphering_speed": "1,200",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "150",
        "consumables": "5 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "105",
        "starship_class": "Starfighter",
        "pilots": [
            4
        ],
        "films": [
            1
        ],
        "created": "2014-12-12T11:21:32.991000Z",
        "edited": "2014-12-20T21:23:49.889000Z",
        "url": "http://swapi.dev/api/starships/13/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 15,
        "name": "Executor",
        "model": "Executor-class star dreadnought",
        "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
        "cost_in_credits": "1,143,350,000",
        "length": "19,000",
        "max_atmosphering_speed": "n/a",
        "crew": "279,144",
        "passengers": "38000",
        "cargo_capacity": "250,000,000",
        "consumables": "6 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "40",
        "starship_class": "Star dreadnought",
        "pilots": [],
        "films": [
            2,3
        ],
        "created": "2014-12-15T12:31:42.547000Z",
        "edited": "2014-12-20T21:23:49.893000Z",
        "url": "http://swapi.dev/api/starships/15/",
        "images": [
            executor
        ]
    },
    {
        "id": 17,
        "name": "Rebel transport",
        "model": "GR-75 medium transport",
        "manufacturer": "Gallofree Yards, Inc.",
        "cost_in_credits": "unknown",
        "length": "90",
        "max_atmosphering_speed": "650",
        "crew": "6",
        "passengers": "90",
        "cargo_capacity": "19,000,000",
        "consumables": "6 months",
        "hyperdrive_rating": "4.0",
        "MGLT": "20",
        "starship_class": "Medium transport",
        "pilots": [],
        "films": [
            2,3
        ],
        "created": "2014-12-15T12:34:52.264000Z",
        "edited": "2014-12-20T21:23:49.895000Z",
        "url": "http://swapi.dev/api/starships/17/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 21,
        "name": "Slave 1",
        "model": "Firespray-31-class patrol and attack",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "unknown",
        "length": "21.5",
        "max_atmosphering_speed": "1,000",
        "crew": "1",
        "passengers": "6",
        "cargo_capacity": "70,000",
        "consumables": "1 month",
        "hyperdrive_rating": "3.0",
        "MGLT": "70",
        "starship_class": "Patrol and attack craft",
        "pilots": [
            69,22
        ],
        "films": [
            2,5
        ],
        "created": "2014-12-15T13:00:56.332000Z",
        "edited": "2014-12-20T21:23:49.897000Z",
        "url": "http://swapi.dev/api/starships/21/",
        "images": [
            slave1
        ],
        "description": "The deadly Slave I was infamous for its association with Jango Fett, a bounty hunter in Mandalorian armor. Fett packed the craft with weapons, from laser cannons and projectile launchers to seismic charges. Boba Fett inherited Slave I upon Jango’s death, but Aurra Sing crashed it on Florrum and Boba was taken into Republic custody. Hondo Ohnaka repaired Slave I, and Boba later reclaimed it. A generation after Jango’s death, the distinctive craft remained the last thing fugitives wanted to see on their scanners."
    },
    {
        "id": 22,
        "name": "Imperial shuttle",
        "model": "Lambda-class T-4a shuttle",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "240,000",
        "length": "20",
        "max_atmosphering_speed": "850",
        "crew": "6",
        "passengers": "20",
        "cargo_capacity": "80,000",
        "consumables": "2 months",
        "hyperdrive_rating": "1.0",
        "MGLT": "50",
        "starship_class": "Armed government transport",
        "pilots": [
            1,13,14
        ],
        "films": [
            2,3
        ],
        "created": "2014-12-15T13:04:47.235000Z",
        "edited": "2014-12-20T21:23:49.900000Z",
        "url": "http://swapi.dev/api/starships/22/",
        "images": [
            tydirium
        ]
    },
    {
        "id": 23,
        "name": "EF76 Nebulon-B escort frigate",
        "model": "EF76 Nebulon-B escort frigate",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "8,500,000",
        "length": "300",
        "max_atmosphering_speed": "800",
        "crew": "854",
        "passengers": "75",
        "cargo_capacity": "6,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "40",
        "starship_class": "Escort ship",
        "pilots": [],
        "films": [
            2,3
        ],
        "created": "2014-12-15T13:06:30.813000Z",
        "edited": "2014-12-20T21:23:49.902000Z",
        "url": "http://swapi.dev/api/starships/23/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 27,
        "name": "Calamari Cruiser",
        "model": "MC80 Liberty type Star Cruiser",
        "manufacturer": "Mon Calamari shipyards",
        "cost_in_credits": "104,000,000",
        "length": "1,200",
        "max_atmosphering_speed": "n/a",
        "crew": "5,400",
        "passengers": "1,200",
        "cargo_capacity": "unknown",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "60",
        "starship_class": "Star Cruiser",
        "pilots": [],
        "films": [
            3
        ],
        "created": "2014-12-18T10:54:57.804000Z",
        "edited": "2014-12-20T21:23:49.904000Z",
        "url": "http://swapi.dev/api/starships/27/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 28,
        "name": "A-wing",
        "model": "RZ-1 A-wing Interceptor",
        "manufacturer": "Alliance Underground Engineering, Incom Corporation",
        "cost_in_credits": "175,000",
        "length": "9.6",
        "max_atmosphering_speed": "1,300",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "40",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "120",
        "starship_class": "Starfighter",
        "pilots": [
            29
        ],
        "films": [
            3
        ],
        "created": "2014-12-18T11:16:34.542000Z",
        "edited": "2014-12-20T21:23:49.907000Z",
        "url": "http://swapi.dev/api/starships/28/",
        "images": [
            aWing
        ]
    },
    {
        "id": 29,
        "name": "B-wing",
        "model": "A/SF-01 B-wing starfighter",
        "manufacturer": "Slayn & Korpil",
        "cost_in_credits": "220,000",
        "length": "16.9",
        "max_atmosphering_speed": "950",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "45",
        "consumables": "1 week",
        "hyperdrive_rating": "2.0",
        "MGLT": "91",
        "starship_class": "Assault Starfighter",
        "pilots": [],
        "films": [
            3
        ],
        "created": "2014-12-18T11:18:04.763000Z",
        "edited": "2014-12-20T21:23:49.909000Z",
        "url": "http://swapi.dev/api/starships/29/",
        "images": [
            bWing
        ]
    },
    {
        "id": 31,
        "name": "Republic Cruiser",
        "model": "Consular-class cruiser",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "unknown",
        "length": "115",
        "max_atmosphering_speed": "900",
        "crew": "9",
        "passengers": "16",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "2.0",
        "MGLT": "unknown",
        "starship_class": "Space cruiser",
        "pilots": [],
        "films": [
            4
        ],
        "created": "2014-12-19T17:01:31.488000Z",
        "edited": "2014-12-20T21:23:49.912000Z",
        "url": "http://swapi.dev/api/starships/31/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 32,
        "name": "Droid control ship",
        "model": "Lucrehulk-class Droid Control Ship",
        "manufacturer": "Hoersch-Kessel Drive, Inc.",
        "cost_in_credits": "unknown",
        "length": "3,170",
        "max_atmosphering_speed": "n/a",
        "crew": "175",
        "passengers": "139,000",
        "cargo_capacity": "4,000,000,000",
        "consumables": "500 days",
        "hyperdrive_rating": "2.0",
        "MGLT": "unknown",
        "starship_class": "Droid control ship",
        "pilots": [],
        "films": [
            4,5,6
        ],
        "created": "2014-12-19T17:04:06.323000Z",
        "edited": "2014-12-20T21:23:49.915000Z",
        "url": "http://swapi.dev/api/starships/32/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 39,
        "name": "Naboo fighter",
        "model": "N-1 starfighter",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps",
        "cost_in_credits": "200,000",
        "length": "11",
        "max_atmosphering_speed": "1,100",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "65",
        "consumables": "7 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "Starfighter",
        "pilots": [
            11,35,60
        ],
        "films": [
            4,5
        ],
        "created": "2014-12-19T17:39:17.582000Z",
        "edited": "2014-12-20T21:23:49.917000Z",
        "url": "http://swapi.dev/api/starships/39/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 40,
        "name": "Naboo Royal Starship",
        "model": "J-type 327 Nubian royal starship",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        "cost_in_credits": "unknown",
        "length": "76",
        "max_atmosphering_speed": "920",
        "crew": "8",
        "passengers": "unknown",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "1.8",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [
            39
        ],
        "films": [
            4
        ],
        "created": "2014-12-19T17:45:03.506000Z",
        "edited": "2014-12-20T21:23:49.919000Z",
        "url": "http://swapi.dev/api/starships/40/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 41,
        "name": "Scimitar",
        "model": "Star Courier",
        "manufacturer": "Republic Sienar Systems",
        "cost_in_credits": "55,000,000",
        "length": "26.5",
        "max_atmosphering_speed": "1,180",
        "crew": "1",
        "passengers": "6",
        "cargo_capacity": "2,500,000",
        "consumables": "30 days",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "Space Transport",
        "pilots": [
            44
        ],
        "films": [
            4
        ],
        "created": "2014-12-20T09:39:56.116000Z",
        "edited": "2014-12-20T21:23:49.922000Z",
        "url": "http://swapi.dev/api/starships/41/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 43,
        "name": "J-type diplomatic barge",
        "model": "J-type diplomatic barge",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        "cost_in_credits": "2,000,000",
        "length": "39",
        "max_atmosphering_speed": "2,000",
        "crew": "5",
        "passengers": "10",
        "cargo_capacity": "unknown",
        "consumables": "1 year",
        "hyperdrive_rating": "0.7",
        "MGLT": "unknown",
        "starship_class": "Diplomatic barge",
        "pilots": [],
        "films": [
            5
        ],
        "created": "2014-12-20T11:05:51.237000Z",
        "edited": "2014-12-20T21:23:49.925000Z",
        "url": "http://swapi.dev/api/starships/43/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 47,
        "name": "AA-9 Coruscant freighter",
        "model": "Botajef AA-9 Freighter-Liner",
        "manufacturer": "Botajef Shipyards",
        "cost_in_credits": "unknown",
        "length": "390",
        "max_atmosphering_speed": "unknown",
        "crew": "unknown",
        "passengers": "30,000",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "unknown",
        "MGLT": "unknown",
        "starship_class": "freighter",
        "pilots": [],
        "films": [
            5
        ],
        "created": "2014-12-20T17:24:23.509000Z",
        "edited": "2014-12-20T21:23:49.928000Z",
        "url": "http://swapi.dev/api/starships/47/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 48,
        "name": "Jedi starfighter",
        "model": "Delta-7 Aethersprite-class interceptor",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "180,000",
        "length": "8",
        "max_atmosphering_speed": "1,150",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "60",
        "consumables": "7 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "Starfighter",
        "pilots": [
            10,58
        ],
        "films": [
            5,6
        ],
        "created": "2014-12-20T17:35:23.906000Z",
        "edited": "2014-12-20T21:23:49.930000Z",
        "url": "http://swapi.dev/api/starships/48/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 49,
        "name": "H-type Nubian yacht",
        "model": "H-type Nubian yacht",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps",
        "cost_in_credits": "unknown",
        "length": "47.9",
        "max_atmosphering_speed": "8,000",
        "crew": "4",
        "passengers": "unknown",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "0.9",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [
            35
        ],
        "films": [
            5
        ],
        "created": "2014-12-20T17:46:46.847000Z",
        "edited": "2014-12-20T21:23:49.932000Z",
        "url": "http://swapi.dev/api/starships/49/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 52,
        "name": "Republic Assault ship",
        "model": "Acclamator I-class assault ship",
        "manufacturer": "Rothana Heavy Engineering",
        "cost_in_credits": "unknown",
        "length": "752",
        "max_atmosphering_speed": "unknown",
        "crew": "700",
        "passengers": "16,000",
        "cargo_capacity": "11,250,000",
        "consumables": "2 years",
        "hyperdrive_rating": "0.6",
        "MGLT": "unknown",
        "starship_class": "assault ship",
        "pilots": [],
        "films": [
            5
        ],
        "created": "2014-12-20T18:08:42.926000Z",
        "edited": "2014-12-20T21:23:49.935000Z",
        "url": "http://swapi.dev/api/starships/52/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 58,
        "name": "Solar Sailer",
        "model": "Punworcca 116-class interstellar sloop",
        "manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
        "cost_in_credits": "35,700",
        "length": "15.2",
        "max_atmosphering_speed": "1,600",
        "crew": "3",
        "passengers": "11",
        "cargo_capacity": "240",
        "consumables": "7 days",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [],
        "films": [
            5
        ],
        "created": "2014-12-20T18:37:56.969000Z",
        "edited": "2014-12-20T21:23:49.937000Z",
        "url": "http://swapi.dev/api/starships/58/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 59,
        "name": "Trade Federation cruiser",
        "model": "Providence-class carrier/destroyer",
        "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        "cost_in_credits": "125,000,000",
        "length": "1,088",
        "max_atmosphering_speed": "1,050",
        "crew": "600",
        "passengers": "48,247",
        "cargo_capacity": "50,000,000",
        "consumables": "4 years",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "capital ship",
        "pilots": [
            10,11
        ],
        "films": [
            6
        ],
        "created": "2014-12-20T19:40:21.902000Z",
        "edited": "2014-12-20T21:23:49.941000Z",
        "url": "http://swapi.dev/api/starships/59/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 61,
        "name": "Theta-class T-2c shuttle",
        "model": "Theta-class T-2c shuttle",
        "manufacturer": "Cygnus Spaceworks",
        "cost_in_credits": "1,000,000",
        "length": "18.5",
        "max_atmosphering_speed": "2,000",
        "crew": "5",
        "passengers": "16",
        "cargo_capacity": "50,000",
        "consumables": "56 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "transport",
        "pilots": [],
        "films": [
            6
        ],
        "created": "2014-12-20T19:48:40.409000Z",
        "edited": "2014-12-20T21:23:49.944000Z",
        "url": "http://swapi.dev/api/starships/61/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 63,
        "name": "Republic attack cruiser",
        "model": "Senator-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
        "cost_in_credits": "59,000,000",
        "length": "1,137",
        "max_atmosphering_speed": "975",
        "crew": "7,400",
        "passengers": "2,000",
        "cargo_capacity": "20,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "star destroyer",
        "pilots": [],
        "films": [
            6
        ],
        "created": "2014-12-20T19:52:56.232000Z",
        "edited": "2014-12-20T21:23:49.946000Z",
        "url": "http://swapi.dev/api/starships/63/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 64,
        "name": "Naboo star skiff",
        "model": "J-type star skiff",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
        "cost_in_credits": "unknown",
        "length": "29.2",
        "max_atmosphering_speed": "1,050",
        "crew": "3",
        "passengers": "3",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "0.5",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [
            10,35
        ],
        "films": [
            6
        ],
        "created": "2014-12-20T19:55:15.396000Z",
        "edited": "2014-12-20T21:23:49.948000Z",
        "url": "http://swapi.dev/api/starships/64/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 65,
        "name": "Jedi Interceptor",
        "model": "Eta-2 Actis-class light interceptor",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "320,000",
        "length": "5.47",
        "max_atmosphering_speed": "1,500",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "60",
        "consumables": "2 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "starfighter",
        "pilots": [
            10,11
        ],
        "films": [
            6
        ],
        "created": "2014-12-20T19:56:57.468000Z",
        "edited": "2014-12-20T21:23:49.951000Z",
        "url": "http://swapi.dev/api/starships/65/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 66,
        "name": "arc-170",
        "model": "Aggressive Reconnaissance-170 starfighte",
        "manufacturer": "Incom Corporation, Subpro Corporation",
        "cost_in_credits": "155,000",
        "length": "14.5",
        "max_atmosphering_speed": "1,000",
        "crew": "3",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "5 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "100",
        "starship_class": "starfighter",
        "pilots": [],
        "films": [
            6
        ],
        "created": "2014-12-20T20:03:48.603000Z",
        "edited": "2014-12-20T21:23:49.953000Z",
        "url": "http://swapi.dev/api/starships/66/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 68,
        "name": "Banking clan frigte",
        "model": "Munificent-class star frigate",
        "manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
        "cost_in_credits": "57,000,000",
        "length": "825",
        "max_atmosphering_speed": "unknown",
        "crew": "200",
        "passengers": "unknown",
        "cargo_capacity": "40,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "cruiser",
        "pilots": [],
        "films": [
            6
        ],
        "created": "2014-12-20T20:07:11.538000Z",
        "edited": "2014-12-20T21:23:49.956000Z",
        "url": "http://swapi.dev/api/starships/68/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 74,
        "name": "Belbullab-22 starfighter",
        "model": "Belbullab-22 starfighter",
        "manufacturer": "Feethan Ottraw Scalable Assemblies",
        "cost_in_credits": "168,000",
        "length": "6.71",
        "max_atmosphering_speed": "1,100",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "140",
        "consumables": "7 days",
        "hyperdrive_rating": "6",
        "MGLT": "unknown",
        "starship_class": "starfighter",
        "pilots": [
            10,79
        ],
        "films": [
            6
        ],
        "created": "2014-12-20T20:38:05.031000Z",
        "edited": "2014-12-20T21:23:49.959000Z",
        "url": "http://swapi.dev/api/starships/74/",
        "images": [
            tantiveIV
        ]
    },
    {
        "id": 75,
        "name": "V-wing",
        "model": "Alpha-3 Nimbus-class V-wing starfighter",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "102,500",
        "length": "7.9",
        "max_atmosphering_speed": "1,050",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "60",
        "consumables": "15 hours",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "starfighter",
        "pilots": [],
        "films": [
            6
        ],
        "created": "2014-12-20T20:43:04.349000Z",
        "edited": "2014-12-20T21:23:49.961000Z",
        "url": "http://swapi.dev/api/starships/75/",
        "images": [
            tantiveIV
        ]
    },
];

export default starships;